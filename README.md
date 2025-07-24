React Weather App

A simple and responsive web application built with React that allows users to search for current weather conditions in any city and toggle between light and dark themes.

Features
City Search: Get current weather data by entering a city name.

Real-time Weather Data: Displays current temperature and wind speed.

Theme Toggle: Switch between light and dark modes with an interactive and visually appealing toggle switch. Your theme preference is saved in local storage for a consistent experience across sessions.

Loading & Error Handling: Provides visual feedback during data fetching and informs the user of any errors (e.g., city not found, API issues).

Technologies Used
React: For building the user interface, utilizing useState, useReducer, and useEffect hooks for state management and side effects.

Open-Meteo Geocoding API: Used to convert city names into geographical coordinates (latitude and longitude).

Open-Meteo Weather API: Used to fetch current weather data based on coordinates.

JavaScript (ES6+): For application logic.

HTML/CSS: For structuring and styling the application.

Styling and Design
The application features a modern and clean design with a focus on user experience. It includes:

Theming: Supports both light and dark modes, with smooth transitions for a pleasant visual experience across all elements, including the main app container, input fields, and weather results.

Responsive Layout: Adapts seamlessly to different screen sizes for optimal viewing on various devices (mobile, tablet, desktop).

Intuitive UI: Clear input fields, a prominent search button, and easy-to-read weather results ensure a user-friendly interface.

Visual Feedback: Loading indicators and error messages are styled to be clearly visible and informative.

Interactive Theme Toggle: The theme switch itself is a custom-designed component with:

Customizable Styling: Uses CSS variables (--width-of-switch, --height-of-switch, --size-of-icon, --slider-offset) for easy adjustment of its dimensions and icon appearance.

Smooth Transitions: CSS transitions provide a fluid animation when toggling between themes.

Themed Icons: The slider dynamically changes its appearance to represent a sun (light mode) or a crescent moon (dark mode) using gradients and inset box-shadows.

Installation
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js (LTS version recommended)

npm or yarn

Setup
Clone the repository:

git clone <your-repository-url>
cd react-weather-app

(Replace <your-repository-url> with the actual URL if this project is hosted on GitHub, GitLab, etc.)

Install dependencies:

npm install
# OR
yarn install

Ensure Themetoggle.jsx and its associated CSS are correctly set up:
The App.jsx expects Themetoggle.jsx to be available. Ensure this file is in the correct path and its styling (as provided in the Themetoggle CSS) is included in your project's stylesheet (e.g., App.css or a dedicated Themetoggle.css file).

Usage
Start the development server:

npm start
# OR
yarn start

This will typically open the application in your browser at http://localhost:3000.

Enter a City Name: Type the name of a city into the input field.

Get Weather: Click the "Get Weather" button or press Enter on your keyboard.

Toggle Theme: Use the theme toggle switch located in the navigation bar to switch between light and dark modes. Your preference will be remembered for future visits.

Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

License
Distributed under the MIT License. See LICENSE for more information.

Credits
The core CSS for the theme toggle switch design is sourced from Uiverse.io by satyamchaudharydev.
