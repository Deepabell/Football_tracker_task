import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://football_user:password123@localhost/football_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'a3b19e8f3e2d5f6c8a9b0d1e4f5a6c7b8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3'


