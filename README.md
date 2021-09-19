# Getting Started with the Movie App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### FIRST STEP
Create a .env file on root folder and add this credentials:

REACT_APP_OMDBAPI_BASE_URL=https://www.omdbapi.com  
REACT_APP_OMDBAPI_API_KEY={ADD-API-KEY-HERE}

## Note
REACT_APP_OMDBAPI_API_KEY value is Api key generated from 'http://www.omdbapi.com/apikey.aspx'

## Available Scripts

In the project directory, you can run:

### `yarn`
To install all dependencies

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### APIs Used
[The Open Movie Database APIs](http://www.omdbapi.com/)

Generate API key from : http://www.omdbapi.com/apikey.aspx

### API Info
* Method: `GET`
* Search URL: `https://www.omdbapi.com/?s={MOVIE_NAME}&apikey={API_KEY}`

### Icons & Font -
* Icons: (https://icons8.com/icons/set/movie-apps)
* Font Link: `<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">`

### Libraries used
* `styled-components`
* `axios`
* `axios`
* `typescript`