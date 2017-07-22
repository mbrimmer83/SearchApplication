# Getting started
######Clone this repo.
`cd backend`

######Install Node Modules
`npm install`

###### Setup .env variables
Create a .env file in the base level of backend directory and place the following content inside:
`
LOG_TO_FILE=true
FILE_LOG_LEVEL=info
FILE_LOG_PATH=./logs/main.log

CONSOLE_LOG_LEVEL=info

######Port setting is required
PORT=8282

###### Connection string is required
URL=place entire read only mongodb connection string here.
`

######Run the Hapi Server
`node server.js`

######Open a new terminal tab and navigate to the frontend folder
`cd ..`
`cd frontend`

######Install Node Modules
`npm install`

######Run Webpack Server
`npm start`

######Navigate to http://localhost:8080/ to run the application
