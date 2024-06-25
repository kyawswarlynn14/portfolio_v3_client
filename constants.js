import { AiFillHome } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaCertificate, FaLaptopCode } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

import ksl from '@/public/images/ksl.jpg';
import kslNew from '@/public/images/ksl-new.jpg';

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

export const MOTION_DATA = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.5,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  }
}