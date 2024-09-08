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
    title: "See my work @ WordPress Web Developer - Moms Do Digital (MDD)",
    description:
      "At Moms Do Digital, I worked as a WordPress Web Developer, where I crafted responsive, modern, and user-friendly websites tailored to meet the unique needs of high-level clients. My role involved transforming complex design concepts into functional, interactive, and aesthetically appealing web pages while adhering to best practices in UX/UI. ",
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
  icon:string
}

const experienceData: ExperienceData[] = [
  {
    title: "Web Developer",
    date: "2024 - Present",
    description:
      "As a WordPress web developer at Moms Do Digital Company, I have crafted responsive and straightforward website designs for a diverse array of high-level clients, ensuring that each project meets their specific needs and exceeds expectations with modern, user-friendly interfaces.",
      icon:"/assets/exp/moms.png",
  },
  {
    title: "Chair of the Media and IT Bureau",
    date: "2024 - Present",
    description:
    "As Chair of the Media and IT Bureau in CSDS, I created multimedia items and led teams to achieve the society's goals, fostering collaboration and innovation.",
    icon:"/assets/exp/csds.png",
  },
  {
    title: "Freelancer",
    date: "2022 - Present",
    description:
      "As a freelancer, I've developed expertise in MS Access, MySQL, MS Word, WordPress, Tableau, .NET framework development, and JavaFX. I also specialize in dynamic web development using React.js, Next.js, Node.js, Express.js, and MongoDB/MySQL databases, delivering tailored solutions to meet diverse client needs efficiently.",
      icon:"/assets/exp/freelancelogo.png",
  },
  {
    title: "Junior Treasurer",
    date: "2024 - Present",
    description:
      "As Junior Treasurer of the Department of Information Technology, I have led numerous web development projects focused on enhancing societal value and driving positive change through innovative digital solutions.",
      icon:"/assets/exp/usj.png",
  },
];

const projects = [
  {
    title: "PhotoGenic Application",
    description: "It serves as a platform for both finding job opportunities and sharing job listings among users.",
    img: "/projects/1.png",
    link: "https://www.google.com",
    icons: ["reactjs.png", "nodejs.png", "expressjs.png", "sql.png", "postman.png","netlify.png"]
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
    icons: ["javascript.png","reactjs.png", "nodejs.png", "expressjs.png", "mongodb.png","scss.png", "materialui.png","netlify.png"]
  },
  {
    title: "A Point of Sales (POS) software",
    description: "A Point of Sales (POS) software built with JavaFX and MySQL for efficient transaction processing.",
    img: "/projects/5.png",
    link: "https://www.google.com",
    icons: ["java.png", "sql.png", "drawio.png","scencebuilder.png"]
  },
  {
    title: "Department of IT Thorana",
    description: "Our team created a Poson Thorana using Next.js, featuring interactive elements, modern design, and smooth performance to celebrate the cultural event.",
    img: "/projects/7.png",
    link: "https://www.google.com",
    icons: ["reactjs.png", "nextjs.png", "vercel.png","acernityui.png"]
  },
  {
    title: "Dhara Website",
    description: "A website for the Dhara Society, built with WordPress and Elementor, to showcase the society's exquisite compositions and events.",
    img: "/projects/8.png",
    link: "https://www.google.com",
    icons: ["wordpress.png", "elementor.png", "figma.png", "css.png", "html.png"]
  },
  {
    title: "EduTrack University Management System",
    description: "Comprehensive university management system that simplifies administrative tasks, enhances communication, and improves student engagement.",
    img: "/projects/9.png",
    link: "https://www.google.com",
    icons: ["reactjs.png", "nextjs.png",  "mongodb.png", "postman.png","vercel.png"]
  },
  {
    title: "UI UX Designs for a Mobile App",
    description: "Designed user-friendly interfaces for a mobile app, ensuring a seamless user experience and intuitive navigation.",
    img: "/projects/10.png",
    link: "https://www.google.com",
    icons: ["figma.png"]
  },
];
export { cardDetails, navItems, cardData, experienceData, projects };
