from flask import Flask, render_template, request

app = Flask(__name__)
app.static_folder = 'static'

@app.route("/")
def root():
    return render_template("index.html")

@app.route("/prediksi")
def prediksi():
    return render_template("prediksi.html")

if __name__ == "__main__":
    app.run(debug=True)