import React from "../../public/tech-image/react.svg";
import TypeScript from "../../public/tech-image/typescript.svg";
import TaiwindCSS from "../../public/tech-image/tailwindcss.svg";
import NodeJS from "../../public/tech-image/nodejs.svg";
import ExpressJS from "../../public/tech-image/express.svg";
import MongoDB from "../../public/tech-image/mongodb.svg";
import PostgreSQL from "../../public/tech-image/postgresql.svg";
import MySQL from "../../public/tech-image/mysql.svg";
import NextJS from "../../public/tech-image/nextjs.svg";

export interface TechCardProps {
  title: string
  imageUrl: string
  description?: string
}

export const techStack = [
  { 
    title: "TypeScript",
    imageUrl: TypeScript,
    description: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
  },
  { 
    title: "React",
    imageUrl: React ,
    description: "A JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
  },
  { 
    title: "Next.js",
    imageUrl: NextJS,
    description: "A React framework that enables several extra features, including server-side rendering and generating static websites."
  },
  { 
    title: "Node.js",
    imageUrl: NodeJS ,
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine, allowing server-side scripting and building scalable network applications."
  },
  { 
    title: "Express.js",
    imageUrl: ExpressJS ,
    description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
  },
  { 
    title: "Tailwind CSS",
    imageUrl: TaiwindCSS,
    description: "A utility-first CSS framework for rapidly building custom user interfaces directly in your markup."
  },
  { 
    title: "MongoDB",
    imageUrl: MongoDB,
    description: "A document-oriented NoSQL database that provides a flexible and scalable data model for storing and retrieving data."
  },
  { 
    title: "PostgreSQL",
    imageUrl: PostgreSQL,
    description: "A powerful, open source object-relational database management system (DBMS) that provides a wide range of features and capabilities."
  },
  { 
    title: "MySQL",
    imageUrl: MySQL,
    description: "A popular open-source relational database management system (DBMS) that is known for its simplicity and ease of use."
  },
];