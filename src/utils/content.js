import ArrowSwap from "../components/icons/ArrowSwap";
import CardSlash from "../components/icons/CardSlash";
import Cloud from "../components/icons/Cloud";
import DollarCircle from "../components/icons/DollarCircle";
import Import from "../components/icons/Import";
import Integrate from "../components/icons/Integrate";
import MagicPen from "../components/icons/MagicPen";
import Microphone from "../components/icons/Microphone";
import Note from "../components/icons/Note";
import Organization from "../components/icons/Organization";
import Search from "../components/icons/Search";
import Slack from "../components/icons/Slack";
import SMSNotification from "../components/icons/SMSNotification";
import TwoUsers from "../components/icons/TwoUsers";
import Lock from "../components/icons/Lock";

const navigationLinks = [
  {
    id: 1,
    link: "Home",
    href: "#",
  },
  {
    id: 2,
    link: "Upload Crop",
    href: "#",
  },
  {
    id: 3,
    link: "My Crops",
    href: "#",
  },
  {
    id: 4,
    link: "Prediction",
    href: "#",
  },
];

const reviews = [
  {
    id: 1,
    src: new URL("../assets/headshots/img-11.webp", import.meta.url),
    alt: "Rachel Foster",
  },
  {
    id: 2,
    src: new URL("../assets/headshots/img-7.webp", import.meta.url),
    alt: "Emily Thompson",
  },
  {
    id: 3,
    src: new URL("../assets/headshots/img-5.webp", import.meta.url),
    alt: "Daniel Harris",
  },
  {
    id: 4,
    src: new URL("../assets/headshots/img-9.webp", import.meta.url),
    alt: "Sarah Lee",
  },
  {
    id: 5,
    src: new URL("../assets/headshots/img-15.webp", import.meta.url),
    alt: "Lucas King",
  },
];

const logos = [
  {
    id: 1,
    src: new URL("../assets/logos/Netflix.webp", import.meta.url),
    alt: "Netflix Logo",
  },
  {
    id: 2,
    src: new URL("../assets/logos/ExxonMobile.webp", import.meta.url),
    alt: "Exxon Mobile Logo",
  },
  {
    id: 3,
    src: new URL("../assets/logos/Microsoft.webp", import.meta.url),
    alt: "Microsoft Logo",
  },
  {
    id: 4,
    src: new URL("../assets/logos/Vice.webp", import.meta.url),
    alt: "Vice Logo",
  },
  {
    id: 5,
    src: new URL("../assets/logos/Walmart.webp", import.meta.url),
    alt: "Walmart Logo",
  },
  {
    id: 6,
    src: new URL("../assets/logos/Chase.webp", import.meta.url),
    alt: "Chase Logo",
  },
  {
    id: 7,
    src: new URL("../assets/logos/Visa.webp", import.meta.url),
    alt: "Visa Logo",
  },
  {
    id: 8,
    src: new URL("../assets/logos/Amazon.webp", import.meta.url),
    alt: "Amazon Logo",
  },
];

const frequentlyAskedQuestions = [
  {
    category: "General",
    id: 1,
    questions: [
      {
        id: 1,
        alt: "Note Icon",
        Icon: Note,
        question: "What is this app for?",
        answer:
          "This app helps farmers identify crop diseases by analyzing images using AI, \
          providing quick and accurate diagnoses.",
      },
      {
        id: 2,
        alt: "Magic Pen Icon",
        Icon: MagicPen,
        question: "Is the app free to use?",
        answer:
          "We offer both free and premium plans. The free version includes basic disease detection, while the premium version provides advanced insights and recommendations.",
      },
      {
        id: 3,
        alt: "Two Users Icon",
        Icon: TwoUsers,
        question: "Which crops are supported?",
        answer:
          "Currently, our AI can diagnose diseases in major crops like wheat, rice, maize, tomatoes, and more. \
          We are continuously adding new crops based on user demand."
      },
      {
        id: 4,
        alt: "Cloud Icon",
        Icon: Cloud,
        question: "How accurate is the AI diagnosis?",
        answer:
          "Our AI model has been trained on thousands of crop disease images and provides high accuracy, but we always recommend consulting an expert for confirmation.",
      },
    ],
  },
  {
    id: 2,
    category: "AI Diagnosis",
    questions: [
      {
        id: 5,
        alt: "Dollar Circle Icon",
        Icon: DollarCircle,
        question: "How does the AI detect crop diseases?",
        answer:
          "The AI analyzes images using machine learning, comparing them with a vast database of plant diseases to provide an accurate diagnosis.",
      },
      {
        id: 6,
        alt: "Card Slash Icon",
        Icon: CardSlash,
        question: "Can the AI work offline?",
        answer:
          "No, an internet connection is required to upload images and receive results since the AI runs on cloud-based servers.",
      },
      {
        id: 7,
        alt: "Arrow Swap Icon",
        Icon: ArrowSwap,
        question: "Does the AI provide treatment suggestions?",
        answer:
          "Yes, after identifying the disease, the app provides recommendations for treatments, best practices, and preventive measures.",
      },
      {
        id: 8,
        alt: "Lock Icon",
        Icon: Lock,
        question: "Can the AI misidentify a disease?",
        answer:
          "While our AI is highly accurate, certain factors like poor image quality or uncommon symptoms may affect results. We encourage users to cross-check with experts.",
      },
    ],
  },
  {
    id: 3,
    category: "Usage & Features",
    questions: [
      {
        id: 9,
        alt: "Organization Icon",
        Icon: Organization,
        question: "How do I upload an image for diagnosis?",
        answer:
          "Simply open the app, click on the “Upload Image” button, select or capture a photo, and wait for the AI to analyze it.",
      },
      {
        id: 10,
        alt: "SMS Notification Icon",
        Icon: SMSNotification,
        question: "Can I track past diagnoses?",
        answer:
          "Yes, your previous diagnoses and AI reports are saved in the app for easy reference.",
      },
      {
        id: 11,
        alt: "Microphone Icon",
        Icon: Microphone,
        question:
          "Is there a way to connect with agricultural experts?",
        answer:
          "Yes, our premium plan allows you to chat with certified agricultural experts for further guidance.",
      },
      {
        id: 12,
        alt: "Search Icon",
        Icon: Search,
        question:
          "Can I get alerts for potential outbreaks?",
        answer:
          "Yes, the app provides real-time alerts about disease outbreaks in your area based on AI and user reports.",
      },
    ],
  },
  {
    id: 4,
    category: "Support & Troubleshooting",
    questions: [
      {
        id: 13,
        alt: "Organization Icon",
        Icon: Organization,
        question: "What should I do if the app isn’t working properly?",
        answer:
          "Try restarting the app, checking your internet connection, and ensuring you have the latest version installed. If the issue persists, contact our support team.",
      },
      {
        id: 14,
        alt: "Integrate Icon",
        Icon: Integrate,
        question: "Why is my image not being analyzed?",
        answer:
          "Ensure the image is clear, well-lit, and focuses on the affected area of the plant. Blurry or low-quality images may not be processed correctly.",
      },
      {
        id: 15,
        alt: "Import Icon",
        Icon: Import,
        question:
          "How do I update the app?",
        answer:
          "Visit your device’s app store and check for updates. We recommend enabling auto-updates to get the latest features and improvements.",
      },
      {
        id: 16,
        alt: "Slack Icon",
        Icon: Slack,
        question:
          "How can I contact customer support?",
        answer:
          "You can reach our support team through the “Help” section in the app or email us at support@yourapp.com.",
      },
    ],
  },
];

const testimonials = [
  {
    id: 1,
    rating: 4,
    description:
      "This app saved my crop! The AI quickly identified a fungal infection, and I was able to treat it before it spread.",
    src: new URL("../assets/headshots/img-7.webp", import.meta.url),
    name: "Rajesh Kumar",
    title: "Wheat Farmer",
  },
  {
    id: 2,
    rating: 5,
    description:
      "I love how easy it is to use. Just take a picture, and the app tells me exactly what’s wrong with my plants!",
    src: new URL("../assets/headshots/img-3.webp", import.meta.url),
    name: "Maria González",
    title: "Organic Farmer",
  },
  {
    id: 3,
    rating: 5,
    description:
      "The AI diagnosis is surprisingly accurate. It’s a game-changer for farmers who lack immediate access to experts.",
    src: new URL("../assets/headshots/img-9.webp", import.meta.url),
    name: "John Peterson",
    title: "Agronomist",
  },
  {
    id: 4,
    rating: 4,
    description:
      "Before using this app, I struggled to identify diseases in my crops. Now, I feel confident in managing my farm.",
    src: new URL("../assets/headshots/img-4.webp", import.meta.url),
    name: "Fatima Hassan",
    title: "Rice Farmer",
  },
  {
    id: 5,
    rating: 4,
    description:
      "The real-time alerts have helped me prevent major outbreaks on my farm. Highly recommended!",
    src: new URL("../assets/headshots/img-15.webp", import.meta.url),

    name: "William Brown",
    title: "Corn Grower",
  },
  {
    id: 6,
    rating: 5,
    description:
      "As someone who grows various crops, I appreciate how the app supports multiple plant types. Very helpful!",
    src: new URL("../assets/headshots/img-5.webp", import.meta.url),
    name: "Li Wei",
    title: "Horticulturist",
  },
  {
    id: 7,
    rating: 4,
    description:
      "Grape diseases can be tricky to spot early, but this app has made disease management much easier.",
    src: new URL("../assets/headshots/img-1.webp", import.meta.url),
    name: "Elena Ivanova",
    title: "Vineyard Owner",
  },
  {
    id: 8,
    rating: 5,
    description:
      "AI-powered diagnosis is the future of farming. This app makes it accessible for everyone.",
    src: new URL("../assets/headshots/img-6.webp", import.meta.url),
    name: "Ahmed Yusuf",
    title: "Vegetable Farmer",
  },
  {
    id: 9,
    rating: 4,
    description:
      "It detected early signs of leaf rust on my coffee plants. I took action immediately and saved my harvest.",
    src: new URL("../assets/headshots/img-8.webp", import.meta.url),
    name: "Carlos Mendes",
    title: "Coffee Plantation Owner",
  },
  {
    id: 10,
    rating: 5,
    description:
      "I use this app daily to monitor my plants. The detailed reports help me make informed decisions.",
    src: new URL("../assets/headshots/img-13.webp", import.meta.url),
    name: "Emily Carter",
    title: " Greenhouse Grower",
  },
  {
    id: 11,
    rating: 4,
    description:
      "I recommend this tool to farmers who need quick disease identification without waiting for an expert.",
    src: new URL("../assets/headshots/img-10.webp", import.meta.url),
    name: "David Kim",
    title: "Agriculture Consultant",
  },
  {
    id: 12,
    rating: 4,
    description:
      "Managing a large plantation is tough, but this app helps me detect diseases before they spread.",
    src: new URL("../assets/headshots/img-14.webp", import.meta.url),
    name: "Ananya Sharma",
    title: "Tea Plantation Manager",
  },
  {
    id: 13,
    rating: 5,
    description:
      "The AI detected mosaic disease early, allowing me to remove affected plants and protect my field.",
    src: new URL("../assets/headshots/img-12.webp", import.meta.url),
    name: "Ben Okafor",
    title: "Cassava Farmer",
  },
  {
    id: 14,
    rating: 4,
    description:
      "Even for ornamental plants, this app helps identify diseases that affect plant health and aesthetics.",
    src: new URL("../assets/headshots/img-15.webp", import.meta.url),
    name: "Sofia Rossi",
    title: "Floriculturist",
  },
  {
    id: 15,
    rating: 5,
    description:
      "I’ve struggled with palm tree diseases for years, but this app provides the right guidance every time.",
    src: new URL("../assets/headshots/img-2.webp", import.meta.url),
    name: "Hassan Al-Farsi",
    title: "Date Palm Grower",
  },
];

const footerCols = [
  {
    id: 1,
    category: "About Us",
    links: ["Our Mission", "Our Team", "How it Works", "Careers"],
  },
  {
    id: 2,
    category: "Support",
    links: ["Help Center", "Contact Us", "App Tutorials", "Report an Issue"],
  },
  {
    id: 3,
    category: "Resources",
    links: ["Blog", "Disease Database", "Best Practices", "Community Forum"],
  },
  {
    id: 4,
    category: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Refund Policy", "Compliance"],
  },
];

const features = {
  SmartOrganization: {
    alt: "Smart Organization graphic",
    heading: "Smart Organization",
    description:
      "Automatically categorize and tag your notes using AI-driven analysis. \
      NoteFlow intelligently identifies key topics and organizes your content, \
      making it easy to find and retrieve your notes when you need them most.",
  },
  ContextualReminders: {
    alt: "Contextual Reminders graphic",
    heading: "Contextual Reminders",
    description:
      "Stay on top of important tasks with AI-powered reminders that adapt to the \
      context of your notes. NoteFlow recognizes deadlines, follow-ups, and key actions \
      from your notes and sends timely alerts to ensure nothing slips through the cracks.",
  },
};

export {
  navigationLinks,
  reviews,
  logos,
  frequentlyAskedQuestions,
  testimonials,
  footerCols,
  features,
};
