# CO2 Emission Prediction

This project aims to predict CO2 emissions based on various vehicle attributes. The prediction model is built using a Linear Regression algorithm, and a simple web interface is created using Flask to take user inputs and display the predicted CO2 emissions.

## Table of Contents

- [Project Description](#project-description)
- [Dataset](#dataset)
- [Model Training](#model-training)
- [Web Interface](#web-interface)

## Project Description

With increasing concerns about climate change and air pollution, understanding the factors that contribute to CO2 emissions from vehicles is crucial. This project focuses on developing a predictive model for CO2 emissions based on various vehicle characteristics such as engine size, number of cylinders, and fuel consumption. By leveraging machine learning techniques, this project aims to provide accurate predictions that can help in making informed decisions related to vehicle design, policy-making, and environmental impact assessments.
The project includes:
- A machine learning model to predict CO2 emissions.
- A web interface to interact with the model and get predictions.
- User inputs like engine size, number of cylinders, fuel consumption in city and highway, and combined fuel consumption in MPG.
  

The project involves the following steps:
1. **Data Collection**: Gathering data on vehicle attributes and their corresponding CO2 emissions.
2. **Data Preprocessing**: Cleaning and preparing the data for model training.
3. **Model Training**: Building and training a Linear Regression model to predict CO2 emissions.
4. **Web Interface Development**: Creating a user-friendly web interface using Flask to input vehicle details and display the predicted CO2 emissions.
5. **Evaluation**: Assessing the model's performance using various metrics and improving it as needed.

## Dataset

The dataset used for training the model includes the following columns:
- `ENGINESIZE`: Engine size of the vehicle.
- `CYLINDERS`: Number of cylinders in the vehicle.
- `FUELCONSUMPTION_CITY`: Fuel consumption in the city.
- `FUELCONSUMPTION_HWY`: Fuel consumption on the highway.
- `FUELCONSUMPTION_COMB_MPG`: Combined fuel consumption in miles per gallon.
- `CO2EMISSIONS`: CO2 emissions of the vehicle (target variable).

## Model Training

The model is built using Linear Regression from scikit-learn. The data is split into training and testing sets, and the model is trained on the training data. Performance metrics like Mean Absolute Error, Mean Absolute Percentage Error, Mean Squared Error, and R-squared are used to evaluate the model.

## Web Interface

The web interface is built using Flask and provides a simple form for the user to input vehicle attributes. The predicted CO2 emissions are displayed after the user submits the form.
