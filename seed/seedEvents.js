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
      "Stay ahead in the world of technology by attending the Tech Conference organized by Tech Innovators. This offline conference will be held on July 13th from 7:00 AM to 10:00 AM at Tech City Convention Center, 101 Innovation Drive, City. Join experts Amit Verma (CTO, CloudNova) and Priya Mehta (Lead Developer, CodeCrafters) as they explore breakthroughs in AI, web development, and cloud technologies. The event is open to individuals aged 18 and above and requires a ticket priced at ₹2,500. The dress code is business casual.",
    startDateTime: "2023-07-13T07:00:00Z",
    endDateTime: "2023-07-13T10:00:00Z",
    venue: "Tech City Convention Center",
    address: "101 Innovation Drive, City",
    price: 2500,
    speakers: [
      {
        name: "Amit Verma",
        designation: "CTO, CloudNova",
        image:
          "https://images.unsplash.com/photo-1659356575995-a389266507b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1hcmtldGVyJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      },
      {
        name: "Priya Mehta",
        designation: "Lead Developer, CodeCrafters",
        image:
          "https://images.unsplash.com/photo-1619950463968-f2bfb9341d00?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hcmtldGVyJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      },
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
      "Enhance your creativity by joining the Design Workshop organized by Creative Minds. This offline workshop will take place on July 10th from 2:00 PM to 5:00 PM at Design Hub, 56 Art Street, City. Learn from Sarah Williams (Senior UI Designer, Figma Labs) as she guides you through UI/UX design principles, color theory, and prototyping tools. The workshop is open to participants aged 16 and above with a ticket price of ₹1,800. Dress code: smart casual.",
    startDateTime: "2023-07-10T14:00:00Z",
    endDateTime: "2023-07-10T17:00:00Z",
    venue: "Design Hub",
    address: "56 Art Street, City",
    price: 1800,
    speakers: [
      {
        name: "Sarah Williams",
        designation: "Senior UI Designer, Figma Labs",
        image:
          "https://images.unsplash.com/photo-1595626259537-9510012e53ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1hcmtldGVyJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      },
    ],
    dressCode: "Smart casual",
    ageRestriction: "16 and above",
    tags: ["design", "workshop", "uiux"],
  },
  {
    title: "Marketing Seminar",
    hostedBy: "Marketing Experts",
    type: "Offline",
    thumbnail:
      "https://images.unsplash.com/photo-1627560985113-ab67e8031f40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hcmtldGluZyUyMHNlbWluYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    description:
      "Stay ahead of the game in the dynamic field of digital marketing by attending the Marketing Seminar organized by Marketing Experts. This offline seminar will be held on August 15th from 10:00 AM to 12:00 PM at Marketing City, situated at 789 Marketing Avenue, City. Join industry leaders Sarah Johnson, Marketing Manager, and Michael Brown, SEO Specialist, as they delve into the latest trends and strategies in digital marketing. The seminar is open to individuals aged 18 and above and requires a ticket priced at ₹3,000. The dress code for the event is smart casual",
    startDateTime: "2023-08-15T10:00:00Z",
    endDateTime: "2023-08-15T12:00:00Z",
    venue: "Marketing City",
    address: "789 Marketing Avenue, City",
    price: 3000,
    speakers: [
      {
        name: "Sarah Johnson",
        designation: "Marketing Manager",
        image:
          "https://images.unsplash.com/photo-1665118440493-c25389dd1166?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hcmtldGVyJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      },
      {
        name: "Michael Brown",
        designation: "SEO Specialist",
        image:
          "https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      },
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
      "Capture moments like a pro by attending the Photography Bootcamp hosted by Lens Masters. This online bootcamp will take place on September 5th from 9:00 AM to 12:00 PM via Zoom. Join Emily Carter (Professional Photographer) as she teaches lighting, framing, and post-processing techniques for DSLR and mobile photography. The bootcamp is open to individuals aged 15 and above with a ticket price of ₹1,200. Dress code: casual.",
    startDateTime: "2023-09-05T09:00:00Z",
    endDateTime: "2023-09-05T12:00:00Z",
    venue: "Online (Zoom)",
    Address: "",
    price: 1200,
    speakers: [
      {
        name: "Emily Carter",
        designation: "Professional Photographer",
        image:
          "https://plus.unsplash.com/premium_photo-1661371243525-d02768a7feee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      },
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
      "Explore the future of innovation by attending the AI & Data Science Summit organized by FutureTech. This offline summit will be held on September 20th from 10:00 AM to 4:00 PM at Tech Park Auditorium, 101 Future Lane, City. Learn from Dr. Rajesh Kumar (AI Researcher, DataNext) and Lisa Fernandez (Data Scientist, IBM) as they share insights on AI, machine learning, and data science trends. Open to attendees aged 18 and above, tickets are priced at ₹3,500. Dress code: business casual.",
    startDateTime: "2023-09-20T10:00:00Z",
    endDateTime: "2023-09-20T16:00:00Z",
    venue: "Tech Park Auditorium",
    address: "101 Future Lane, City",
    price: 3500,
    speakers: [
      {
        name: "Dr. Rajesh Kumar",
        designation: "AI Researcher, DataNext",
        image:
          "https://images.unsplash.com/flagged/photo-1563536314719-2e812e896f50?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      },
      {
        name: "Lisa Fernandez",
        designation: "Data Scientist, IBM",
        image:
          "https://plus.unsplash.com/premium_photo-1661270460275-803dfb0cbdac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHxkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      },
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
      "Master the art of storytelling by joining the Content Strategy Masterclass organized by Writers Den. This online masterclass will be held on October 1st from 11:00 AM to 1:00 PM via Google Meet. Learn from Olivia Martin (Content Director, Brandify) as she reveals secrets to impactful brand engagement and digital narratives. The event is open to individuals aged 18 and above with a ticket price of ₹1,500. Dress code: casual.",
    startDateTime: "2023-10-01T11:00:00Z",
    endDateTime: "2023-10-01T13:00:00Z",
    venue: "Online (Google Meet)",
    address: "",
    price: 1500,
    speakers: [
      {
        name: "Olivia Martin",
        designation: "Content Director, Brandify",
        image:
          "https://images.unsplash.com/photo-1573496547376-81418527a728?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      },
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
