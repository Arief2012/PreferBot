from flask import Flask, render_template, request, jsonify
from transformers import BertTokenizer
from transformers import TFBertForSequenceClassification
import tensorflow as tf
import random
import string
import json
import nltk
import pandas as pd
import pickle
from sklearn.svm import SVC
from joblib import load
from pickle import load
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)
with open('model_ds.pkl', 'rb') as file:
    model = pickle.load(file)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/prediksi')
def prediksi():
    return render_template('prediksi.html')

@app.route('/produk')
def produk():
    return render_template('produk.html')

# Pretrained Model
PRE_TRAINED_MODEL = 'indobenchmark/indobert-base-p2'

# Load tokenizer dari pretrained model
bert_tokenizer = BertTokenizer.from_pretrained(PRE_TRAINED_MODEL)

# Load hasil fine-tuning
bert_load_model = TFBertForSequenceClassification.from_pretrained(
    PRE_TRAINED_MODEL, num_labels=27)

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
    prediction_input = [letters.lower(
    ) for letters in prediction_input if letters not in string.punctuation]
    prediction_input = ''.join(prediction_input)

    input_text_tokenized = bert_tokenizer.encode(prediction_input,
                                                 truncation=True,
                                                 padding='max_length',
                                                 return_tensors='tf')

    bert_predict = bert_load_model(input_text_tokenized)  # Lakukan prediksi
    # Softmax function untuk mendapatkan hasil klasifikasi
    bert_predict = tf.nn.softmax(bert_predict[0], axis=-1)
    output = tf.argmax(bert_predict, axis=1)

    response_tag = le.inverse_transform([output])[0]
    res = random.choice(responses[response_tag])

    return res


# [Routing untuk API Prediksi]
@app.route("/get/prediksi_skincare", methods=['POST'])
def ApiDeteksi():
    
    if request.method=='POST':
        # Mengambil nilai dari form
        jenis_kelamin = float(request.form['jenis_kelamin'])
        usia = int(request.form['usia'])
        jenis_kulit = float(request.form['jenis_kulit'])
        masalah_kulit = float(request.form['masalah_kulit'])
        produk_digunakan = float(request.form['produk_digunakan'])
        harga = float(request.form['harga'])

        # Membuat DataFrame untuk prediksi
        df_test = pd.DataFrame(data={
            "JenisKelamin": [jenis_kelamin],
            "Usia": [usia],
            "JenisKulit": [jenis_kulit],
            "MasalahKulit": [masalah_kulit],
            "ProdukMerk": [produk_digunakan],
            "Harga": [harga]
            
        })
    # Melakukan prediksi menggunakan model (SVM)
    
    prediction = model.predict(df_test)
    pred = prediction
    hasil_prediksi = pred.item()[:]
    
    if hasil_prediksi == 'facial wash':
        if produk_digunakan == 0:
            gambar_prediksi = '/static/images/MsGlow_facialwash.jpg'
        elif produk_digunakan == 1:
            gambar_prediksi = '/static/images/Skintific_facialwash.jpg'
        elif produk_digunakan == 2:
            gambar_prediksi = '/static/images/Acnes_facialwash.png'
        elif produk_digunakan == 3:
            gambar_prediksi = '/static/images/Wardah_facialwash.jpg'
        elif produk_digunakan == 4:
            gambar_prediksi = '/static/images/Nivea_facialwash.jpg'
        elif produk_digunakan == 5:
            gambar_prediksi = '/static/images/avoskin.jpg'
        elif produk_digunakan == 6:
            gambar_prediksi = '/static/images/Garnier_facialwash.png'
        elif produk_digunakan == 7:
            gambar_prediksi = '/static/images/Hanasui_facialwash.png'
        elif produk_digunakan == 8:
            gambar_prediksi = '/static/images/bening.jpg'
        elif produk_digunakan == 9:
            gambar_prediksi = '/static/images/bioaqua.jpeg'
        elif produk_digunakan == 10:
            gambar_prediksi = '/static/images/Biore_facialwash.jpg'
        elif produk_digunakan == 11:
            gambar_prediksi = '/static/images/Ponds_facialwash.jpg'
        elif produk_digunakan == 12:
            gambar_prediksi = '/static/images/Loreal_facialwash.jpg'
        elif produk_digunakan == 13:
            gambar_prediksi = '/static/images/Scarlet_facialwash.jpg'
        elif produk_digunakan == 14:
            gambar_prediksi = '/static/images/Emina_facialwash.png'
        elif produk_digunakan == 15:
            gambar_prediksi = '/static/images/himalaya.jpg'
        elif produk_digunakan == 16:
            gambar_prediksi = '/static/images/Mustikaratu_facialwash.jpg'
        elif produk_digunakan == 17:
            gambar_prediksi = '/static/images/Cetaphil.jpg'
        elif produk_digunakan == 18:
            gambar_prediksi = '/static/images/clean&clear_facialwash.png'
        elif produk_digunakan == 19:
            gambar_prediksi = '/static/images/Safi.png'
        elif produk_digunakan == 20:
            gambar_prediksi = '/static/images/Whitelab_facialwash.jpg'
        elif produk_digunakan == 21:
            gambar_prediksi = '/static/images/Citra.jpg'
        elif produk_digunakan == 22:
            gambar_prediksi = '/static/images/Azarine.png'
        elif produk_digunakan == 23:
            gambar_prediksi = '/static/images/St.ives.jpg'
        else:
            gambar_prediksi = '/static/images/None.png'
    
    if produk_digunakan == 0:
        result = 'MsGlow'
    elif produk_digunakan == 1:
        result = 'Skintific'
    elif produk_digunakan == 2:
        result = 'Acnes'
    elif produk_digunakan == 3:
        result = 'Wardah'
    elif produk_digunakan == 4:
        result = 'Nivea'
    elif produk_digunakan == 5:
        result = 'Avoskin'
    elif produk_digunakan == 6:
        result = 'Garnier'
    elif produk_digunakan == 7:
        result = 'Hanasui'
    elif produk_digunakan == 8:
        result = 'Benings'
    elif produk_digunakan == 9:
        result = 'BioAqua'
    elif produk_digunakan == 10:
        result = 'Biore'
    elif produk_digunakan == 11:
        result = 'Ponds'
    elif produk_digunakan == 12:
        result = 'Loreal'
    elif produk_digunakan == 13:
        result = 'Scarlett'
    elif produk_digunakan == 14:
        result = 'Emina'
    elif produk_digunakan == 15:
        result = 'Himalaya'
    elif produk_digunakan == 16:
        result = 'Mustika Ratu'
    elif produk_digunakan == 17:
        result = 'Cetaphil'
    elif produk_digunakan == 18:
        result = 'Clear & Clean'
    elif produk_digunakan == 19:
        result = 'Safi'
    elif produk_digunakan == 20:
        result = 'WhiteLab'
    elif produk_digunakan == 21:
        result = 'Citra'
    elif produk_digunakan == 22:
        result = 'Azarine'
    elif produk_digunakan == 23:
        result = 'St.Ives'
        return result

    
    #Set Path untuk gambar hasil prediksi
    
    #Return hasil prediksi dengan format JSON
    return render_template('prediksi.html',
    hasil_prediksi=hasil_prediksi, produk_digunakan = result, gambar_prediksi = gambar_prediksi)



if __name__ == '__main__':
    app.run(debug=True)