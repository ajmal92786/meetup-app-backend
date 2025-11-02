# 🎉 Meetup App — Backend

The **Meetup App Backend** powers the event management system, providing RESTful APIs for listing events, fetching event details, and managing event data. Built using **Node.js**, **Express**, and **MongoDB (Mongoose)**, it serves as the data layer for the [Meetup App Frontend](https://github.com/ajmal92786/meetup-app-frontend).

---

## 🚀 Features

- 🔹 Fetch all events
- 🔹 Get a specific event by its ID
- 🔹 Connected with MongoDB using Mongoose
- 🔹 Organized and clean folder structure
- 🔹 Uses environment variables for configuration
- 🔹 Well-structured routes, controllers, and models

---

## 🛠️ Tech Stack

- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **dotenv** – Environment configuration

---

## 📁 Folder Structure

```
meetup-app-backend/
├── db/
│   └── db.connect.js
├── models/
│   └── event.model.js
├── index.js
├── package.json
└── .env
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

```bash
MONGODB=<your_mongodb_connection_string>
PORT=3000
```

---

## 💾 Seeding Sample Data

You can seed sample event data using a script like `seed.js`:

```js
const { initializeDatabase } = require("./db/db.connect");
const Event = require("./models/event.model");
const eventsData = require("./data/events.json");

initializeDatabase();

const seedEvents = async () => {
  try {
    await Event.deleteMany({});
    await Event.insertMany(eventsData);
    console.log("✅ Events seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding events:", error);
    process.exit(1);
  }
};

seedEvents();
```

---

## 🧩 API Endpoints

| Method | Endpoint           | Description                |
| :----: | ------------------ | -------------------------- |
| `GET`  | `/events`          | Fetch all events           |
| `GET`  | `/events/:eventId` | Fetch a single event by ID |

---

## 🔍 Example Response

### `GET /events`

```json
{
  "title": "Tech Conference",
  "hostedBy": "Tech Innovators",
  "type": "Offline",
  "thumbnail": "https://images.unsplash.com/photo-example",
  "description": "Stay ahead in the world of technology...",
  "startDateTime": "2026-07-13T07:00:00.000Z",
  "endDateTime": "2026-07-13T10:00:00.000Z",
  "venue": "Tech City Convention Center",
  "address": "101 Innovation Drive, City",
  "price": 2500,
  "speakers": [
    {
      "name": "Amit Verma",
      "designation": "CTO, CloudNova",
      "image": "https://images.unsplash.com/photo-example"
    },
    {
      "name": "Priya Mehta",
      "designation": "Lead Developer, CodeCrafters",
      "image": "https://images.unsplash.com/photo-example"
    }
  ],
  "dressCode": "Business casual",
  "ageRestriction": "18 and above",
  "tags": ["technology", "conference", "ai", "web"]
}
```

---

## 🧠 How to Run

```bash
# 1️⃣ Install dependencies
npm install

# 2️⃣ Add .env file
# (Include MONGODB URI and PORT)

# 3️⃣ Start the server
npm start
```

Server will run at 👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🔗 Frontend Repository

👉 [Meetup App Frontend](https://github.com/ajmal92786/meetup-app-frontend)

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Ajmal Raza**
📧 [ajmalbly27@gmail.com](mailto:ajmalbly27@gmail.com)
💼 [LinkedIn](https://www.linkedin.com/in/mohd-ajmal-raza)
