# Plant Calendar by Hydro Homies

## Instructions for App

* Type `mysql -u root -e "CREATE DATABASE plantapi"` into gitBash
* Type `npm install file-saver` and `npm install -S ics` to download packages
* Boot PlantCalendarApplication for http://localhost:8080/
* CD into frontend and Type `npm start` into Terminal to boot http://localhost:3000/

## Functionality 
The Plant Calendar is a simple and easy way of creating a watering schedule for plants.
* Login by creating a user and saving each of your plants to that user
* Select the plants you'd like to add to your watering schedule
* click the download button to install your selected plants to your calendar
* works with all calendars that are compatible with an ics file.

## Endpoints

* GET ALL PLANTS - /api/plants
* GET SPECIFIED PLANT - /api/plants/{plant_id}
* GET ALL USERS - curl -X GET http://localhost:8080/api/users -H 'Content-Type: application/json'
* POST NEW USERS - curl -X POST http://localhost:8080/api/users -H 'Content-Type: application/json' -d '{"username": "Test"}'
* PUT PLANT IN USER COLLECTION - curl -X PUT http://localhost:8080/api/users/Test/plantCollection/1 -H 'Content-Type: application/json'

## Plant-Calendar-Data-flow
```mermaid
sequenceDiagram

participant MySQL
participant repository
participant SpringBoot
participant controller
participant react

note over MySQL: has plant table and user table in database
note over react: uses npm to manage packages and to run a frontend server

react ->> controller: request data
controller ->> SpringBoot: find data by entity
note over SpringBoot: react interacts with Java using APIs

SpringBoot ->> repository: pulls requested data
repository ->> MySQL: finds data to pull and store
note over SpringBoot: SpringBoot uses JPA to identify data within java to pass

MySQL ->> repository: load in data of plants
MySQL ->> repository: load in data of Users
repository ->> SpringBoot: loads data into Java
note over SpringBoot: using a CRUD repository, data can be transferred and manipulated
SpringBoot ->> controller: creates api for frontend to access
controller ->> react: pass data to frontend
note over react: loads into web app for interface and download
```
