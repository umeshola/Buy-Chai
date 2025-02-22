from flask import Flask
import os
import datetime
import subprocess

app = Flask(__name__)

@app.route('/htop')
def htop():
    name = "Umesh" 
    username = os.getenv("USER") or os.getenv("USERNAME") or "unknown"
    
    ist_time = datetime.datetime.utcnow() + datetime.timedelta(hours=5, minutes=30)
    formatted_time = ist_time.strftime("%Y-%m-%d %H:%M:%S IST")

    try:
        top_output = subprocess.check_output("top -b -n 1 | head -10", shell=True, text=True)
    except Exception as e:
        top_output = f"Error fetching top output: {e}"

    response = f"""
    <h1>System Details</h1>
    <p><b>Name:</b> {name}</p>
    <p><b>Username:</b> {username}</p>
    <p><b>Server Time (IST):</b> {formatted_time}</p>
    <h2>Top Output</h2>
    <pre>{top_output}</pre>
    """
    return response

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
