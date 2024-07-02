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
export { cardDetails, navItems, cardData, experienceData };
