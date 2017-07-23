# Getting started
Clone this repo.
`cd backend`

Install Node Modules
`npm install`

Setup .env variables
Create a .env file in the base level of backend directory and place the following content inside:
`
LOG_TO_FILE=true<br>
FILE_LOG_LEVEL=info<br>
FILE_LOG_PATH=./logs/main.log

CONSOLE_LOG_LEVEL=info

Port setting is required<br>
PORT=8282

Connection string is required<br>
URL=place entire read only mongodb connection string here.
`

Run the Hapi Server
`node server.js`

Open a new terminal tab and navigate to the frontend folder
`cd ..`
`cd frontend`

Install Node Modules
`npm install`

Run Webpack Server
`npm start`

Navigate to http://localhost:8080/ to run the application

Additional information

Swagger documentation can be found at http://localhost:8282/documentation

Hapi Status monitor can be found at http://localhost:8080/status

Hapi testing while not fully built out with unit tests can be run by:
with the server not running in the backend directory
`lab`

Project Wishlist<br>
A list of uncompleted items that I was aiming to have completed in the time frame
1. More functionality of details options
2. Detail component re-rendering
3. Units tests for both frontend and backend
4. Better styling of the application
5. More accurate search
6. List indexing
7. Refactoring of detail components into single component
