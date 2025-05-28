Here's a complete `README.md` file for your **React Weather App**, including setup and usage instructions:

---

````markdown
# 🌦️ Weather App

A simple React-based weather application to check the current weather by city name.  
It uses the OpenWeatherMap API to display temperature, humidity, and weather conditions.

## 🚀 Features

- Search weather by city name
- Displays temperature, weather description, and humidity
- Dynamic weather icons
- Error handling with toast notifications

## 📦 Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/s-nityasree/weather-app.git
   cd weather-app
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   > If you’re using Create React App, replace with:
   >
   > ```bash
   > npm start
   > ```

## 🔑 API Key Setup

* This project uses the [OpenWeatherMap API](https://openweathermap.org/api).
* Replace the API key in your `handleSearch` function with your own key:

```javascript
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`;
```

## 🛠 Tech Stack

* React
* Axios
* React Toastify
* CSS (custom styles)

## 📄 License

MIT License

---

Made with ❤️ by \[Your Name]

```

---

Let me know if you'd like:
- A section for screenshots or a demo link
- Deployment instructions (e.g., for Vercel or Netlify)
```
