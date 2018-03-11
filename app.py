from flask import Flask, request, render_template
import pickle

features = ['gender', 'highest_education', 'imd_band', 'age_band', 'disability']
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/query', methods=['POST', 'GET'])
def query():
    if request.method == 'POST':
        query = request.form
        with open('map.pkl', 'rb') as f:
            dummy_map = pickle.load(f)

        X = [0] * len(dummy_map)
        for feature in features:
            try:
                X[dummy_map[feature + '_' + str(query[feature])]] = 1
            except:
                raise ValueError

        with open('model.pkl', 'rb') as f:
            clf = pickle.load(f)
        return render_template('result.html', prediction=clf.predict([X]))

if __name__ == '__main__':
    app.run()
