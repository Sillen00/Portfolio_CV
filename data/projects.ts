export type Projects = {
  id: number;
  feautured: boolean;
  title: string;
  text: string;
  builtWith?: string[];
  githubLink?: string;
  hostedLink?: string;
};

// Create and export an array of users
export const projects: Projects[] = [
  {
    id: 1,
    feautured: true,
    title: "Star Bomb Game",
    text: "This is our final project in the JavaScript - Basic Course. The task was to create a game from scratch using everything we have learned during the course with an extra focus on OOP, TypeScript, and the P5 library.",
    builtWith: ["Figma", "OOP-Typescript", "P5.JS", "HTML", "CSS"],
    githubLink: "https://github.com/Sillen00/Star-Bomb-Game",
    hostedLink: "https://star-bomb.netlify.app/",
  },
  {
    id: 2,
    feautured: true,
    title: "Gent´s Hat",
    text: "In this school assignment, we have built a webshop for a fictional hat company. This webshop allows the user to add and edit the number of products in their shopping cart. When the user chooses to check out their placed order, they can fill in their personal information in a validated form. After the purchase is completed, the user receives an order confirmation. On the page, there is also the option to edit, add and remove products in the form of an admin. In this assignment, we have used the Material UI design system to import and style components.",
    builtWith: ["ReactJS", "Typescript", "Material-UI", "HTML", "CSS"],
    githubLink: "https://github.com/Sillen00/React-Webshop-Gents-Hat?tab=readme-ov-file",
    hostedLink: "https://gentshats.netlify.app/",
  },
  {
    id: 3,
    feautured: true,
    title: "So-fun Project",
    text: "Where Fun and Sofas Unite! This is a fully developed webshop assignment. This user-friendly platform allows users to easily register, log in, and place orders. Notably, our webshop includes an admin interface with enhanced accessibility, granting administrators the ability to create, modify, and remove products as needed. Additionally, our website features a real-time stock counter, keeping customers informed about the availability of our products for sale.",
    builtWith: ["Figma", "ReactJS", "Typescript", "ExpressJS", "Mongoose", "MongoDB", "HTML", "CSS"],
    githubLink: "https://github.com/Sillen00/FEST-Webbshop-SOFUN",
    hostedLink: "https://example.com",
  },







  
  {
    id: 4,
    feautured: true,
    title: "So-fun Project",
    text: "Where Fun and Sofas Unite! This is a fully developed webshop assignment. This user-friendly platform allows users to easily register, log in, and place orders. Notably, our webshop includes an admin interface with enhanced accessibility, granting administrators the ability to create, modify, and remove products as needed. Additionally, our website features a real-time stock counter, keeping customers informed about the availability of our products for sale.",
    builtWith: ["Figma", "ReactJS", "Typescript", "ExpressJS", "Mongoose", "MongoDB", "HTML", "CSS"],
    githubLink: "https://github.com/Sillen00/FEST-Webbshop-SOFUN",
    hostedLink: "https://example.com",
  },
  // Add more users as needed
];
