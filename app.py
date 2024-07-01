import os
from flask import Flask, render_template
from livereload import Server

def create_app():
    app = Flask(__name__)
    app.config['DEBUG'] = True  # Enable debug mode

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/resume')
    def resume():
        return render_template('resume.html')

    @app.route('/hobbies')
    def hobbies():
        images_places = [f for f in os.listdir(os.path.join(app.static_folder, 'images/photos/places')) if os.path.isfile(os.path.join(app.static_folder, 'images/photos/places', f))]
        images_people = [f for f in os.listdir(os.path.join(app.static_folder, 'images/photos/people')) if os.path.isfile(os.path.join(app.static_folder, 'images/photos/people', f))]
        print('Images Places:', images_places)  # Debug print
        print('Images People:', images_people)  # Debug print
        return render_template('hobbies.html', images_places=images_places, images_people=images_people)

    return app

if __name__ == '__main__':
    app = create_app()

    # Set environment variables
    os.environ['FLASK_ENV'] = 'development'

    # Set up livereload server
    server = Server(app.wsgi_app)
    server.watch('**/*.html')
    server.watch('**/*.css')
    server.watch('**/*.js')
    server.serve(port=5000, host='127.0.0.1', debug=True)
