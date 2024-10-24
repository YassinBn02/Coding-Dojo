from flask import Flask, render_template
app = Flask(__name__) 


@app.route('/')

def hello():
    return "Hello world!"

@app.route('/dojo')

def dojo():
    return "Dojo!"

@app.route('/say/<name>')

def hi(name):
    return "Hi "+name

@app.route('/repeat/<int:numb>/<word>')

def repeat(numb,word):
    return (word +" " )*numb




if __name__=="__main__":
    app.run(debug=True) 