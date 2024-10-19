# weather-report
WeatherApp
A React Native weather forecast application built using Expo and the OpenWeatherMap API. This app allows users to search for a city's 5-day weather forecast and view detailed information like temperature, humidity, and pressure.

Table of Contents
Features
Requirements
Installation
Usage
API
Folder Structure
Contributing
License
Features
Search weather forecast for any city.
Display 5-day weather data with detailed information like:
Min/Max Temperature
Humidity
Pressure
Responsive design for mobile screens.
Data fetched from OpenWeatherMap API.
Requirements
Before you begin, make sure you have the following installed:

Node.js (v12 or higher)
Expo CLI
A free OpenWeatherMap API key
Installation
1. Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/WeatherApp.git
cd WeatherApp
2. Install Dependencies
Run the following command to install the required packages:

bash
Copy code
npm install
3. Obtain an API Key
Go to OpenWeatherMap and sign up for a free API key.

4. Configure the API Key
In the project, navigate to src/weatherService.js. Replace the placeholder '1635890035cbba097fd5c26c8ea672a1' with your actual API key:

javascript
Copy code
const API_KEY = '1635890035cbba097fd5c26c8ea672a1';  // Replace with your OpenWeatherMap API key
5. Start the Expo Development Server
Start the Expo app by running:

bash
Copy code
expo start
You can run the app in several ways:

Mobile Device: Scan the QR code generated in the terminal or web browser using the Expo Go app (available on iOS and Android).
Android Emulator: Open the app on an Android emulator through Expo's web interface.
iOS Simulator: If you are on macOS, you can run the app in the iOS simulator.
Usage
Enter the name of the city you want to search for in the input field.
Click the "Search" button.
The app will display a 5-day weather forecast with detailed weather information for each day, including:
Date
Min/Max Temperature
Pressure
Humidity
API
This app uses the OpenWeatherMap API to fetch weather data.

API Endpoint:

https://api.openweathermap.org/data/2.5/forecast

Request Example:
bash
Copy code
https://api.openweathermap.org/data/2.5/forecast?q=London&appid=YOUR_API_KEY&units=metric
Response Example:
json
Copy code
{
  "list": [
    {
      "dt": 1632970800,
      "main": {
        "temp": 14.53,
        "temp_min": 14.53,
        "temp_max": 15.31,
        "pressure": 1017,
        "humidity": 77
      },
      "weather": [
        {
          "description": "clear sky"
        }
      ],
      "dt_txt": "2021-09-30 12:00:00"
    }
    // More forecast data...
  ]
}
Folder Structure
bash
Copy code
WeatherApp/
├── App.js                # Entry point for the app
├── package.json          # Project dependencies and scripts
├── src/
│   ├── screens/
│   │   └── WeatherScreen.js   # Main screen that displays weather data
│   └── weatherService.js      # Module to fetch data from OpenWeatherMap API
└── assets/              # Images, fonts, etc.
Contributing
Contributions are welcome! Please follow these steps:

Fork this repository.
Create a new branch (git checkout -b feature-branch-name).
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin feature-branch-name).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for more details.
