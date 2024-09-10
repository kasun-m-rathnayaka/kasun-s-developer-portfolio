import { link } from "fs";
import { title } from "process";

const navItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Approach",
    link: "#approach",
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
    title: "See my work @ Web Developer - Moms Do Digital (MDD)",
    description:
      "At Moms Do Digital, I worked as a WordPress Web Developer, where I crafted responsive, modern, and user-friendly websites tailored to meet the unique needs of high-level clients. My role involved transforming complex design concepts into functional, interactive, and aesthetically appealing web pages while adhering to best practices in UX/UI. ",
    img: "/projects/mine.png",
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
  icon: string;
}

const experienceData: ExperienceData[] = [
  {
    title: "Web Developer",
    date: "2024 - Present",
    description:
      "As a WordPress web developer at Moms Do Digital Company, I have crafted responsive and straightforward website designs for a diverse array of high-level clients, ensuring that each project meets their specific needs and exceeds expectations with modern, user-friendly interfaces.",
    icon: "/assets/exp/moms.png",
  },
  {
    title: "Chair of the Media and IT Bureau",
    date: "2024 - Present",
    description:
      "As Chair of the Media and IT Bureau in CSDS, I created multimedia items and led teams to achieve the society's goals, fostering collaboration and innovation.",
    icon: "/assets/exp/csds.png",
  },
  {
    title: "Freelancer",
    date: "2022 - Present",
    description:
      "As a freelancer, I've developed expertise in MS Access, MySQL, MS Word, WordPress, Tableau, .NET framework development, and JavaFX. I also specialize in dynamic web development using React.js, Next.js, Node.js, Express.js, and MongoDB/MySQL databases, delivering tailored solutions to meet diverse client needs efficiently.",
    icon: "/assets/exp/freelancelogo.png",
  },
  {
    title: "Junior Treasurer",
    date: "2024 - Present",
    description:
      "As Junior Treasurer of the Department of Information Technology, I have led numerous web development projects focused on enhancing societal value and driving positive change through innovative digital solutions.",
    icon: "/assets/exp/usj.png",
  },
];

const projects = [
  {
    id: "1",
    title: "PhotoGenic Application",
    description:
      "It serves as a platform for both finding job opportunities and sharing job listings among users.",
    img: "/projects/1.png",
    link: "/1",
    icons: [
      "reactjs.png",
      "nodejs.png",
      "expressjs.png",
      "sql.png",
      "postman.png",
      "netlify.png",
    ],
  },
  {
    id: "2",
    title: "Alahaa.com e-commerce website",
    description:
      "Crafted with care using Woo-commerce. Seamless shopping, secure transactions, and exceptional customer service.",
    img: "/projects/2.png",
    link: "/2",
    icons: [
      "wordpress.png",
      "elementor.png",
      "woocommerce.png",
      "payhere.png",
      "paypal.png",
    ],
  },
  {
    id: "3",
    title: "Inventory Management System",
    description:
      "Streamline inventory management for a cooking equipment shop, ensuring efficient tracking, updating, and monitoring of stock levels.",
    img: "/projects/3.png",
    link: "/3",
    icons: [
      "javascript.png",
      "reactjs.png",
      "nodejs.png",
      "expressjs.png",
      "mongodb.png",
      "scss.png",
      "materialui.png",
      "netlify.png",
    ],
  },
  {
    id: "4",
    title: "A Point of Sales (POS) software",
    description:
      "A Point of Sales (POS) software built with JavaFX and MySQL for efficient transaction processing.",
    img: "/projects/5.png",
    link: "/4",
    icons: ["java.png", "sql.png", "drawio.png", "scencebuilder.png"],
  },
  {
    id: "5",
    title: "Department of IT Thorana",
    description:
      "Our team created a Poson Thorana using Next.js, featuring interactive elements, modern design, and smooth performance to celebrate the cultural event.",
    img: "/projects/7.png",
    link: "/5",
    icons: ["reactjs.png", "nextjs.png", "vercel.png", "acernityui.png"],
  },
  {
    id: "6",
    title: "Dhara Website",
    description:
      "A website for the Dhara Society, built with WordPress and Elementor, to showcase the society's exquisite compositions and events.",
    img: "/projects/8.png",
    link: "/6",
    icons: [
      "wordpress.png",
      "elementor.png",
      "figma.png",
      "css.png",
      "html.png",
    ],
  },
  {
    id: "7",
    title: "EduTrack University Management System",
    description:
      "Comprehensive university management system that simplifies administrative tasks, enhances communication, and improves student engagement.",
    img: "/projects/9.png",
    link: "/7",
    icons: [
      "reactjs.png",
      "nextjs.png",
      "mongodb.png",
      "postman.png",
      "vercel.png",
    ],
  },
  {
    id: "8",
    title: "UI UX Designs for a Mobile App",
    description:
      "Designed user-friendly interfaces for a mobile app, ensuring a seamless user experience and intuitive navigation.",
    img: "/projects/10.png",
    link: "/8",
    icons: ["figma.png"],
  },
];

const techstack = [
  {
    id: 1,
    img: "reactjs.png",
    title: "React js",
  },
  {
    id: 2,
    img: "nextjs.png",
    title: "Next js",
  },
  {
    id: 3,
    img: "nodejs.png",
    title: "Node js",
  },
  {
    id: 4,
    img: "expressjs.png",
    title: "Express js",
  },
  {
    id: 5,
    img: "mongodb.png",
    title: "MongoDB",
  },
  {
    id: 6,
    img: "sql.png",
    title: "MySQL",
  },
  {
    id: 7,
    img: "scss.png",
    title: "SCSS",
  },
  {
    id: 8,
    img: "materialui.png",
    title: "Material UI",
  },
  {
    id: 9,
    img: "wordpress.png",
    title: "WordPress",
  },
  {
    id: 10,
    img: "elementor.png",
    title: "Elementor",
  },
  {
    id: 11,
    img: "woocommerce.png",
    title: "WooCommerce",
  },
  {
    id: 12,
    img: "figma.png",
    title: "Figma",
  },
  {
    id: 13,
    img: "css.png",
    title: "CSS",
  },
  {
    id: 14,
    img: "html.png",
    title: "HTML",
  },
  {
    id: 15,
    img: "java.png",
    title: "Java",
  },
  {
    id: 16,
    img: "sql.png",
    title: "SQL",
  },
  {
    id: 17,
    img: "drawio.png",
    title: "Draw.io",
  },
  {
    id: 18,
    img: "scencebuilder.png",
    title: "Scene Builder",
  },
  {
    id: 19,
    img: "vercel.png",
    title: "Vercel",
  },
  {
    id: 20,
    img: "acernityui.png",
    title: "Acentury UI",
  },
  {
    id: 21,
    img: "netlify.png",
    title: "Netlify",
  },
  {
    id: 22,
    img: "postman.png",
    title: "Postman",
  },
  {
    id: 23,
    img: "paypal.png",
    title: "PayPal",
  },
  {
    id: 24,
    img: "java.png",
    title: "JavaFX",
  },
  {
    id: 25,
    img: "figma.png",
    title: "Figma",
  },
  {
    id: 26,
    img: "acernityui.png",
    title: "Acentury UI",
  },
  {
    id: 27,
    img: "vercel.png",
    title: "Vercel",
  },
  {
    id: 28,
    img: "git.png",
    title: "Git",
  },
  {
    id: 29,
    img: "payhere.png",
    title: "PayHere",
  },
  {
    id: 30,
    img: "redux.png",
    title: "Redux",
  },
  {
    id: 31,
    img: "tailwind.png",
    title: "Tailwind.png",
  },
  {
    id: 33,
    img: "typescript.png",
    title: "typescript",
  },
];

const approaches = [
  "This phase involves defining project goals, gathering requirements from stakeholders, and conducting a feasibility study to ensure alignment on objectives, scope, timeline, and resources before development begins.",

  "The development phase includes designing system architecture, coding core functionality, and integrating software components to ensure smooth operation and cohesion, transforming plans into a working software solution.",

  "This step involves testing for bugs, deploying the software to production, and providing ongoing maintenance, ensuring reliability and continuous improvements based on user feedback and operational needs.",
];

const socialmedia = [
  {
    id: 1,
    img: "linkedin.png",
    link: "https://www.linkedin.com/in/rathnayaka/",
  },
  {
    id: 2,
    img: "github.webp",
    link: "https://github.com/kasun-m-rathnayaka",
  },
];

type Project = {
  id: string;
  title: string;
  description: string;
  images: string[];
  keyFeatures: string[];
  technologies: string[];
  challenges: string;
  solutions: string;
  nextSteps: string;
  liveUrl?: string;
  githubUrl?: string;
};

const projectData: Project[] = [
  {
    id: "1",
    title: "PhotoGenic Application",
    description:
      "Photogenic is more than just a platform; it's a community designed to create job opportunities for talented photographers and videographers. Our goal is to connect creative minds with those who appreciate their work, providing a space to showcase skilled art and foster collaboration.\nThis project was a collaborative effort where we leveraged various tools to ensure seamless communication and efficient development. It was a rewarding experience working together as a team to bring this vision to life.Proud to have contributed to this project, combining creativity and technology with a collaborative approach to support the artistic community. Can't wait to see the incredible work that will be shared on Photogenic!",
    images: [
      "photogenic.jpeg",
      "photogenic2.jpeg",
      "photogenic3.jpeg",
      "photogenic4.jpeg",
    ],
    keyFeatures: [
      "📸 User account creation and customization",
      "🔐 Secure login functionality",
      "🖼️ Post and share stunning pictures",
      "💬 Engage with the community by commenting on recent posts",
      "📷 Follow your favorite photographers and videographers",
    ],
    technologies: ["React", "Node.js", "Express", "MySql", "Sass", "Postman"],
    challenges: "",
    solutions: "",
    nextSteps: "",
    liveUrl: "https://genic.netlify.app/login",
    githubUrl: "https://github.com/kasun-m-rathnayaka/social-media-app",
  },
  {
    id: "2",
    title: "Alahaa.com e-commerce website",
    description:
      "This project involved setting up and configuring the main WooCommerce features to create a seamless and efficient e-commerce experience. From product listings to payment gateways, the site is designed to provide both the client and customers with a smooth and user-friendly platform.",
    images: ["2.png"],
    keyFeatures: [
      "📸 Product Listings & Categories",
      "🔐 Shopping Cart & Checkout Process",
      "🖼️ Payment Gateway Integration",
      "💬 Shipping & Tax Setup",
      "📷 Responsive Design for a seamless experience across all devices",
      "🔐 User account creation and customization",
    ],
    technologies: [
      "Woocommerce",
      "Wordpress",
      "Elementor",
      "Payhere",
      "Paypal",
    ],
    challenges: "",
    solutions: "",
    nextSteps: "",
  },
  {
    id: "3",
    title: "Inventory Management Web Application",
    description:
      "This project involved creating an inventory management system for a cooking equipment shop to streamline the tracking, updating, and monitoring of stock levels. The system was designed to provide real-time data on inventory levels, sales, and product details, ensuring efficient management of stock and timely reordering of items.",
    images: ["ssd1.png", "ssd2.png", "ssd3.png"],
    keyFeatures: [
      "📸 Real-time Inventory Tracking",
      "🔐 Product Details & Sales Reports",
      "🖼️ Low Inventory Notifications",
      "💬 Multiple User Roles & Permissions",
      "📷 Responsive Design for a seamless experience across all devices",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MySql",
      "Sass",
      "Postman",
      "Material Ui",
    ],
    challenges: "",
    solutions: "",
    nextSteps: "",
    liveUrl: "https://ssd-cooking-equipment-pvt-ltd.netlify.app/",
    githubUrl:
      "https://github.com/kasun-m-rathnayaka/SSD-Cooking-equipment-shop",
  },
  {
    id: "4",
    title: "JavaFX Point of Sales (POS) System",
    description:
      "The JavaFX Point of Sales (POS) system is a robust, efficient, and user-friendly solution designed to streamline and automate sales processes for small to medium-sized businesses. Built using the JavaFX framework, this system delivers an intuitive interface combined with powerful backend features, offering seamless transaction handling, inventory management, and real-time sales analytics.",
    images: ["5.png"],
    keyFeatures: [
      "📸 User-Friendly Interface: The JavaFX-based interface is easy to navigate, providing a clean and responsive design that minimizes training time for employees.",
      "📦 Inventory Management: Track stock levels in real-time, manage product details, and receive notifications for low inventory, ensuring that your shelves are always stocked.",
      "💰 Sales Tracking: Keep a detailed record of all sales transactions, including receipts, refunds, and payment methods, enabling a clear view of your daily revenue.",
      "💳 Multiple Payment Options: Supports a variety of payment methods, including cash, credit/debit cards, and mobile payments, ensuring flexibility for customers.",
    ],
    technologies: ["Javafx", "Mysql", "Scene Builder"],
    challenges: "",
    solutions: "",
    nextSteps: "",
    githubUrl:
      "https://github.com/kasun-m-rathnayaka/Java-FX-Transaction-Processing-System",
  },
  {
    id: "5",
    title: "Department of IT Thorana",
    description:
      "Our team created a Poson Thorana using Next.js, featuring interactive elements, modern design, and smooth performance to celebrate the cultural event.",
    images: ["Thorana.png"],
    keyFeatures: [
      "📸 Interactive Digital Display - Showcases a virtual Poson Thorana with engaging animations and lights.",
      "🖼️ Mobile Responsive Design - Optimized for viewing on both mobile and desktop devices.",
      "💬 Historical and Cultural Content - Provides information on the significance of Poson and related cultural stories.",
      "🔐 Tailwind CSS & Next.js Integration - Ensures fast loading and smooth user experience with modern technologies.",
    ],
    technologies: ["Next js", "Tailwind Css", "Vercel", "Google Anayatics API"],
    challenges: "",
    solutions: "",
    nextSteps: "",
    liveUrl: "https://department-of-it-torana.vercel.app/",
    githubUrl: "https://github.com/kasun-m-rathnayaka/Department-of-IT-Torana",
  },
  {
    id: "6",
    title: "Dhara website",
    description:
      "🎵 A website for the Dhara Society, built with WordPress and Elementor, to showcase the society's exquisite compositions and events.",
    images: ["5.png"],
    keyFeatures: [
      "📸 Event Showcase: Highlighting upcoming and past events with detailed descriptions.",
      "🎵 Composition Gallery: Displaying the society's exquisite musical or artistic compositions.",
      "📱 Responsive Design: Ensuring the site works well on all devices.",
      "🔧 Customizable Layout: Built with Elementor for easy updates and content management.",
    ],
    challenges: "",
    solutions: "",
    nextSteps: "",
    technologies: ["Wordpress", "Elementor"],
    liveUrl: "https://dhaara.flairclub.lk/",
  },
  {
    id: "7",
    title: "EduTrack University Management System",
    description:
      "Comprehensive university management system that simplifies administrative tasks, enhances communication, and improves student engagement.",
    images: ["5.png"],
    keyFeatures: [
      "Student Information Management: Centralized system to manage student records, grades, and profiles.",
      "Course and Curriculum Management: Organizing course offerings, schedules, and prerequisites.",
      "Faculty Management: Managing faculty profiles, workloads, and evaluations.",
      "Examination and Grading System: Facilitating exams, grade submissions, and result announcements.",
    ],
    challenges: "",
    solutions: "",
    nextSteps: "",
    technologies: ["Wordpress", "Elementor"],
    liveUrl: "https://dhaara.flairclub.lk/",
  },
];

export {
  cardDetails,
  navItems,
  cardData,
  experienceData,
  projects,
  techstack,
  approaches,
  socialmedia,
  projectData,
};
