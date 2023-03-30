# HydroHomie

# Instructions for App

* Type `mysql -u root -e "CREATE DATABASE plantapi"` into gitBash
* Boot PlantCalendarApplication for http://localhost:8080/
* Type `npm start` into Terminal to boot http://localhost:3000/

# Endpoints

* GET ALL PLANTS - /api/plants
* GET SPECIFIED PLANT - /api/plants/{plant_id}
* GET ALL USERS - curl -X GET http://localhost:8080/api/users -H 'Content-Type: application/json'
* POST NEW USERS - curl -X POST http://localhost:8080/api/users -H 'Content-Type: application/json' -d '{"username": "Test"}'
* PUT PLANT IN USER COLLECTION - curl -X PUT http://localhost:8080/api/users/Test/plantCollection/1 -H 'Content-Type: application/json'
