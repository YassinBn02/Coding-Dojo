from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class Book:
    def __init__(self,data):
        self.id=data["id"]
        self.title=data["title"]
        self.num_of_pages=data["num_of_pages"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]

    @classmethod
    def get_all(cls):
        query="SELECT * from books;"
        result=connectToMySQL(DATABASE).query_db(query)
        list_of_books=[]
        for data in result:
            list_of_books.append(cls(data))
        return list_of_books

    @classmethod
    def create_one(cls,data):
        query="INSERT INTO books (title,num_of_pages) VALUES (%(title)s,%(num_of_pages)s);"
        result=connectToMySQL(DATABASE).query_db(query,data)
        return result
