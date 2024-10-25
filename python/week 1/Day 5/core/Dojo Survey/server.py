from flask import Flask,session,render_template,request,redirect#type:ignore
app = Flask(__name__)
app.secret_key = 'secret_key'

@app.route('/')
def render():
    return render_template('index.html')

@app.route('/submit',methods=['POST'])
def submit():
    name = request.form['name']
    location= request.form['location']
    language= request.form['language']
    comment = request.form['comment']

    session['name']=name
    session['location']=location
    session['language']=language
    session['comment']=comment
    return redirect('/result')

@app.route('/result')
def result():
    return render_template('result.html')   

if __name__=='__main__':
    app.run(debug=True)