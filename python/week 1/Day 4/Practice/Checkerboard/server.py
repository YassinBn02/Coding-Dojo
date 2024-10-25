from flask import Flask, render_template 
app = Flask(__name__) 



@app.route('/')
def display():
    return render_template('index.html')


@app.route('/<int:x>')
def display_by_x(x):
    return render_template('index2.html', x=x)



@app.route('/<int:x>/<int:y>')
def display_by_x_y(x,y):
    return render_template('index3.html',x=x,y=y)


if __name__=="__main__":
    app.run(debug=True)