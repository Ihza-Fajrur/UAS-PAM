from flask import Flask,jsonify,redirect
from flask_mysqldb import MySQL
import MySQLdb.cursors

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'reviewin'
mysql = MySQL(app)

@app.route('/products_list')
def products_list():
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    # with mysql.connection.cursor() as cursor:
    cursor.execute("SELECT * FROM products")
    products = cursor.fetchall()
    # print(products)
    return jsonify(products)

if __name__ == '__main__':
    app.run(host='192.168.1.2', port=19002, debug=True)