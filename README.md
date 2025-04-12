
# CryptoHunter – Real-Time Cryptocurrency Tracker
The Crypto Hunter is an innovative web application that empowers users to stay ahead in the fast-paced world of cryptocurrency. By leveraging real-time data from the CoinGecko API, it provides seamless tracking of prices and trends, helping investors make informed decisions with confidence.

## 🔗 Links
- **Presentation:** 
https://drive.google.com/file/d/1kril-8oMa9Xwzr_HTq0QLm9IxsvqIIrK/view?usp=sharing
---

##  Project Structure
```
crypto-hunter/
├── public/
│   ├── image.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── Components/
│   │   ├── Banner/
│   │   │   └── Banner.js
│   │   └── Header.js
│   ├── Pages/
│   │   ├── Coinpage.js
│   │   └── Homepage.js
│   ├── App.css
│   ├── App.js
│   ├── CryptoContext.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

---

## ⚙️ Requirements
- **Frontend:** React.js
- **Charting:** Chart.js
- **Routing:** React Router DOM
- **UI:** Material-UI
- **API:** CoinGecko
- **HTTP Client:** Axios
- **Deployment:** Netlify

---

## Setup Instructions
1. Clone the repository:
```bash
git clone https://github.com/ayeshakhurana/crypto-hunter.git
cd crypto-hunter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

---

##  Dependencies
- **axios:** For making API requests.
- **react-router-dom:** For routing between pages.
- **chart.js** & **react-chartjs-2:** For rendering interactive price charts.
- **@mui/material:** For responsive UI components.

---

##  API
- **CoinGecko API**: Real-time cryptocurrency data including prices, market cap, and historical data.
> Note: Downtime or rate limits from CoinGecko API may temporarily disrupt updates.

---

##  Hosting & Connectivity
- **Hosting Platform:** Netlify (limitations may affect uptime or build frequency)
- **Internet:** Required for fetching real-time data

---

##  Browser Compatibility
Responsive across devices, but performance may vary on older browsers.


---

##  Tech Stack
- **Frontend Framework:** React.js
- **Charting Library:** Chart.js via react-chartjs-2
- **HTTP Client:** Axios
- **Routing:** React Router DOM
- **UI Components:** Material-UI
- **API:** CoinGecko API
- **Deployment:** Netlify
- **Version Control:** Git & GitHub

---

## 📄 License
This project is licensed under the MIT License.
