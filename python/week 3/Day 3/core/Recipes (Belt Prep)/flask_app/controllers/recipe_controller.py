from flask_app import app
from flask_app.models.recipe_model import Recipe
from flask import render_template,session,redirect,flash,request
from flask_app.models.user_model import User

@app.route('/recipes')
def dashboard():
    if "user_id"not in session:
        return redirect('/')
    recipes=Recipe.get_all()
    return render_template("recipes.html",recipes=recipes)

@app.route("/recipes/new")
def recipes_new():
    if "user_id"not in session:
        return redirect('/')
    return render_template("new_recipe.html")

@app.route('/recipe/create',methods = ["POST"])
def add_recipe():
    if Recipe.validate(request.form):
        data = {
            **request.form,
            "user_id":session["user_id"]
        }
        Recipe.create(data)
        return redirect("/recipes")
    return redirect("/recipes/new")


@app.route('/recipe/<int:id>/delete',methods=["POST"])
def delete_recipe(id):
    Recipe.delete({"id":id})
    return redirect('/recipes')

@app.route('/recipes/<int:id>')
def view(id):
    recipe=Recipe.get_by_id({"id":id})
    return render_template("view.html",recipe=recipe)

@app.route('/recipes/<int:id>/edit')
def edit(id):
    recipe = Recipe.get_by_id({'id':id})
    return render_template("edit.html",recipe = recipe)

@app.route('/recipes/<int:id>/update', methods={"POST"})
def update(id):
    if Recipe.validate(request.form):
        data = {
            **request.form,
            "id": id
        }
        Recipe.update(data)
        return redirect('/recipes')
    return redirect(f'/recipes/{id}/edit')

