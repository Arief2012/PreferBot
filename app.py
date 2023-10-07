from flask import Flask, render_template, request
from transformers import BertTokenizer
from transformers import TFBertForSequenceClassification
import tensorflow as tf
import random
import string
import json
import nltk
import pandas as pd
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

# Pretrained Model
PRE_TRAINED_MODEL = 'indobenchmark/indobert-base-p2'

# Load tokenizer dari pretrained model
bert_tokenizer = BertTokenizer.from_pretrained(PRE_TRAINED_MODEL)

# Load hasil fine-tuning
bert_load_model = TFBertForSequenceClassification.from_pretrained(PRE_TRAINED_MODEL, num_labels=24)

# Load Model
bert_load_model.load_weights('bert-model.h5')

# Importing the dataset
with open('dataset/preferbot_chat.json') as content:
    data1 = json.load(content)

# Mendapatkan semua data ke dalam list
tags = []  # data tag
inputs = []  # data input atau pattern
responses = {}  # data respon
words = []  # Data kata
classes = []  # Data Kelas atau Tag
documents = []  # Data Kalimat Dokumen
ignore_words = ['?', '!']  # Mengabaikan tanda spesial karakter

for intent in data1['intents']:
    responses[intent['tag']] = intent['responses']
    for lines in intent['patterns']:
        inputs.append(lines)
        tags.append(intent['tag'])
        for pattern in intent['patterns']:
            w = nltk.word_tokenize(pattern)
            words.extend(w)
            documents.append((w, intent['tag']))
            # add to our classes list
            if intent['tag'] not in classes:
                classes.append(intent['tag'])

# Konversi data json ke dalam dataframe
data = pd.DataFrame({"patterns": inputs, "tags": tags})

le = LabelEncoder()
data['tags'] = le.fit_transform(data['tags'])

# [Routing untuk API]
@app.route("/get/chatbot")
def apiDeteksi():
    # NLP
    prediction_input = request.args.get('prediction_input')
    prediction_input = [letters.lower() for letters in prediction_input if letters not in string.punctuation]
    prediction_input = ''.join(prediction_input)

    input_text_tokenized = bert_tokenizer.encode(prediction_input,
                                                truncation=True,
                                                padding='max_length',
                                                return_tensors='tf')

    bert_predict = bert_load_model(input_text_tokenized)  # Lakukan prediksi
    bert_predict = tf.nn.softmax(bert_predict[0], axis=-1)  # Softmax function untuk mendapatkan hasil klasifikasi
    output = tf.argmax(bert_predict, axis=1)

    response_tag = le.inverse_transform([output])[0]
    res = random.choice(responses[response_tag])

    return res

if __name__ == '__main__':
    app.run(debug=True)
