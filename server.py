# -- coding: utf-8 --
from flask import Flask, request
from strona.login import create_page
app = Flask(__name__)

@app.route('/')
def login_form():
    return open('strona/login.html').read()

@app.route('/login.py', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    if username == 'admin' and password == 'admin123':
        return create_page(username)
    else:
        return '<h1>Błędna nazwa użytkownika lub hasło</h1>'

if __name__ == '__main__':
    app.run()
