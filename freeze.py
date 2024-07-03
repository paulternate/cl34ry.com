from flask import Flask, render_template
from flask_frozen import Freezer

app = Flask(__name__)

# Example route
@app.route('/')
def index():
    return render_template('index.html')

# Set the destination directory for Flask Freezer
app.config['FREEZER_DESTINATION'] = 'docs'

freezer = Freezer(app)

if __name__ == '__main__':
    freezer.freeze()
