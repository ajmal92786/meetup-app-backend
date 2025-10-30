const express = require("express");
const { initializeDatabase } = require("./db/db.connect");
const Event = require("./models/event.model");

const app = express();

// Initialize Database
initializeDatabase();

app.get("/", (req, res) => {
  res.send("<h2>Welcome to my Meetup App Server.</h2>");
});

// Function to get all events
const getAllEvents = async () => {
  try {
    return await Event.find();
  } catch (error) {
    throw new Error("Error fetching events: " + error.message);
  }
};

// Route to get all events
app.get("/events", async (req, res) => {
  try {
    const events = await getAllEvents();

    if (events && events.length > 0) {
      return res.status(200).json({ success: true, events });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "No events found." });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching events",
      error: error.message,
    });
  }
});

// Function to get a event by eventId
const getEventById = async (eventId) => {
  try {
    return await Event.findById(eventId);
  } catch (error) {
    throw new Error("Error fetching event: " + error.message);
  }
};

// Route to get a event by id
app.get("/events/:eventId", async (req, res) => {
  try {
    const { eventId } = req.params;

    const event = await getEventById(eventId);

    if (event) {
      return res.status(200).json({ success: true, event });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Event not found." });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching event",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
