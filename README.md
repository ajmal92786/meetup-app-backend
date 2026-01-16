# Meetup App – Backend ⚙️

This repository contains the **backend server** for the Meetup App. It is responsible for managing events data, handling API requests, and communicating with the MongoDB database.

The backend is built using **Node.js**, **Express.js**, and **MongoDB (Mongoose)**, following a clean and minimal REST API structure.

---

## 🌐 Live API

🔗 **Backend Base URL:** [https://meetup-app-backend-eac.vercel.app/](https://meetup-app-backend-eac.vercel.app/)

---

## 🚀 Features

- 📋 Fetch all meetup events
- 🔍 Fetch a single event by ID
- 🧠 Centralized database connection logic
- ⚡ RESTful API design
- 🌍 CORS-enabled for frontend integration
- 🧩 Clean and minimal server structure

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

---

## 📁 Project Structure

```
meetup-app-backend/
├── db/
│   └── db.connect.js       # Database connection logic
├── models/
│   └── event.model.js      # Event schema and model
├── index.js                # Express server entry point
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root of the project:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

---

## 💻 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ajmal92786/meetup-app-backend.git
cd meetup-app-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Server

```bash
npm start
```

Server will run on:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🔗 API Endpoints

### 🏠 Health Check

```http
GET /
```

Response:

```html
Welcome to my Meetup App Server.
```

---

### 📋 Get All Events

```http
GET /events
```

**Success Response (200):**

```json
{
  "success": true,
  "events": [
    {
      "_id": "eventId",
      "title": "Tech Conference",
      "hostedBy": "Tech Innovators",
      "type": "Offline",
      "thumbnail": "https://images.unsplash.com/photo",
      "description": "Stay ahead in the world of technology ...",
      "startDateTime": "date",
      "endDateTime": "date",
      "venue": "Tech City Convention Center",
      "address": "101 Innovation Drive, City",
      "price": 2500,
      "speakers": [
        {
          "_id": "id",
          "name": "Amit Verma",
          "designation": "CTO, CloudNova",
          "image": "https://images.unsplash.com/photo"
        }
      ],
      "dressCode": "Business casual",
      "ageRestriction": "18 and above",
      "tags": ["technology", "conference", "web"]
    }
  ]
}
```

**Error Response (404):**

```json
{
  "success": false,
  "message": "No events found."
}
```

---

### 🔍 Get Event by ID

```http
GET /events/:eventId
```

**Success Response (200):**

```json
{
  "success": true,
  "event": {
    "_id": "eventId",
    "title": "Tech Conference",
    "venue": "Tech City Convention Center",
    "price": 2500,
    ...
  }
}
```

**Error Response (404):**

```json
{
  "success": false,
  "message": "Event not found."
}
```

---

## 🔄 Frontend Integration

This backend is consumed by the Meetup frontend application:

🔗 Frontend Repo: [https://github.com/ajmal92786/meetup-app-frontend](https://github.com/ajmal92786/meetup-app-frontend)

The frontend communicates with this server using REST APIs and fetches data in JSON format.

---

## 📬 Contact

For bugs or feature requests:

📧 **[ajmalbly27@gmail.com](mailto:ajmalbly27@gmail.com)**
