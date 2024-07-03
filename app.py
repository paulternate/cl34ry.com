import os
import sys
from flask import Flask, render_template
from livereload import Server
from flask_frozen import Freezer
from werkzeug.serving import run_simple
import shutil

def create_app():
    app = Flask(__name__)
    app.config['DEBUG'] = True  # Enable debug mode
    app.config['FREEZER_DESTINATION'] = 'docs'  # Set the destination directory for Flask Freezer
    app.config['FREEZER_BASE_URL'] = 'https://cl34ry.com/'  # Set the base URL for Flask Freezer

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/resume.html')
    def resume():
        return render_template('resume.html')

    return app

app = create_app()

# Initialize the Freezer
freezer = Freezer(app)

# Register URL generators
@freezer.register_generator
def url_generators():
    urls = ['/', '/resume.html']
    for url in urls:
        print(f"Yielding URL: {url}")  # Debug print
        yield url

def copy_files():
    # Ensure the CNAME & .nojekyll are present in the docs directory
    files_to_copy = ['CNAME', '.nojekyll']
    dest_dir = 'docs'

    for file_name in files_to_copy:
        source_file = file_name
        dest_file = os.path.join(dest_dir, file_name)
        if os.path.exists(source_file):
            shutil.copy(source_file, dest_file)
            print(f"Copied {source_file} to {dest_file}")
        else:
            print(f"{source_file} does not exist.")

if __name__ == '__main__':
    # Set environment variables
    os.environ['FLASK_ENV'] = 'development'

    if len(sys.argv) > 1:
        command = sys.argv[1]

        if command == 'run':
            run_simple('localhost', 5000, app, use_reloader=True, extra_files=[''])
        
        elif command == 'freeze':
            try:
                # Freeze the application
                print("Starting freeze process...")
                for url in freezer.freeze_yield():
                    print(f"Freezing URL: {url.url}")
                freezer.freeze()
                copy_files()  # Copy the CNAME & .nojekyll files after freezing
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