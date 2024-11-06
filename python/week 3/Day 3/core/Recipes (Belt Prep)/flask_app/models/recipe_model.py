from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE , app
from flask import flash

class Recipe:
    def __init__(self,data):
        self.id=data["id"]
        self.name=data["name"]
        self.description=data["description"]
        self.instractions=data["instractions"]
        self.date=data["date"]
        self.under=data["under"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]
        self.user_id=data["user_id"]
        self.posted_by=""

    @classmethod
    def get_all(cls):
        query="select * from recipes join users on recipes.user_id=users.id;"
        result=connectToMySQL(DATABASE).query_db(query)
        all_recipes=[]
        for data in result:
            recipe=cls(data)
            recipe.posted_by=data["first_name"]
            all_recipes.append(recipe)
        return all_recipes
    
    @classmethod
    def create(cls,data):
        query="insert into recipes(name,description,instractions,date,under,user_id) values (%(name)s,%(description)s,%(instractions)s,%(date)s,%(under)s,%(user_id)s);"
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_by_id(cls,data):
        query = """
                SELECT * FROM recipes
                JOIN users ON recipes.user_id = users.id
                WHERE recipes.id = %(id)s;
                """
        result = connectToMySQL( DATABASE ).query_db(query,data)
        recipe = cls(result[0])
        recipe.posted_by = result[0]["first_name"]
        return recipe

    @classmethod
    def update(cls,data):
        query="update recipes set name=%(name)s ,description=%(description)s,instractions=%(instractions)s,date=%(date)s,under=%(under)s where id=%(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def delete(cls,data):
        query="delete from recipes where id=%(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @staticmethod
    def validate(data):
        is_valid = True
        if len(data['name'])<3:
            is_valid = False
            flash('name must not be blank',"name")
        if len(data['description'])<3:
            is_valid = False
            flash('description must not be blank',"description")
        if len(data['instractions'])<3:
            is_valid = False
            flash('instractions  must not be blank ',"instractions")
        if len(data['date'])=="":
            is_valid = False
            flash('Date must not be blank',"date")
        return is_valid