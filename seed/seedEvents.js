const mongoose = require("mongoose");
const { initializeDatabase } = require("../db/db.connect");
const Event = require("../models/event.model");

const seedEvents = [
  {
    title: "Tech Conference",
    hostedBy: "Tech Innovators",
    type: "Offline",
    thumbnail: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
    description:
      "Join industry professionals at the annual Tech Conference to discuss breakthroughs in AI, web development, and cloud technologies.",
    startDateTime: "2023-07-13T07:00:00Z",
    endDateTime: "2023-07-13T10:00:00Z",
    venueAddress: "Tech City Convention Center, 101 Innovation Drive, City",
    price: 2500,
    speakers: [
      { name: "Amit Verma", designation: "CTO, CloudNova" },
      { name: "Priya Mehta", designation: "Lead Developer, CodeCrafters" },
    ],
    dressCode: "Business casual",
    ageRestriction: "18 and above",
    tags: ["technology", "conference", "ai", "web"],
  },
  {
    title: "Design Workshop",
    hostedBy: "Creative Minds",
    type: "Offline",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    description:
      "A hands-on workshop focused on UI/UX design, color theory, and prototyping tools. Learn from experienced designers and enhance your design thinking skills.",
    startDateTime: "2023-07-10T14:00:00Z",
    endDateTime: "2023-07-10T17:00:00Z",
    venueAddress: "Design Hub, 56 Art Street, City",
    price: 1800,
    speakers: [
      { name: "Sarah Williams", designation: "Senior UI Designer, Figma Labs" },
    ],
    dressCode: "Smart casual",
    ageRestriction: "16 and above",
    tags: ["design", "workshop", "uiux"],
  },
  {
    title: "Marketing Seminar",
    hostedBy: "Marketing Experts",
    type: "Offline",
    thumbnail: "https://images.unsplash.com/photo-1551836022-6b8a4f54a0b8",
    description:
      "Stay ahead of the game in digital marketing with insights from leading experts. Learn strategies on SEO, branding, and digital engagement.",
    startDateTime: "2023-08-15T10:00:00Z",
    endDateTime: "2023-08-15T12:00:00Z",
    venueAddress: "Marketing City, 789 Marketing Avenue, City",
    price: 3000,
    speakers: [
      { name: "Sarah Johnson", designation: "Marketing Manager" },
      { name: "Michael Brown", designation: "SEO Specialist" },
    ],
    dressCode: "Smart casual",
    ageRestriction: "18 and above",
    tags: ["marketing", "digital"],
  },
  {
    title: "Photography Bootcamp",
    hostedBy: "Lens Masters",
    type: "Online",
    thumbnail: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
    description:
      "Master the art of photography from home. This bootcamp covers lighting, framing, and post-processing techniques for both DSLR and mobile photographers.",
    startDateTime: "2023-09-05T09:00:00Z",
    endDateTime: "2023-09-05T12:00:00Z",
    venueAddress: "Online (Zoom)",
    price: 1200,
    speakers: [
      { name: "Emily Carter", designation: "Professional Photographer" },
    ],
    dressCode: "Casual",
    ageRestriction: "15 and above",
    tags: ["photography", "online", "creative"],
  },
  {
    title: "AI & Data Science Summit",
    hostedBy: "FutureTech",
    type: "Offline",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    description:
      "Discover the power of data and artificial intelligence with top minds in the field. Explore machine learning trends, case studies, and emerging data tools.",
    startDateTime: "2023-09-20T10:00:00Z",
    endDateTime: "2023-09-20T16:00:00Z",
    venueAddress: "Tech Park Auditorium, 101 Future Lane, City",
    price: 3500,
    speakers: [
      { name: "Dr. Rajesh Kumar", designation: "AI Researcher, DataNext" },
      { name: "Lisa Fernandez", designation: "Data Scientist, IBM" },
    ],
    dressCode: "Business casual",
    ageRestriction: "18 and above",
    tags: ["ai", "datascience", "machinelearning"],
  },
  {
    title: "Content Strategy Masterclass",
    hostedBy: "Writers Den",
    type: "Online",
    thumbnail: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe",
    description:
      "Unlock the secrets of compelling storytelling and brand engagement through effective content strategy. Learn how to create impactful digital narratives.",
    startDateTime: "2023-10-01T11:00:00Z",
    endDateTime: "2023-10-01T13:00:00Z",
    venueAddress: "Online (Google Meet)",
    price: 1500,
    speakers: [
      { name: "Olivia Martin", designation: "Content Director, Brandify" },
    ],
    dressCode: "Casual",
    ageRestriction: "18 and above",
    tags: ["content", "writing", "marketing"],
  },
];

const seedDatabase = async () => {
  await initializeDatabase();

  try {
    await Event.deleteMany(); // clears previous data
    await Event.insertMany(seedEvents);
    console.log("Events seeded successfully!");
  } catch (error) {
    console.error("Error seeding events:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
