# Weather App

A modern React weather dashboard that shows current weather, highlights, and a map for any city worldwide.

## Features

- 🌤️ **Current Weather:** Temperature, weather condition, min/max/feels-like temps with icons.
- 📅 **Today's Highlights:** Wind, humidity, sunrise/sunset, visibility, air quality.
- 🗺️ **Map:** Interactive map centered on the searched city (OpenStreetMap, no API key needed).
- 🔍 **City Search:** Search weather by city name.
- ⚡ **Responsive Design:** Looks great on desktop and mobile.
- 🔒 **API Key Safe:** Uses `.env` for your OpenWeatherMap API key (never pushed to GitHub).

## Getting Started

### 1. Clone the repo

```sh
git clone https://github.com/your-username/your-repo.git
cd weather-app
```

### 2. Install dependencies

```sh
npm install
```

### 3. Add your API key

Create a `.env` file in the root:

```
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

### 4. Start the app

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [OpenStreetMap](https://www.openstreetmap.org/)

## Screenshots

![Weather App Screenshot](screenshot.png)

## License

MIT

---

**Made with ❤️ using React and OpenWeatherMap**