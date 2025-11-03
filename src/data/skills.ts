import { StaticImageData } from "next/image";
import React from "../../public/tech-image/react.svg";
import TypeScript from "../../public/tech-image/typescript.svg";
import TailwindCSS from "../../public/tech-image/tailwindcss.svg";
import NodeJS from "../../public/tech-image/nodejs.svg";
import ExpressJS from "../../public/tech-image/express.svg";
import MongoDB from "../../public/tech-image/mongodb.svg";
import PostgreSQL from "../../public/tech-image/postgresql.svg";
import MySQL from "../../public/tech-image/mysql.svg";
import NextJS from "../../public/tech-image/nextjs.svg";

export interface TechCardProps {
  title: string
  imageUrl: StaticImageData
  websiteUrl?: string
  description?: string
}

export const skillDescription = "Skilled in developing full-stack web applications using modern technologies like React, Next.js, Node.js, and TypeScript."

export const techStack: TechCardProps[] = [
  { 
    title: "TypeScript",
    imageUrl: TypeScript,
    websiteUrl: "https://www.typescriptlang.org/",
    description: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
  },
  { 
    title: "React",
    imageUrl: React ,
    websiteUrl: "https://react.dev/",
    description: "A JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  },
  { 
    title: "Next.js",
    imageUrl: NextJS,
    websiteUrl: "https://nextjs.org/",
    description: "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations."
  },
  { 
    title: "Node.js",
    imageUrl: NodeJS,
    websiteUrl: "https://nodejs.org/",
    description: "Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts."
  },
  { 
    title: "Express.js",
    imageUrl: ExpressJS,
    websiteUrl: "https://expressjs.com/",
    description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
  },
  { 
    title: "Tailwind CSS",
    imageUrl: TailwindCSS,
    websiteUrl: "https://tailwindcss.com/",
    description: "A utility-first CSS framework for rapidly building custom user interfaces directly in your markup."
  },
  { 
    title: "MongoDB",
    imageUrl: MongoDB,
    websiteUrl: "https://www.mongodb.com/",
    description: "A document-oriented NoSQL database that provides a flexible and scalable data model for storing and retrieving data."
  },
  { 
    title: "PostgreSQL",
    imageUrl: PostgreSQL,
    websiteUrl: "https://www.postgresql.org/",
    description: "A powerful, open source object-relational database management system (DBMS) that provides a wide range of features and capabilities."
  },
  { 
    title: "MySQL",
    imageUrl: MySQL,
    websiteUrl: "https://www.mysql.com/",
    description: "A popular open-source relational database management system (DBMS) that is known for its simplicity and ease of use."
  }
]
