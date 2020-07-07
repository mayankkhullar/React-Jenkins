import time
import requests
from flask import Flask

app = Flask(__name__)


@app.route('/time')
def get_current_time():
    #response = requests.get("http://localhost:8080/api/json")
    return ({"jobs1": "value"})
