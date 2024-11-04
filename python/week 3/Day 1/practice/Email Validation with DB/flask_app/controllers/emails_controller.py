from flask import session,request,render_template,redirect
from flask_app.models.emails_model import Email
from flask_app import app

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/submit",methods=["POST"])
def add_email():
    if not Email.validate(request.form):
        return redirect("/")
    Email.create_one(request.form)
    return redirect("/success")

@app.route("/success")
def success():
    list_of_emails=Email.get_all()
    return render_template("success.html",list_of_emails=list_of_emails)