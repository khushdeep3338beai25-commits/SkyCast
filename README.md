# 🌤️ SkyCast — Weather Forecast Application

SkyCast is a modern, responsive weather application built with **Node.js, Express.js, EJS, HTML, CSS, and JavaScript**. It allows users to search for a city and view essential weather information through a clean and user-friendly interface powered by the OpenWeather API.

## ✨ Features

- 🌍 **City-Based Search** — Get weather information for your chosen city.
- 🌡️ **Temperature** — View the current temperature.
- 💧 **Humidity** — Check the atmospheric humidity level.
- 🌬️ **Wind Speed** — View current wind conditions.
- 📈 **Atmospheric Pressure** — Monitor air pressure.
- 🌅 **Sunrise Time** — Check the local sunrise time.
- ☁️ **Weather Description** — Get a brief description of current conditions.
- 📱 **Responsive Design** — Enjoy a smooth experience across desktop and mobile devices.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend server and routing |
| EJS | Dynamic server-side page rendering |
| HTML5 | Web page structure |
| CSS3 | Styling and responsive layouts |
| JavaScript | Application logic and interactivity |
| OpenWeather API | Weather data retrieval |

## 🚀 Getting Started

Follow these steps to run SkyCast locally.

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- npm (included with Node.js)
- An [OpenWeather API key](https://openweathermap.org/api)

### Installation

**1. Clone the repository**

```bash
git clone <your-repository-url>
```

**2. Navigate to the project directory**

```bash
cd SkyCast
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env` file in the root directory and add your API key:

```env
OPENWEATHER_API_KEY=your_api_key_here
PORT=3001
```

Make sure your application loads the environment variables and uses the same API key variable name.

**5. Start the application**

```bash
npm start
```

**6. Open SkyCast in your browser**

Visit:

```text
http://localhost:3001
```

## 🔐 API Configuration

SkyCast uses the OpenWeather API to retrieve weather information. You need a valid API key to fetch live weather data.

**Security tip:** Keep your API key private. Store it in environment variables and never commit your `.env` file to GitHub.

Add the following to your `.gitignore` file:

```gitignore
node_modules/
.env
```

## 📂 Project Structure

A typical project structure may look like this:

```text
SkyCast/
├── views/              # EJS templates
├── public/
│   ├── css/            # Stylesheets
│   ├── js/             # Client-side JavaScript
│   └── images/         # Application images
├── .env                # Environment variables
├── .gitignore
├── package.json
└── server.js           # Express server entry point
```

*Adjust the structure above to match your actual project files.*

## 🎯 Project Goals

- Provide a simple way to check weather conditions by city.
- Present important weather metrics in an easy-to-understand format.
- Practice backend development and dynamic rendering with Express.js and EJS.
- Integrate a third-party weather API into a responsive web application.

## 🔮 Future Enhancements

- 📅 Multi-day weather forecasts
- 📍 Current-location weather detection
- ⭐ Favorite cities
- 🌙 Light and dark themes
- 🌧️ Weather icons and dynamic backgrounds
- ⚠️ Improved error handling for invalid cities and API failures

## 👩‍💻 Author

**Khushdeep Kaur**

---

⭐ If you find SkyCast interesting, consider starring the repository!

*Built with ☁️ and a passion for web development.*
