import os
import sys
from flask import Flask
from .controllers import init_app
from .models import db

DATABASE_URL = os.getenv('MYSQL_URL')

app = Flask("MERService")
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URL
init_app(app)
while (True):
    try:
        db.init_app(app)
        break
    except Exception as error:
        # handle the exception
        print("An exception occurred:", type(error).__name__) 
        print(DATABASE_URL)

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
