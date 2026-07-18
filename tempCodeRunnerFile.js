const weather = {
            city: d.name,
            country: d.sys.country,

        // 🌡 Temperature
            temp: Math.round(d.main.temp),
            feelsLike: Math.round(d.main.feels_like),
            tempMin: Math.round(d.main.temp_min),
            tempMax: Math.round(d.main.temp_max),

        // 💧 Atmosphere
            humidity: d.main.humidity,
            pressure: d.main.pressure,
            visibility: (d.visibility / 1000).toFixed(1), // km

        // 🌬 Wind
            windSpeed: d.wind.speed,
            windDirection: d.wind.deg,
            windGust: d.wind.gust || "N/A",

        // ☁ Clouds
            cloudiness: d.clouds.all,

        // 🌤 Weather
            main: d.weather[0].main,
            description: d.weather[0].description,
            icon: d.weather[0].icon,

        // 🌅 Sun
            sunrise: formatTime(d.sys.sunrise),
            sunset: formatTime(d.sys.sunset),

        // 📍 Coordinates
            latitude: d.coord.lat,
            longitude: d.coord.lon,

        // 🌎 Timezone
           timezone: d.timezone
            
        };