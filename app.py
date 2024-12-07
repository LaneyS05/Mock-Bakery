from flask import Flask, render_template
import json

app = Flask(__name__, 
            template_folder='my_bakery/templates', 
            static_folder='my_bakery/static')


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/menu')
def menu():
    with open('bakery.json') as f: 
        items = json.load(f)
    return render_template('menu.html', menu_items=items)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
