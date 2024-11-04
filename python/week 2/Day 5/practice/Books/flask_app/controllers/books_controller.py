from flask import session,request,render_template,redirect
from flask_app.models.books_model import Book
from flask_app import app

@app.route("/books")
def get_books():
    list_of_books=Book.get_all()
    print(list_of_books)
    return render_template("books.html",list_of_books=list_of_books)

@app.route("/add/book",methods=["POST"])
def create_book():
    new_book={
        "title":request.form["title"],
        "num_of_pages":request.form["num_of_pages"]
    }
    result=Book.create_one(new_book)
    return redirect("/books")