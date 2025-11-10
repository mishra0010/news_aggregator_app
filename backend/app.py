from flask import Flask, jsonify
import requests
import os

app = Flask(__name__)

# Get API key from environment variable
NEWS_API_KEY = os.getenv("NEWS_API_KEY", "your_api_key_here")

@app.route("/news")
def get_news():
    url = f"https://newsapi.org/v2/top-headlines?country=us&apiKey={NEWS_API_KEY}"
    response = requests.get(url)
    data = response.json()
    articles = [
        {"title": article["title"], "url": article["url"]}
        for article in data.get("articles", [])
    ]
    return jsonify({"articles": articles})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

