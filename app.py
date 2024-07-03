import os
import sys
from flask import Flask, render_template
from livereload import Server
from flask_frozen import Freezer

def create_app():
    app = Flask(__name__)
    app.config['DEBUG'] = True  # Enable debug mode
    app.config['FREEZER_DESTINATION'] = 'docs'  # Set the destination directory for Flask Freezer

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/resume.html')
    def resume():
        return render_template('resume.html')

    @app.route('/hobbies.html')
    def hobbies():
        images_places = [f for f in os.listdir(os.path.join(app.static_folder, 'images/photos/places')) if os.path.isfile(os.path.join(app.static_folder, 'images/photos/places', f))]
        images_people = [f for f in os.listdir(os.path.join(app.static_folder, 'images/photos/people')) if os.path.isfile(os.path.join(app.static_folder, 'images/photos/people', f))]
        print('Images Places:', images_places)  # Debug print
        print('Images People:', images_people)  # Debug print
        return render_template('hobbies.html', images_places=images_places, images_people=images_people)

    return app

app = create_app()

# Initialize the Freezer
freezer = Freezer(app)

# Register URL generators
@freezer.register_generator
def url_generators():
    urls = ['/', '/resume.html', '/hobbies.html']
    for url in urls:
        print(f"Yielding URL: {url}")  # Debug print
        yield url


if __name__ == '__main__':
    # Set environment variables
    os.environ['FLASK_ENV'] = 'development'

    if len(sys.argv) > 1:
        command = sys.argv[1]

        if command == 'run':
            # Set up livereload server for development
            server = Server(app.wsgi_app)
            server.watch('templates/*.html')
            server.watch('static/css/*.css')
            server.watch('static/js/*.js')
            server.serve(port=5000, host='127.0.0.1', debug=True)
        
        elif command == 'freeze':
            try:
                # Freeze the application
                print("Starting freeze process...")
                for url in freezer.freeze_yield():
                    print(f"Freezing URL: {url.url}")
                freezer.freeze()
            except AssertionError as e:
                print(f"AssertionError: {e}")
                print("Check your URL paths and ensure they start with '/'.")
                raise
        
        else:
            print(f"Unknown command: {command}")
            print("Usage: app.py [run|freeze]")
    else:
        print("No command provided.")
        print("Usage: app.py [run|freeze]")
