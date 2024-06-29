import os
from flask import Flask, render_template
from livereload import Server

def create_app():
    app = Flask(__name__)

    # Disable template caching
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.config['DEBUG'] = True

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/resume')
    def resume():
        return render_template('resume.html')

    @app.route('/hobbies')
    def hobbies():
        return render_template('hobbies.html')

    return app

if __name__ == '__main__':
    app = create_app()

    # Set environment variables
    os.environ['FLASK_ENV'] = 'development'

    # Set up livereload server
    server = Server(app.wsgi_app)
    server.watch('templates/*.html')
    server.watch('static/css/*.css')
    server.watch('static/js/*.js')
    server.serve(port=5000, host='127.0.0.1', debug=True)
