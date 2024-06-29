from flask import Flask, render_template

def create_app():
    app = Flask(__name__)

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
    app.run(debug=True)