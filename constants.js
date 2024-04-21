import { AiFillFacebook, AiFillGithub, AiFillHome, AiFillLinkedin } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaCertificate, FaLaptopCode, FaTelegram } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

import ksl from '@/public/images/ksl.jpg';
import kslNew from '@/public/images/ksl-new.jpg';
import blogBackground from '@/public/images/blog-background.jpg';


//Project Images
import coc from '@/public/images/coc.png';
import msi from '@/public/images/msi.png';
import weatherApp from '@/public/images/web3.jpg';
import shoppingApp from '@/public/images/web4.jpg';
import pmtDb from '@/public/images/web6.png';
import pmtStore from '@/public/images/web5.png';
import blog from '@/public/images/web7.png';
import tastysoft from '@/public/images/web8.png';
import schoolFlow from '@/public/images/school_flow.png';
import chatApp from '@/public/images/chat_app.png';

//Certificate Images
import fccFrontend from '@/public/images/certificate1.png';
import fccBackend from '@/public/images/fcc-backend-certificate.png';
import udemyReact from '@/public/images/udemy_react_certificate.jpg';

export const IMAGES = {
  ksl,
  kslNew,
  notFound : '/images/404.gif',
}

export const NAV_BUTTONS = [
  {
    id: 'home',
    title: 'HOME',
    icon: <AiFillHome />,
  },
  {
    id: 'services',
    title: 'SERVICES',
    icon: <FaLaptopCode />,
  },
  {
    id: 'projects',
    title: 'PROJECTS',
    icon: <BsPersonWorkspace />,
  },
  {
    id: 'certificates',
    title: 'CERTIFICATES',
    icon: <FaCertificate />,
  },
  {
    id: 'contact',
    title: 'CONTACT',
    icon: <RiContactsFill />,
  },
]

export const ABOUT_ME = {
  name: "Kyaw Swar Lynn",
  role: "Software Developer!",
  description: `As a MERN Stack Developer, I thrive at the intersection of creativity and functionality, crafting robust web applications that delight users and exceed expectations. Currently, I am proud to be a part of the innovative team at TastySoft, a leading software company based in Myanmar, where I've been contributing since November 2023.`,
  github: "https://github.com/kyawswarlynn14",
  linkedIn: "https://www.linkedin.com/in/kyaw-swar-lynn-78ab79260/",
  facebook: "https://web.facebook.com/kyawswarlynn07",
  telegram: "https://t.me/kyawswarlynn14",
}

export const MAIN_BUTTONS = [
  {
    id: '001',
    link: 'https://github.com/kyawswarlynn14',
    icon: <AiFillGithub cursor="pointer" />,
  },
  {
    id: '002',
    link: 'https://web.facebook.com/kyawswarlynn07',
    icon: <AiFillFacebook cursor="pointer" />,
  },
  {
    id: '003',
    link: 'https://www.linkedin.com/in/kyaw-swar-lynn-78ab79260/',
    icon: <AiFillLinkedin cursor="pointer" />,
  },
  {
    id: '004',
    link: 'https://t.me/kyawswarlynn14',
    icon: <FaTelegram cursor="pointer" />,
  },
]

export const TECHNOLOGIES = [
    {
      name: "JavaScript",
      icon: "/tech/javascript.png",
    },
    {
      name: "TypeScript",
      icon: "/tech/typescript.png",
    },
    {
      name: "React JS",
      icon: "/tech/reactjs.png",
    },
    {
      name: "Redux Toolkit",
      icon: "/tech/redux.png",
    },
    {
      name: "Angular",
      icon: "/tech/angular.png"
    },
    {
      name: "Flutter",
      icon: "/tech/flutter.png"
    },
    {
      name: "Python",
      icon: "/tech/python.png"
    },
    {
      name: "Tailwind CSS",
      icon: "/tech/tailwind.png",
    },
    {
      name: "Node JS",
      icon: "/tech/nodejs.png",
    },
    {
      name: "MongoDB",
      icon: "/tech/mongodb.png",
    },
    {
      name: "Postgresql",
      icon: "/tech/postgre.png",
    },
    {
      name: "git",
      icon: "/tech/git.png",
    },
    {
      name: "Postman",
      icon: "/tech/postman.png",
    },
];

export const SERVICEINFO = {
  title: "Services I offer",
  description: "I specialize in creating dynamic and responsive websites using the latest web technologies such as React.js, Next.js, Angular, and Node.js. With my expertise in JavaScript, HTML, and CSS, I craft engaging and user-friendly interfaces. I offer from a wide range of services, including brand design, programming and teaching.",
}

export const SERVICES = [
    {
      img_url: "/images/web-dev.jpg",
      title: "Web Development",
      content:
        "As a web developer, I specialize in creating dynamic and interactive websites that are tailored to meet your unique business needs. I utilize the latest web technologies and frameworks to build responsive, user-friendly websites that engage your audience. From the initial concept and design to the implementation and deployment, I ensure a seamless development process. Whether you need an e-commerce platform, a content management system, or a custom web application, I can deliver a solution that not only looks great but also functions flawlessly across different browsers and devices.",
    },
    {
      img_url: "/images/app-development.png",
      title: "Mobile App Development",
      content:
        "In today's mobile-driven world, having a strong mobile presence is essential for any business. As a mobile app developer, I specialize in creating cutting-edge applications that run seamlessly on iOS and Android platforms. From concept to launch, I work closely with you to understand your app requirements and develop a customized solution that aligns with your business goals. With expertise in both native and hybrid app development, I can create feature-rich, intuitive mobile applications that deliver an exceptional user experience. Whether you need a consumer-facing app or an enterprise solution, I can turn your ideas into reality and help you reach your target audience effectively.",
    },
    {
      img_url: "/images/web-design.jpg",
      title: "Web Design",
      content:
        "With a keen eye for aesthetics and a deep understanding of user experience, I offer professional web design services that captivate visitors and leave a lasting impression. I believe that a well-designed website is a powerful tool for attracting and retaining customers. Through a combination of creativity and technical expertise, I create visually stunning layouts, intuitive navigation, and compelling graphics that reflect your brand identity. By focusing on usability and accessibility, I ensure that your website is engaging, easy to navigate, and optimized for conversions.",
    },
];

export const PROJECTINFO = {
  title: "Projects",
  description: "I have successfully built various projects using React Js, Next Js, Node Js, Express Js and Flutter. Proficient in React.js and Next.js, I also possess strong backend skills in Node.js and Express.js. I specialize in database management using Sequelize, with expertise in MySQL and PostgreSQL. My portfolio showcases dynamic, user-friendly web interfaces and fast, engaging experiences, seamlessly integrating frontend and backend technologies.",
}

export const PROJECTS = [
  {
    id: "001",
    title: "Class On Cloud",
    tag: "Next Js, Tailwind CSS, Node Js",
    img_url: coc,
    code_link: "https://github.com/kyawswarlynn14",
    demo_link: "https://coc-next.netlify.app/",
    description: `"Class On Cloud" revolutionizes the online learning experience by providing a dynamic platform where teachers and students can connect, collaborate, and engage in a virtual classroom environment. With a sleek and modern interface crafted using Next.js and Tailwind CSS, this platform offers a seamless learning journey for users of all backgrounds and skill levels.`,
    role: `As a frontend developer on the "Class On Cloud" project, my responsibilities included translating design mockups into functional user interfaces, implementing responsive layouts, and optimizing the performance of the application. Leveraging my expertise in Next.js and Tailwind CSS, I played a pivotal role in designing and developing the frontend components, ensuring an intuitive and visually appealing user experience.`,

  },
  {
    id: "002",
    title: "Mandalay Software Institute",
    tag: "React Js, Node Js, Mui, Firebase, Postgres, Tailwind CSS",
    img_url: msi,
    code_link: "https://github.com/kyawswarlynn14",
    demo_link: "https://mandalaysoftwareinstitute.com",
    description: `The Mandalay Software Institute website is a comprehensive platform designed to provide a seamless experience for individuals seeking training in software development. From browsing courses to purchasing and leaving reviews, the website offers a range of functionalities to cater to users' needs. Developed using React.js, Node.js, Material-UI, Firebase, PostgreSQL, and Tailwind CSS, this application delivers a modern and efficient solution for both students and administrators.`,
    role: `As the sole full-stack developer on the Mandalay Software Institute project, I conceptualized, designed, and implemented the entire application from start to finish. My responsibilities encompassed frontend and backend development, database design, API integration, and deployment. Leveraging my expertise in React.js, Node.js, Material-UI, Firebase, PostgreSQL, and Tailwind CSS, I crafted a user-friendly interface, implemented robust features, and ensured seamless functionality across all aspects of the platform. Additionally, I developed an intuitive dashboard for administrators to manage courses, user accounts, and reviews, providing comprehensive control and oversight of the platform's operations.`,
  },
  {
    id: "003",
    title: "Weather App",
    tag: "Flutter",
    img_url: weatherApp,
    code_link: "https://github.com/kyawswarlynn14/weather_app",
    demo_link: "https://github.com/kyawswarlynn14/weather_app",
    description: `The Weather App is a simple yet effective application built to provide users with real-time weather information. Utilizing Flutter, this app offers a seamless and intuitive user experience while fetching data from online weather APIs. With a minimalist design and easy navigation, users can quickly access current weather conditions, forecasts, and other relevant information based on their location or specified location input.`,
    role: `As the developer of the Weather App, my role involved conceptualizing, designing, and implementing the application using Flutter. I was responsible for coding the frontend interface, integrating APIs for weather data retrieval, and ensuring the app's responsiveness and performance across various devices. By leveraging Flutter's capabilities, I crafted a visually appealing and user-friendly experience that provides timely and accurate weather updates to users.`,
  },
  {
    id: "004",
    title: "Shopping App",
    tag: "Flutter",
    img_url: shoppingApp,
    code_link: "https://github.com/kyawswarlynn14/shop_app",
    demo_link: "https://github.com/kyawswarlynn14/shop_app",
    description: `The Shopping App is a CRUD (Create, Read, Update, Delete) application developed using Flutter. Designed as a learning project to enhance Flutter skills, this app allows users to browse, add, update, and remove items from their shopping list. With a clean and intuitive user interface, the Shopping App provides a straightforward shopping experience, enabling users to manage their shopping needs efficiently.`,
    role: `As the developer of the Shopping App, my role involved the complete design and implementation of the application using Flutter. I was responsible for coding the frontend interface, implementing CRUD functionalities, and ensuring smooth user interactions. Through this project, I aimed to deepen my understanding of Flutter development principles and enhance my proficiency in building mobile applications.`,
  },
  {
    id: "005",
    title: "Palaung Min Thar Admin Dashboard",
    tag: "Next Js, Prisma, Tailwind CSS",
    img_url: pmtDb,
    code_link: "https://github.com/kyawswarlynn14/ecommerce-admin",
    demo_link: "https://palaungminthar.vercel.app",
    description: `The Palaung Min Thar Admin Dashboard is a comprehensive web application designed for managing an e-commerce platform. Built with Next.js, Prisma, and Tailwind CSS, this dashboard offers a user-friendly interface for administrators to oversee various aspects of the e-commerce store. From managing products and orders to analyzing sales data, the dashboard provides essential tools to streamline operations and enhance decision-making.`,
    role: `As a full-stack developer, I led the development of the Palaung Min Thar Admin Dashboard, overseeing both frontend and backend implementation. My responsibilities included designing the frontend interface using Next.js and Tailwind CSS, developing backend functionalities with Prisma, and integrating APIs for data retrieval and manipulation. Additionally, I implemented user authentication and authorization mechanisms to ensure secure access to the dashboard's features.`,
  },
  {
    id: "006",
    title: "Palaung Min Thar Store",
    tag: "Next Js, Prisma, Tailwind CSS",
    img_url: pmtStore,
    code_link: "https://github.com/kyawswarlynn14/ecommerce-store",
    demo_link: "https://palaungminthar.vercel.app",
    description: `The Palaung Min Thar Store is an e-commerce frontend application built with Next.js and Tailwind CSS. Utilizing APIs from the e-commerce dashboard, this web app offers a seamless shopping experience for customers, allowing them to browse products, add items to cart, and complete purchases with ease. With a focus on performance and user experience, the Palaung Min Thar Store delivers a visually appealing and responsive interface for users to explore and shop.`,
    role: `As the developer of the Palaung Min Thar Store, my role involved crafting the frontend interface using Next.js and Tailwind CSS. I integrated APIs from the e-commerce dashboard to fetch product data, manage cart functionalities, and handle user authentication. By leveraging Next.js's server-side rendering capabilities and Tailwind CSS's utility-first approach, I created a fast, efficient, and visually appealing e-commerce store that meets the needs of modern online shoppers.`,
  },
  {
    id: "007",
    title: "Blog Web Application",
    tag: "NextJs, GraphQL, Tailwind CSS",
    img_url: blog,
    code_link: "https://github.com/kyawswarlynn14/ksl-blog",
    demo_link: "https://kyawswarlynn-blog.vercel.app",
    description: `The Blog Web Application is a versatile platform designed for users to create, share, and engage with blog posts. Developed using Next.js, GraphQL, and Tailwind CSS, this application offers a seamless and intuitive blogging experience. With features such as post creation, commenting, and user authentication, the Blog Web Application provides a comprehensive solution for individuals and organizations to establish an online presence and connect with their audience.`,
    role: `As the sole full-stack developer, I spearheaded the development of the Blog Web Application from concept to deployment. My responsibilities encompassed frontend and backend development, database design, API integration, and deployment. Leveraging Next.js for server-side rendering, GraphQL for efficient data querying, and Tailwind CSS for responsive styling, I crafted a modern and feature-rich blogging platform that meets the needs of both content creators and readers.`,
  },
  {
    id: "008",
    title: "TastySoft",
    tag: "Next Js, Node Js, Postgresql, Tailwind CSS, Firebase",
    img_url: tastysoft,
    code_link: "https://github.com/kyawswarlynn14",
    demo_link: "https://tastysoft.co",
    description: `TastySoft is a comprehensive web application developed for a software company, showcasing its services, portfolios, and team members. Built with Next.js, Node.js, PostgreSQL, Tailwind CSS, and Firebase, this application offers a visually appealing and user-friendly interface for visitors to explore the company's offerings and learn more about its team and projects. Additionally, TastySoft includes an admin dashboard for easy management of content and team member profiles.`,
    role: `As a full-stack developer, I played a central role in the development of TastySoft, responsible for both frontend and backend implementation. My tasks included designing and building the frontend interface using Next.js and Tailwind CSS, developing backend functionalities with Node.js and PostgreSQL, and integrating Firebase for authentication and data storage. Additionally, I implemented the admin dashboard to facilitate easy content management and updates for the company's administrators.`,
  },
  {
    id: "009",
    title: "SchoolFlow",
    tag: "React Js, Redux, MUI, Node Js, MongoDb",
    img_url: schoolFlow,
    code_link: "https://github.com/kyawswarlynn14",
    demo_link: "https://tastysoft.co",
    description: `SchoolFlow is a comprehensive web application designed for school management, providing tools for managing teachers, students, payments, expenses, and incomes. Built with React.js, Redux, Material-UI, Node.js, and MongoDB, this application offers a robust and intuitive interface for administrators to streamline various administrative tasks and generate insightful analyses using tables, charts, or graphs. From student enrollment to financial tracking, SchoolFlow facilitates efficient management of school operations.`,
    role: `As the sole developer, I led the development of SchoolFlow, handling all aspects of the project from conception to implementation. My responsibilities included designing and implementing the frontend using React.js, Redux, and Material-UI, developing backend functionalities with Node.js and MongoDB, and integrating features for student and teacher management, payment tracking, and financial analysis. Through meticulous planning and execution, I created a powerful and user-friendly school management solution that meets the diverse needs of educational institutions.`,
  },
  {
    id: "010",
    title: "Chat App without Socket",
    tag: "React Js, Redux",
    img_url: chatApp,
    code_link: "https://github.com/kyawswarlynn14/react_test",
    demo_link: "https://mai-nano-chat.netlify.app",
    description: `The Chat App without Socket is a lightweight web application that enables users to engage in real-time chat conversations across different browser tabs. Developed using React.js and Redux, this chat app offers a seamless communication experience without relying on web sockets. Instead, it leverages local storage and the useEffect hook as a listener for data changes, allowing messages to be delivered and received instantly without the need for page refreshing. With its simple and efficient design, the Chat App without Socket provides a convenient solution for users to communicate within the same browser session.`,
    role: `As the developer of the Chat App without Socket, I conceptualized and implemented the entire application, utilizing React.js and Redux to create the frontend interface and manage state. My role involved designing the chat functionality, implementing local storage for message storage, and utilizing the useEffect hook to listen for data changes and update the chat interface in real-time. By leveraging these techniques, I developed a lightweight and efficient chat app that meets the needs of users seeking real-time communication within the same browser environment.`,
  },
]

export const CERTIFICATES = [
  {
    title: "Frontend Development Libraries",
    content: "I have earned the Front End Development Libraries Certificate from freeCodeCamp. You can verify my certification below. This certification demonstrates my dedication to mastering front-end development skills.",
    demo_link: "https://www.freecodecamp.org/certification/kyawswarlynn14/front-end-development-libraries",
    img_url: fccFrontend,
  },
  {
    title: "Back End Development and APIs",
    content: "I have earned the Back End Development and APIs Certificate from freeCodeCamp. You can verify my certification below. This certification demonstrates my dedication to mastering backend-end development skills.",
    demo_link: "https://www.freecodecamp.org/certification/kyawswarlynn14/back-end-development-and-apis",
    img_url: fccBackend,
  },
  {
    title: "React - The Complete Guide 2024",
    content: "I've completed the Complete React Course on Udemy. Throughout the course, I delved into advanced concepts and best practices, honing my skills in component-based architecture, state management with Redux, and much more. I'm eager to apply my newfound knowledge to create even more innovative and user-friendly web applications.",
    demo_link: "",
    img_url: udemyReact,
  },
]

export const BLOG ={
  title: "Blog",
  subTitle: "Embracing Creativity",
  description: "Welcome to my portfolio blog page, where I'll be sharing my creative journey as a software developer. Here, I'll delve into the diverse world of visual expression, exploring various mediums, techniques, and inspirations that have shaped my work over the years.",
  img_url: blogBackground,
  link: "https://kyawswarlynn-blog.vercel.app/",
}

export const FOOTER_CONTACT = {
    phone: "+959266654144",
    email: "kyawswarlynn14@gmail.com",
    telegram: "kyawswarlynn14",
}

export const FOOTER_NAVIGATIONS = [
  {
    id: 'home',
    title: 'Home'
  },
  {
    id: 'services',
    title: 'Services'
  },
  {
    id: 'projects',
    title: 'Projects'
  },
  {
    id: 'contact',
    title: 'Contact'
  },
]