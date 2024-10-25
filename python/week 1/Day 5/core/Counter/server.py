from flask import Flask, render_template, session, redirect
app=Flask(__name__)
app.secret_key='supersecretkey' 

@app.route('/')
def visit():
    if 'counter' in session :
        session['counter']+=1
    else:
        session['counter']=1
    return render_template('index.html')

@app.route('/destroy_session')
def clearr():
    session.clear()
    return redirect('/')


if __name__=='__main__':
    app.run(debug=True)