export type Projects = {
  id: number;
  feautured: boolean;
  title: string;
  text: string;
  builtWith: string[];
  githubLink: string;
  hostedLink: string | null;
  img?: string;
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
    img: "/projectImages/star_bomb.png",
  },
  {
    id: 2,
    feautured: true,
    title: "Gent´s Hat",
    text: "In this school assignment, we have built a webshop for a fictional hat company. This webshop allows the user to add and edit the number of products in their shopping cart. When the user chooses to check out their placed order, they can fill in their personal information in a validated form. After the purchase is completed, the user receives an order confirmation. On the page, there is also the option to edit, add and remove products in the form of an admin.",
    builtWith: ["React", "Typescript", "Material-UI"],
    githubLink: "https://github.com/Sillen00/React-Webshop-Gents-Hat",
    hostedLink: "https://gentshats.netlify.app/",
    img: "/projectImages/gentshat.png",
  },
  {
    id: 3,
    feautured: true,
    title: "GlobalForm-Solutions",
    text: "GlobalForm-Solutions is a collaborative project undertaken by me and two classmates as part of our final thesis. The project focuses on building a web application that allows users to create forms and share them with friends or events. We have utilized the Next.js framework with the T3 stack to set up the project.",
    builtWith: ["Figma", "NextJS", "T3-stack", "Typescript", "Prisma", "tRPC", "Clerk.js", "SCSS"],
    githubLink: "https://github.com/Sillen00/GlobalForm-Solutions",
    hostedLink: "https://global-form-solutions.vercel.app/",
    img: "/projectImages/globalform_solutions.png",
  },
  {
    id: 4,
    feautured: false,
    title: "So-fun Webshop",
    text: "Where Fun and Sofas Unite! This is a fully developed webshop assignment. It allows users to register, log in, and place orders easily. Notably, our webshop also includes an admin interface with enhanced accessibility, granting administrators the ability to create, modify, and remove products as needed.",
    builtWith: ["CI/CD", "Figma", "React", "Typescript", "ExpressJS", "Mongoose", "MongoDB"],
    githubLink: "https://github.com/Sillen00/FEST-Webbshop-SOFUN",
    hostedLink: null,
    img: "/projectImages/so_fun.png",
  },
  {
    id: 5,
    feautured: false,
    title: "Random Name Generator",
    text: "Having trouble choosing a name for your child? Try this random name generator out! The generator picks a random name from Swedish name days (Svenska namnsdagar). Hosting webpage on Netlify.",
    builtWith: ["API", "Javascript"],
    githubLink: "https://github.com/Sillen00/Random-Name-Generator",
    hostedLink: "https://random-name-nameday.netlify.app/",
    img: "/projectImages/random_name_generator.png",
  },
  {
    id: 6,
    feautured: false,
    title: "To-Do Calendar",
    text: "In this task, we have built a tool where the user can create and schedule todos. The tool displays a list of todos and a calendar for an overview.",
    builtWith: ["Javascript"],
    githubLink: "https://github.com/Sillen00/To-Do-Calendar",
    hostedLink: null,
    img: "/projectImages/todo_calendar.png",
  },
  {
    id: 7,
    feautured: false,
    title: "Memory Game",
    text: "This project is a classic memory game implemented as a web application. I created this project beside my studies to practice my skills in JavaScript, HTML, and CSS.",
    builtWith: ["Javascript"],
    githubLink: "https://github.com/Sillen00/Remember-Card-Project",
    hostedLink: null,
    img: "/projectImages/memory.png",
  },
  {
    id: 8,
    feautured: false,
    title: "Drink Management System",
    text: "This project is a web application that enables users to explore and manage drink preferences. Users can search for drinks from an external API, add them to their drinking list, mark them as completed, and even sort their drinks based on completion status. This project is focused on making tests with Jest and React Testing Library.",
    builtWith: ["React", "Jest", "React-Testing-Library"],
    githubLink: "https://github.com/Sillen00/React-Testing-Library-Mocktail-To-Drink",
    hostedLink: null,
    img: "/projectImages/drink_list.png",
  },
  {
    id: 9,
    feautured: false,
    title: "Printlab",
    text: "In this school exercise, I conceptualized an imaginary brand from scratch. This involved creating a brand name, designing a logo, selecting a color palette, and choosing a font for the website. After establishing the brand's visual identity, I translated my design concepts into a static website.",
    builtWith: ["Illustrator", "Photoshop", "React"],
    githubLink: "https://github.com/Sillen00/printlab-webshop-react-design",
    hostedLink: "https://printlab.netlify.app/",
    img: "/projectImages/printlab.png",
  },
  {
    id: 10,
    feautured: false,
    title: "Bitcoin Converter",
    text: "This project is a conversion tool that allows users to easily convert Bitcoin to Satoshi and vice versa. You can enter either a Bitcoin amount or a Satoshi amount and instantly see the equivalent value in the other unit.",
    builtWith: ["Javascript", "HTML", "CSS"],
    githubLink: "https://github.com/Sillen00/Input-Converter-Sats-Btc",
    hostedLink: "https://sillen00.github.io/Input-Converter-Sats-Btc/",
    img: "/projectImages/bitcoin_converter.png",
  },
  {
    id: 11,
    feautured: false,
    title: "Apple Copy",
    text: "School project where we used html and css to create a responsive copy of a website (Apple).",
    builtWith: ["HTML", "CSS"],
    githubLink: "https://github.com/Sillen00/Apple-Hemsida",
    hostedLink: "https://sillen00.github.io/Apple-Hemsida/",
    img: "/projectImages/apple_html_css_copy.png",
  },
  {
    id: 12,
    feautured: false,
    title: "Text-based Experience Game",
    text: "In my text-based adventure, the goal is to find gold in an underwater cave, but it turns out that you end up finding your best friend. You will talk to a mermaid who wants to trade items with you and also try to survive against a shark. (In Swedish)",
    builtWith: ["Javascript", "HTML", "CSS"],
    githubLink: "https://github.com/Sillen00/TextbaseradInteraktivUpplevelse-Uppgift",
    hostedLink: "https://sillen00.github.io/TextbaseradInteraktivUpplevelse-Uppgift/",
    img: "/projectImages/textbaserad_upplevelse.png",
  },
  {
    id: 13,
    feautured: false,
    title: "Dictonary Tests Exersice",
    text: "This project allows users to search for words in a dictionary API and bookmark them to their favorite words list. It provides a convenient way to explore definitions and save frequently used words for future reference. Focus on creating tests with Jest and React Testing Library.",
    builtWith: ["Jest", "React-Testing-Library", "React"],
    githubLink: "https://github.com/Sillen00/DictonaryTestsExersice",
    hostedLink: null,
    img: "/projectImages/simons_dictionary.png",
  },
  {
    id: 14,
    feautured: false,
    title: "Svelte Framework School Projekt",
    text: "School assignment inspired by State of JS where I had to choose one of the listed frameworks and create a simpler version of the site with the chosen framework. I chose to code with Svelte. The design is based on the following template.",
    builtWith: ["Svelte", "HTML", "CSS"],
    githubLink: "https://github.com/Sillen00/Svelte-Framework-Assignment",
    hostedLink: null,
    img: "/projectImages/svelte.jpg",
  },
  {
    id: 15,
    feautured: false,
    title: "Quizie Quiz",
    text: "This project is a quiz website that uses a quiz API to generate various quizzes on different topics. Tested 'CSS in JS' with JSS.",
    builtWith: ["React", "HTML", "JSS", "API"],
    githubLink: "https://github.com/Sillen00/Quiz-TLS",
    hostedLink: "https://quizie-quiz.netlify.app/",
    img: "/projectImages/quizie_quiz.png",
  },
  {
    id: 16,
    feautured: false,
    title: "Netflix 2.0",
    text: "This project is a school project aimed at learning and practicing various Git and GitHub concepts, such as branches, merges, rebases, commits, and more. Additionally, we have focused on creating tests for every component in the project.",
    builtWith: ["Github", "React", "HTML", "CSS"],
    githubLink: "https://github.com/Sillen00/Netflix2-0",
    hostedLink: "https://netflix2dot0.netlify.app/",
    img: "/projectImages/netflix.png",
  },
  {
    id: 17,
    feautured: false,
    title: "Socket-chat",
    text: "In this task, we have created a chat-based app that allows users to chat with each other in real-time. The communication is set up using socket.io. A user should be able to create a new room. The created rooms are displayed in a list that users can click on to join the desired room. Once inside a room, the users are allowed to chat with each other.",
    builtWith: ["Socket.io", "React", "HTML", "CSS"],
    githubLink: "https://github.com/Sillen00/Chat-With-Sockets-LSDT",
    hostedLink: null,
    img: "/projectImages/socket_io_chat.png",
  },
  // Add more project as needed
];
