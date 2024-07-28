from flask import Flask, request, jsonify, render_template
import numpy as np
import pickle

app = Flask(__name__)

model = pickle.load(open('co2_emission_model.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/predict_co2_emissions', methods=['POST'])
def predict_co2_emissions():
    engine_size = float(request.form['engine_size'])
    cylinders = int(request.form['cylinders'])
    fuel_consumption_city = float(request.form['fuel_consumption_city'])
    fuel_consumption_hwy = float(request.form['fuel_consumption_hwy'])
    fuel_consumption_comb_mpg = float(request.form['fuel_consumption_comb_mpg'])
    
    input_features = np.array([[engine_size, cylinders, fuel_consumption_city, fuel_consumption_hwy, fuel_consumption_comb_mpg]])
    
    prediction = model.predict(input_features)[0]
    
    response = jsonify({
        'estimated_co2_emissions': prediction
    })
    
    return response

if __name__ == "__main__":
    app.run(debug=True)
