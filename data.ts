import { link } from "fs";
import { title } from "process";

const navItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const cardDetails = [
  {
    title: "I prioritize best practices and continuous improvement",
    description:
      "I excel in managing projects efficiently through meticulous planning, clear communication, and effective time management. ",
    img: "/assets/code.png",
  },
  {
    title: "Delivering top-notch results",
    description:
      "My proactive approach to problem-solving and adaptability ensures that I can tackle challenges effectively. ",
  },
  {
    title: "With a strong focus on collaboration and teamwork",
    description:
      "I thrive in dynamic environments where communication and cooperation are key. I actively engage with stakeholders, gather requirements, and ensure alignment throughout the development process. ",
    img: "/projects/SuwaDiwiyaProject.jpeg",
  },
];

interface CardData {
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    title: "Card 1",
    description: "This is the description for Card 1",
  },
  {
    title: "Card 2",
    description: "This is the description for Card 2",
  },
  {
    title: "Card 3",
    description: "This is the description for Card 3",
  },
];

interface ExperienceData {
  title: string;
  date: string;
  description: string;
}

const experienceData: ExperienceData[] = [
  {
    title: "Software Engineer",
    date: "2021 - Present",
    description:
      "I am a dedicated frontend developer with a robust portfolio of diverse projects. My expertise encompasses Next.js, Vite, and React Native, where I create dynamic and user-friendly interfaces.",
  },
  {
    title: "Software Engineer",
    date: "2021 - Present",
    description:
      "I am a dedicated frontend developer with a robust portfolio of diverse projects. My expertise encompasses Next.js, Vite, and React Native, where I create dynamic and user-friendly interfaces.",
  },
];

const projects = [
  {
    title: "Photo Sharing Application",
    description: "It serves as a platform for both finding job opportunities and sharing job listings among users.",
    img: "/projects/1.png",
    link: "https://www.google.com",
    icons: ["reactjs.png", "nodejs.png", "sql.png", "expressjs.png", "reactquery.png"]
  },
  {
    title: "Alahaa.com e-commerce website",
    description: "Crafted with care using Woo-commerce. Seamless shopping, secure transactions, and exceptional customer service.",
    img: "/projects/2.png",
    link: "https://www.google.com",
    icons: ["wordpress.png", "elementor.png", "woocommerce.png", "payhere.png", "paypal.png"]
  },
  {
    title: "Inventory Management System",
    description: "Streamline inventory management for a cooking equipment shop, ensuring efficient tracking, updating, and monitoring of stock levels.",
    img: "/projects/3.png",
    link: "https://www.google.com",
    icons: ["reactjs.png", "nodejs.png", "sql.png", "expressjs.png", "reactquery.png"]
  },
  {
    title: "A Point of Sales (POS) software",
    description: "A Point of Sales (POS) software built with JavaFX and MySQL for efficient transaction processing.",
    img: "/projects/5.png",
    link: "https://www.google.com",
    icons: ["reactjs.png", "nodejs.png", "sql.png", "expressjs.png", "reactquery.png"]
  },
  {
    title: "Suwa Diwiya Website",
    description: "The site offers resources for managing diabetes, including dietary tips, exercise routines, and medication information. It features an intuitive design, user-friendly navigation, and responsive layouts to ensure accessibility across all devices.",
    img: "/projects/6.png",
    link: "https://www.google.com",
    icons: ["reactjs.png", "nodejs.png", "sql.png", "expressjs.png", "reactquery.png"]
  },
  {
    title: "Department of IT Thorana",
    description: "Our team created a Poson Thorana using Next.js, featuring interactive elements, modern design, and smooth performance to celebrate the cultural event.",
    img: "/projects/SuwaDiwiyaProject.jpeg",
    link: "https://www.google.com",
    icons: ["reactjs.png", "nodejs.png", "sql.png", "expressjs.png", "reactquery.png"]
  },
];
export { cardDetails, navItems, cardData, experienceData, projects };
