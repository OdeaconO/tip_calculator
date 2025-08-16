# Tip Calculator 💰

A sleek and responsive **Progressive Web App (PWA)** built with React to help you calculate tips based on service ratings from you and a friend.  
Just enter the bill amount, rate the service, and instantly see how much you need to pay — including the tip.

🔗 **Live Demo**: [tip-calct.netlify.app](https://tip-calct.netlify.app)

---

## ✨ Features

- **Bill Input** – Enter the total bill amount.
- **Service Rating** – Rate the service (0% to 20%) for both you and a friend.
- **Installable on Mobile & Desktop** –  
  Now includes a dedicated **Install App** button that appears when your browser supports installation.
- **Reset Button** – Quickly reset all values to start fresh.
- **Responsive Design** – Optimized for both mobile and desktop devices.

---

## 🛠️ Tech Stack

- **React** – Frontend framework for building UI components.
- **JavaScript (ES6)** – Core logic and interactivity.
- **CSS** – Styling and layout.
- **Web App Manifest** – Powers installability and native-like behavior.
- **Custom Install Prompt Handling** – Uses `beforeinstallprompt` and `appinstalled` events for better install UX.

---

## 📱 How to Use

1. Visit the [live site](https://tip-calct.netlify.app) on your browser.
2. Enter the bill amount.
3. Rate the service for both you and your friend.
4. View the total amount including the calculated tip.
5. Click the **Install App** button (if available) or use your browser's install option.

---

## 🚀 Future Improvements

- Add custom tip sliders.
- Support for splitting the bill.
- Currency formatting based on locale.
- Dark mode toggle.
- Toast notification after installation.

---

## 📦 Installation (for local development)

```bash
git clone https://github.com/your-username/tip-calculator.git
cd tip-calculator
npm install
npm start
```
