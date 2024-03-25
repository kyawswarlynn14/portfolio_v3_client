import { AiFillFacebook, AiFillGithub, AiFillHome, AiFillLinkedin } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaCertificate, FaLaptopCode, FaTelegram } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

export const IMAGES = {
  ksl: "/images/ksl.jpg",
  kslNew: "/images/ksl-new.jpg",
  notFound: '/images/404.gif',
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
  description: `Freelancer providing services for Web Applications and Mobile Applications. Join me down below and let's start working!`,
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
      title: "Class On Cloud",
      content: "Next Js, Tailwind CSS, Node Js",
      img_url: "/images/coc.png",
      code_link: "https://coc-next.netlify.app/",
      demo_link: "https://coc-next.netlify.app/"
    },
    {
      title: "Mandalay Software Institute",
      content: "React Js, Node Js, Mui, Firebase, Postgres, Tailwind CSS",
      img_url: "/images/msi.png",
      code_link: "https://github.com/kyawswarlynn14",
      demo_link: "https://mandalaysoftwareinstitute.com"
    },
    {
      title: "Weather App",
      content: "Flutter",
      img_url: "/images/web3.jpg",
      code_link: "https://github.com/kyawswarlynn14/weather_app",
      demo_link: "https://github.com/kyawswarlynn14/weather_app"
    },
    {
      title: "Shopping App",
      content: "Flutter",
      img_url: "/images/web4.jpg",
      code_link: "https://github.com/kyawswarlynn14/shop_app",
      demo_link: "https://github.com/kyawswarlynn14/shop_app"
    },
    {
      title: "Palaung Min Thar Admin Dashboard",
      content: "Next Js, Prisma, Tailwind CSS",
      img_url: "/images/web6.png",
      code_link: "https://github.com/kyawswarlynn14/ecommerce-admin",
      demo_link: "https://palaungminthar.vercel.app"
    },
    {
      title: "Palaung Min Thar Store",
      content: "Next Js, Prisma, Tailwind CSS",
      img_url: "/images/web5.png",
      code_link: "https://github.com/kyawswarlynn14/ecommerce-store",
      demo_link: "https://palaungminthar.vercel.app"
    },
    {
      title: "Blog Web Application",
      content: "NextJs, GraphQL, Tailwind CSS",
      img_url: "/images/web7.png",
      code_link: "https://github.com/kyawswarlynn14/ksl-blog",
      demo_link: "https://kyawswarlynn-blog.vercel.app"
    },
    {
      title: "TastySoft",
      content: "Next Js, Node Js, Postgresql, Tailwind CSS, Firebase",
      img_url: "/images/web8.png",
      code_link: "https://github.com/kyawswarlynn14",
      demo_link: "https://tastysoft.co"
    },
]

export const CERTIFICATES = [
  {
    title: "Frontend Development Libraries",
    content: "I have earned the Front End Development Libraries Certificate from freeCodeCamp. You can verify my certification below. This certification demonstrates my dedication to mastering front-end development skills.",
    demo_link: "https://www.freecodecamp.org/certification/kyawswarlynn14/front-end-development-libraries",
    img_url: "/images/certificate1.png"
  },
  {
    title: "Back End Development and APIs",
    content: "I have earned the Back End Development and APIs Certificate from freeCodeCamp. You can verify my certification below. This certification demonstrates my dedication to mastering backend-end development skills.",
    demo_link: "https://www.freecodecamp.org/certification/kyawswarlynn14/back-end-development-and-apis",
    img_url: "/images/fcc-backend-certificate.png"
  },
]

export const BLOG ={
  title: "Blog",
  subTitle: "Embracing Creativity",
  description: "Welcome to my portfolio blog page, where I'll be sharing my creative journey as a software developer. Here, I'll delve into the diverse world of visual expression, exploring various mediums, techniques, and inspirations that have shaped my work over the years.",
  img_url: "/images/blog-background.jpg",
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