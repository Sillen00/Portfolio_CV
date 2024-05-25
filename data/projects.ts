export type Projects = {
  id: number;
  feautured: boolean;
  title: string;
  text: string;
  builtWith: string[];
  githubLink: string;
  hostedLink: string | null;
};

// Create and export an array of users
export const projects: Projects[] = [
  {
    id: 1,
    feautured: true,
    title: "Star Bomb Game",
    text: "This is our final project in the JavaScript - Basic Course. The task was to create a game from scratch using everything we have learned during the course with an extra focus on OOP, TypeScript, and the P5 library.",
    builtWith: ["Figma", "OOP", "Typescript", "P5.JS"],
    githubLink: "https://github.com/Sillen00/Star-Bomb-Game",
    hostedLink: "https://star-bomb.netlify.app/",
  },
  {
    id: 2,
    feautured: true,
    title: "Gent´s Hat",
    text: "In this school assignment, we have built a webshop for a fictional hat company. This webshop allows the user to add and edit the number of products in their shopping cart. When the user chooses to check out their placed order, they can fill in their personal information in a validated form. After the purchase is completed, the user receives an order confirmation. On the page, there is also the option to edit, add and remove products in the form of an admin. In this assignment, we have used the Material UI design system to import and style components.",
    builtWith: ["React", "Typescript", "Material-UI"],
    githubLink: "https://github.com/Sillen00/React-Webshop-Gents-Hat",
    hostedLink: "https://gentshats.netlify.app/",
  },
  {
    id: 3,
    feautured: true,
    title: "GlobalForm-Solutions",
    text: "GlobalForm-Solutions is a collaborative project undertaken by me and two classmates as part of our final thesis. The project focuses on building a web application that allows users to create forms and share them with friends or events. We have utilized the Next.js framework with the T3 stack to set up the project.",
    builtWith: ["Figma", "NextJS", "T3-stack", "Typescript", "Prisma", "tRPC", "Clerk.js", "SCSS"],
    githubLink: "https://github.com/Sillen00/GlobalForm-Solutions",
    hostedLink: "https://global-form-solutions.vercel.app/",
  },
  {
    id: 4,
    feautured: false,
    title: "So-fun Webshop",
    text: "Where Fun and Sofas Unite! This is a fully developed webshop assignment. This user-friendly platform allows users to easily register, log in, and place orders. Notably, our webshop includes an admin interface with enhanced accessibility, granting administrators the ability to create, modify, and remove products as needed. Additionally, our website features a real-time stock counter, keeping customers informed about the availability of our products for sale.",
    builtWith: ["Figma", "React", "Typescript", "ExpressJS", "Mongoose", "MongoDB"],
    githubLink: "https://github.com/Sillen00/FEST-Webbshop-SOFUN",
    hostedLink: null,
  },
  {
    id: 5,
    feautured: false,
    title: "Random Name Generator",
    text: "Having trouble choosing a name for your child? Try this random name generator out! The generator picks a random name from Swedish name days (Svenska namnsdagar). Hosting webpage on Netlify.",
    builtWith: ["API", "Javascript"],
    githubLink: "https://github.com/Sillen00/Random-Name-Generator",
    hostedLink: "https://random-name-nameday.netlify.app/",
  },
  {
    id: 6,
    feautured: false,
    title: "To-Do Calendar",
    text: "In this task, we have built a tool where the user can create and schedule todos. The tool displays a list of todos and a calendar for an overview.",
    builtWith: ["Javascript"],
    githubLink: "https://github.com/Sillen00/To-Do-Calendar",
    hostedLink: null,
  },
  {
    id: 7,
    feautured: false,
    title: "Memory Game",
    text: "This project is a classic memory game implemented as a web application. I created this project beside my studies to practice my skills in JavaScript, HTML, and CSS.",
    builtWith: ["Javascript"],
    githubLink: "https://github.com/Sillen00/Remember-Card-Project",
    hostedLink: null,
  },
  {
    id: 8,
    feautured: false,
    title: "Drink Management System",
    text: "This project is a web application that enables users to explore and manage drink preferences. Users can search for drinks from an external API, add them to their drinking list, mark them as completed, and even sort their drinks based on completion status. This project is focused on making tests with Jest and React Testing Library.",
    builtWith: ["React", "Jest", "React-Testing-Library"],
    githubLink: "https://github.com/Sillen00/React-Testing-Library-Mocktail-To-Drink",
    hostedLink: null,
  },
  {
    id: 9,
    feautured: false,
    title: "Printlab",
    text: "In this school exersice i have been conceptualizing an imaginary brand/company from scratch. This involved devising a creative brand name, designing a logo that captured the essence of the brand, and selecting a complementary color palette that resonated with the brand's identity. Additionally, I determined the ideal font to be used throughout the brand's website to ensure consistent and visually appealing communication. After establishing the brand's visual identity, I translated my design concepts into a static website.",
    builtWith: ["Illustrator", "Photoshop", "React"],
    githubLink: "https://github.com/Sillen00/printlab-webshop-react-design",
    hostedLink: "https://printlab.netlify.app/",
  },
  {
    id: 10,
    feautured: false,
    title: "Bitcoin Converter",
    text: "In this task, we have created a chat-based app that allows users to chat with each other in real-time. The communication is set up using socket.io. A user should be able to create a new room. The created rooms are displayed in a list that users can click on to join the desired room. Once inside a room, the users are allowed to chat with each other.",
    builtWith: ["Socket.io", "Typescript", "React", "MongoDB"],
    githubLink: "https://github.com/Sillen00/Chat-With-Sockets-LSDT",
    hostedLink: null,
  },
  // Add more project as needed
];
