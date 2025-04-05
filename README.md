# Real-Time Weather App

A simple web application that allows users to get real-time weather information for a specified city. Built using React for the frontend and Node.js/Express for the backend, fetching data from the OpenWeatherMap API.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Key](#api-key)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This project is a full-stack web application that provides users with current weather details. Users can input the name of a city, and the application will display the temperature and a brief description of the weather conditions.

## Features

- **Real-time Weather:** Fetches and displays the latest weather data for a given city.
- **Simple Interface:** Clean and easy-to-use user interface built with React.
- **Backend API:** Utilizes a Node.js/Express backend to handle API requests and communicate with the OpenWeatherMap API.
- **Metric Units:** Displays temperature in Celsius (configurable in the backend if desired).

## Technologies Used

- **Frontend:**
  - [React](https://react.dev/)
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [Create React App](https://create-react-app.dev/) (for initial setup)
- **Backend:**
  - [Node.js](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [axios](https://axios-http.com/docs/intro) (for making HTTP requests)
  - [cors](https://expressjs.com/en/resources/middleware/cors.html) (for handling Cross-Origin Resource Sharing)
  - [body-parser](https://expressjs.com/en/resources/middleware/body-parser.html) (for parsing request bodies)
  - [nodemon](https://nodemon.io/) (for development server with live reloading)
- **API:**
  - [OpenWeatherMap API](https://openweathermap.org/api)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version >= 18 recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A free [OpenWeatherMap API key](https://openweathermap.org/api) (see [API Key](#api-key) section below)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git)
    cd YOUR_REPOSITORY_NAME
    ```
    (Replace `YOUR_GITHUB_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub details)

2.  **Install backend dependencies:**
    ```bash
    cd server
    npm install
    cd ..
    ```

3.  **Install frontend dependencies:**
    ```bash
    cd client
    npm install
    cd ..
    ```

### Running the Application

1.  **Set up the OpenWeatherMap API key:**
    - Navigate to the `server/src/services/` directory.
    - Open the `weatherService.js` file.
    - Replace `'YOUR_ACTUAL_OPENWEATHERMAP_API_KEY_HERE'` with your actual API key obtained from OpenWeatherMap.

2.  **Start the backend server:**
    ```bash
    cd server
    npm run dev
    ```
    (This will start the server on `http://localhost:5001`)

3.  **Start the frontend development server:**
    ```bash
    cd client
    npm start
    ```
    (This will usually start the client on `http://localhost:3000` in your browser)

4.  **Open your browser and navigate to `http://localhost:3000` to use the weather app.**

## API Key

This application relies on the OpenWeatherMap API to fetch weather data. You need to sign up for a free account on [https://openweathermap.org/api](https://openweathermap.org/api) to obtain an API key. Make sure to follow the instructions in the [Running the Application](#running-the-application) section to correctly add your API key to the backend code.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix (`git checkout -b feature/your-feature` or `git checkout -b fix/your-bug`).
3.  Make your changes and commit them (`git commit -am 'Add some feature'`).
4.  Push to the branch (`git push origin feature/your-feature`).
5.  Create a new Pull Request on GitHub.

## License

[Choose a license](https://choosealicense.com/) (e.g., MIT License, Apache License 2.0). You can add the license text or a link to the full license here. If you don't want to use a specific license, you can state "No license".
