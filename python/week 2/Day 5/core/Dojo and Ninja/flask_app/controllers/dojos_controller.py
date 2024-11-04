from flask import session,request,render_template,redirect
from flask_app.models.dojos_model import Dojo
from flask_app import app

@app.route("/")
def dojos():
    return redirect("/dojos")
@app.route("/dojos")
def get_dojos():
    list_of_dojos=Dojo.get_all()
    return render_template("dojos.html",list_of_dojos=list_of_dojos)

@app.route("/add/dojo",methods=["POST"])
def create_dojo():
    new_dojo={
        "name":request.form["name"]
    }
    result=Dojo.add_one(new_dojo)
    return redirect("/dojos")

@app.route("/ninja/form")
def ninja_form():
    list_of_dojos=Dojo.get_all()
    return render_template("ninja_form.html",list_of_dojos=list_of_dojos)

@app.route("/dojos/<int:id>")
def get_dojo(id):
    result=Dojo.get_one({"id":id})
    print(result)
    return render_template("show.html",dojo=result)
