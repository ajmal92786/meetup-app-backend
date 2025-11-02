const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    hostedBy: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Online", "Offline"],
      required: true,
    },
    thumbnail: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    startDateTime: {
      type: Date,
      required: true,
    },
    endDateTime: {
      type: Date,
      required: true,
    },
    venue: {
      type: String,
    },
    address: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    speakers: [
      {
        name: { type: String, required: true },
        designation: { type: String },
        image: { type: String },
      },
    ],
    dressCode: {
      type: String,
    },
    ageRestriction: {
      type: String,
    },
    tags: [
      {
        type: String,
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
