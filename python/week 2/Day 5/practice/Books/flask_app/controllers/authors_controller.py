from flask import session,request,render_template,redirect
from flask_app.models.authors_model import Author
from flask_app import app

@app.route("/authors")
def get_authors():
    list_of_athors=Author.get_all()
    return render_template("authors.html",list_of_athors=list_of_athors)

@app.route("/add/author",methods=["POST"])
def create_author():
    new_author={
        "name":request.form["name"]
    }
    result=Author.create_one(new_author)
    return redirect("/authors")