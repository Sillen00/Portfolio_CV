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
    title: "John Doe",
    text: "john.doe@example.com",
    builtWith: ["ReactJS", "ExpressJS", "Mongoose", "MongoDB", "Figma"],
    githubLink: "https://github.com",
    hostedLink: "https://example.com",
  },
  {
    id: 2,
    feautured: true,
    title: "Jane Smith",
    text: "jane.smith@example.com",
    builtWith: ["ReactJS", "ExpressJS", "Mongoose", "MongoDB"],
    githubLink: "https://github.com",
    hostedLink: "https://example.com",
  },
  // Add more users as needed
];
