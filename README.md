# CL34RY.com

Code for [CL34RY.com](https://cl34ry.com).

## Interacting with Local Files

1. Clone the repository and navigate to the root directory.
2. Create a Python virtual environment by running `python -m venv venv`.
3. Activate the virtual environment by running `source venv/bin/activate` on Unix or `venv\Scripts\activate` on Windows.
4. Install the required packages by running `pip install -r requirements.txt`.

### Run Flask Server locally

A Flask server can be run locally in a Python virtual environment for development purposes. To do so, follow these steps:

1. Run `python app.py run` to start the Flask server.

## Build site for GitHub Pages

The site can be built for GitHub Pages by running the following commands:

1. Run `python app.py freeze` to build the site to the `docs` directory.
2. Push the changes to your target branch and set GitHub pages to deploy from there. 
