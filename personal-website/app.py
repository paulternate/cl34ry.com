import os
from flask import Flask, render_template

def create_app():
    app = Flask(__name__)

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
        # Get list of images for places and people galleries
        places_path = os.path.join(app.static_folder, 'images', 'photos', 'places')
        people_path = os.path.join(app.static_folder, 'images', 'photos', 'people')

        images_places = [f for f in os.listdir(places_path) if os.path.isfile(os.path.join(places_path, f))]
        images_people = [f for f in os.listdir(people_path) if os.path.isfile(os.path.join(people_path, f))]

        return render_template('hobbies.html', images_places=images_places, images_people=images_people)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
