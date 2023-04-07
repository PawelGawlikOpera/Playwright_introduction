#!/usr/bin/env python
# -- coding: utf-8 --
import cgi

# Tworzenie strony z linkiem do zdjęcia
def create_page(username):
	page = """<!DOCTYPE html>
	<html>
	<head>
		<title id="hello">Witaj, """ + username + """</title>
		<meta charset="utf-8">
	</head>
	<body>
		<h1>Witaj, """ + username + """!</h1>

	</body>
	</html>"""
	return page

# Sprawdzanie poprawności danych logowania
def check_login(username, password):
	if username == "admin" and password == "admin123":
		return True
	else:
		return False

# Obsługa żądania POST z danymi logowania
form = cgi.FieldStorage()
username = form.getvalue("username")
password = form.getvalue("password")

if check_login(username, password):
	# Wyświetlenie strony z linkiem do zdjęcia
	page = create_page(username)
	print("Content-type:text/html\r\n\r\n")
	print(page)
else:
    # Wyświetlenie komunikatu o błędnych danych logowania
    print("Content-type:text/html\r\n\r\n")
    print("<h1>Bledna nazwa uzytkownika lub haslo</h1>")
