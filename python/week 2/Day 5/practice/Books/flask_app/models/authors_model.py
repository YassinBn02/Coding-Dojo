from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class Author:
    def __init__(self,data):
        self.id=data['id']
        self.full=data['name']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']

    @classmethod
    def get_all(cls):
        query="SELECT * FROM authors ;"
        result=connectToMySQL(DATABASE).query_db(query)
        list_of_athors=[]
        for data in result:
            list_of_athors.append(Author(data))
        return list_of_athors
    
    @classmethod
    def create_one(cls,data):
        query="INSERT INTO authors (name) VALUES (%(name)s)"
        result=connectToMySQL(DATABASE).query_db(query,data)
        return result