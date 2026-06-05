# 🪙 CoinTrail - Smart Expense Tracker

## Project Title & Brief Description

CoinTrail is a full-stack expense tracking application built using React, Node.js, Express, and SQLite. The application helps users record daily expenses, categorize spending, set monthly budgets, visualize expense distribution through charts, filter expenses by category and date range, and export expense data as CSV files. The project demonstrates end-to-end full-stack development including frontend UI design, REST API development, database integration, data visualization, and cloud deployment.

---

# 🚀 Live Demo Links

### Frontend (Vercel)

https://coin-trail-nine.vercel.app/

### Backend API (Render)

https://cointrail.onrender.com

### API Health Check

https://cointrail.onrender.com/

---

# ✨ Features

## Expense Management

- Add new expenses
- Edit existing expenses
- Delete expenses
- View complete expense history

## Expense Analytics

- Monthly spending summary
- Highest expense tracking
- Category-wise spending analysis
- Interactive Pie Chart visualization

## Budget Tracking

- Set category-wise budgets
- Monitor spending against budgets
- Budget usage indicators

## Filtering

- Filter expenses by category
- Filter expenses by date range
- Combined filtering support

## Data Export

- Export expense data as CSV

## Responsive UI

- Mobile-friendly layout
- Modern dashboard interface
- Professional card-based design

---

# 🛠 Tech Stack

## Frontend

### React

Used to build a component-based user interface.

### Vite

Provides fast development server and optimized production builds.

### Tailwind CSS

Used for responsive and modern styling.

### Axios

Handles communication between frontend and backend APIs.

### React Hook Form

Simplifies form handling and validation.

### React Hot Toast

Provides user-friendly notifications and alerts.

### React Icons

Used for modern icons throughout the application.

### Chart.js & React ChartJS 2

Used for expense visualization and analytics.

---

## Backend

### Node.js

JavaScript runtime used for server-side development.

### Express.js

Framework used for building REST APIs.

### SQLite3

Lightweight relational database used for storing expenses and budgets.

### Dotenv

Used for environment variable management.

### CORS

Enables secure communication between frontend and backend.

---

## Deployment

### Vercel

Frontend hosting platform.

### Render

Backend hosting platform.

### GitHub

Version control and source code management.

---

# ⚙️ How to Run Locally

## 1. Clone Repository

```bash
git clone https://github.com/pranjalmishra48/CoinTrail.git
cd CoinTrail
```

## 2. Start Backend

Open terminal:

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## 3. Start Frontend

Open a new terminal:

```bash
cd client
npm install
```

Create a `.env` file inside the `client` folder:

```env
VITE_API_URL=http://localhost:5000/api
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 📡 API Documentation

## Expense Endpoints

### Get All Expenses

**Method**

```http
GET
```

**Endpoint**

```http
/api/expenses
```

**Response**

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "amount": 1250,
      "category": "Transport",
      "date": "2026-06-03",
      "note": "Lucknow to Delhi"
    }
  ]
}
```

---

### Create Expense

**Method**

```http
POST
```

**Endpoint**

```http
/api/expenses
```

**Request Body**

```json
{
  "amount": 1250,
  "category": "Transport",
  "date": "2026-06-03",
  "note": "Lucknow to Delhi"
}
```

**Response**

```json
{
  "success": true,
  "message": "Expense Added"
}
```

---

### Update Expense

**Method**

```http
PUT
```

**Endpoint**

```http
/api/expenses/:id
```

**Request Body**

```json
{
  "amount": 1500,
  "category": "Transport",
  "date": "2026-06-03",
  "note": "Updated Expense"
}
```

**Response**

```json
{
  "success": true,
  "message": "Expense Updated"
}
```

---

### Delete Expense

**Method**

```http
DELETE
```

**Endpoint**

```http
/api/expenses/:id
```

**Response**

```json
{
  "success": true,
  "message": "Expense Deleted"
}
```

---

### Expense Summary

**Method**

```http
GET
```

**Endpoint**

```http
/api/expenses/summary
```

**Response**

```json
{
  "success": true,
  "data": {
    "monthlyTotal": 8398,
    "highestExpense": {
      "amount": 3348
    },
    "categoryTotals": [
      {
        "category": "Food",
        "total": 3000
      }
    ]
  }
}
```

---

## Budget Endpoints

### Get All Budgets

**Method**

```http
GET
```

**Endpoint**

```http
/api/budgets
```

**Response**

```json
{
  "success": true,
  "data": []
}
```

---

### Create Budget

**Method**

```http
POST
```

**Endpoint**

```http
/api/budgets
```

**Request Body**

```json
{
  "category": "Food",
  "limitAmount": 5000
}
```

**Response**

```json
{
  "success": true,
  "message": "Budget Saved"
}
```

---

# 📂 Project Structure

```text
CoinTrail
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   │   ├── BudgetForm.jsx
│   │   │   ├── BudgetIndicator.jsx
│   │   │   ├── ExpenseChart.jsx
│   │   │   ├── ExpenseForm.jsx
│   │   │   ├── ExpenseTable.jsx
│   │   │   ├── FilterPanel.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── SummaryCards.jsx
│   │   │
│   │   ├── pages
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── services
│   │   │   └── expenseApi.js
│   │   │
│   │   ├── utils
│   │   │   └── exportCsv.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── controllers
│   ├── database
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── screenshots
│   ├── dashboard.png
│   ├── expenses.png
│   ├── budget.png
│   └── chart.png
│
├── README.md
└── .gitignore
```

## Folder Overview

### client/

Contains the React frontend application.

### components/

Reusable UI components.

### pages/

Application pages.

### services/

Axios API service configuration.

### utils/

Utility functions such as CSV export.

### server/

Contains backend API implementation.

### controllers/

Business logic for API endpoints.

### models/

Database operations and queries.

### routes/

REST API route definitions.

### database/

SQLite database configuration and connection.

---

# 📸 Screenshots

## Dashboard

![Dashboard](./screenshots/dashboard.png)

## Expense History

![Expenses](./screenshots/expenses.png)

## Budget Tracking

![Budget](./screenshots/budget.png)

## Expense Analytics

![Chart](./screenshots/chart.png)

---

# 🔮 Next Steps

The following features were intentionally left out to keep the project focused on the assignment requirements:

## User Authentication

Allow multiple users to maintain separate expense records.

## Recurring Expenses

Automatically generate recurring monthly expenses.

## Advanced Analytics

Monthly reports, trend analysis, and spending forecasts.

## Search Functionality

Search expenses by category, amount, or note.

## Dark Mode

Support theme switching between light and dark modes.

## Multi-Currency Support

Allow tracking expenses in multiple currencies.

## Cloud Database Migration

Move from SQLite to PostgreSQL or MySQL for production scalability.

## PDF Reports

Generate downloadable monthly expense reports.

---

# 👨‍💻 Author

**Pranjal Mishra**

GitHub: https://github.com/pranjalmishra48

Repository: https://github.com/pranjalmishra48/CoinTrail

Frontend: https://coin-trail-nine.vercel.app/

Backend: https://cointrail.onrender.com

---

## License

This project is created for educational and assessment purposes.
