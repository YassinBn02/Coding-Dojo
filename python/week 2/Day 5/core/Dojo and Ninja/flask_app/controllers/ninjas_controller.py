from flask import session,request,render_template,redirect
from flask_app.models.ninjas_model import Ninja
from flask_app import app
@app.route("/ninja/new",methods=["POST"])
def create_ninja():
    new_ninja={
        "first_name":request.form["first_name"],
        "last_name":request.form["last_name"],
        "age":request.form["age"],
        "dojo_id":request.form["dojo"]
    }
    id=new_ninja["dojo_id"]
    result=Ninja.add_one(new_ninja)
    return redirect("/dojos/"+str(id))