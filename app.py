import json
import random
from io import BytesIO
from flask import render_template, session
import flask
import flask_cors
from flask import jsonify, request
from collections import Counter
from pyecharts.charts import WordCloud
import matplotlib.pyplot as plt
import pymysql
import jieba
from pyecharts import options as opts

app = flask.Flask(__name__)
flask_cors.CORS(app)
app.secret_key = '123'  # 设置密钥用于加密 session 数据

# 连接数据库
conn = pymysql.connect(host='localhost', user='root', password='123456', db='yiqing')


@app.post('/change1')
def change1():
    data = request.get_json()
    begin_month = data['begin_month']
    end_month = data['end_month']
    emotions = {"neural", "happy", "angry", "sad", "fear", "surprise"}

    return_data = {}
    for month in range(begin_month, end_month):
        return_data[month] = {}
        for emotion in emotions:
            cur = conn.cursor()
            query = """
            SELECT COUNT(*) FROM daycomment
            WHERE label = %s AND month = %s
            """
            cur.execute(query, (emotion, month))
            count = cur.fetchone()[0]
            return_data[month][emotion] = count

    return return_data, 200


@app.route('/covid-confirmed', methods=['GET'])
def covid_confirmed():
    cur = conn.cursor()
    query = """
    SELECT country, date, confirmed
    FROM ncov
    WHERE province IS NULL AND date BETWEEN '2020-03-01' AND '2020-12-31'
    ORDER BY country, date
    """
    cur.execute(query)
    data = cur.fetchall()

    # 将查询结果转换为所需的JSON格式
    result = []
    for row in data:
        result.append({"date": row[1], "country": row[0], "confirmed": row[2]})

    return jsonify(result), 200

@app.post('/cbar1')
def cbar1():
    cur = conn.cursor()
    query = """
    SELECT country, MAX(dead)AS dead
    FROM ncov
    WHERE province IS NULL
    GROUP BY country
    ORDER BY dead DESC
    LIMIT 20
    """
    cur.execute(query)
    data1 = cur.fetchall()

    cur = conn.cursor()
    query = """
    SELECT country, MAX(confirmed)AS confirmed
    FROM ncov
    WHERE province IS NULL
    GROUP BY country
    ORDER BY confirmed DESC
    LIMIT 20
    """
    cur.execute(query)
    data2 = cur.fetchall()

    return_data = [{"country": row[0], "dead": row[1]} for row in data1]
    return_data += [{"country": row[0], "dead": row[1]} for row in data2]

    return jsonify(return_data), 200

@app.post('/cline1')
def cline1():
    cur = conn.cursor()
    query = """
    SELECT confirmed,cured,dead
    FROM ncov
    WHERE country='中国' AND province IS NULL
    """
    cur.execute(query)
    data = cur.fetchall()

    return_data = [{"confirmed": row[0], "cured": row[1], "dead": row[2]} for row in data]

    return jsonify(return_data), 200

@app.route('/')
def index1():
    return render_template('cline.html')

@app.route('/change')
def change():
    return render_template('change.html')

@app.route('/cbar')
def cbar():
    return render_template('cbar.html')

@app.route('/cline')
def cline():
    return render_template('cline.html')

@app.route('/cloud')
def cloud():
    return render_template('cloud.html')

@app.route('/model')
def model():
    return render_template('model.html')

@app.route('/activebar')
def activebar():
    return render_template('activebar.html')



def count_word_frequency(text):
    words = text.split()
    return Counter(words)


@app.route('/performance-data', methods=['GET', 'POST'])
def performance_data():
    print(111)
    model_name = request.args.get('model_name')

    cursor = conn.cursor()
    query = "SELECT p,r,acc,f1,dataset_name FROM performance_data WHERE model_name = %s"
    cursor.execute(query, (model_name,))
    rows = cursor.fetchall()
    result = []
    for row in rows:
        result.append({
            'p': row[0],
            'r': row[1],
            'acc': row[2],
            'f1': row[3],
            'dataset_name': row[4]
        })
    print(result)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
