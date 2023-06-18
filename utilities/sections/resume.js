import React from "react";

{
  /* <i className="bi bi-code-slash " style={{ color: "#e361ff" }} /> */
}
export const resumeIcons = [
  {
    name: "TypeScript",
    color: "#5578ff",
    icon: (
      <img
        className="mx-3"
        src="assets/img/logo/typescript-short.png"
        width={30}
      />
    ),
  },
  {
    name: "TypeORM",
    color: "#5578ff",
    icon: (
      <img
        className="mx-3"
        src="assets/img/logo/typeorm.png"
        width={30}
      />
    ),
  },
  {
    name: "PostgresSQL",
    color: "#5578ff",
    icon: (
      <img
        className="mx-3"
        src="assets/img/logo/psql-logo.png"
        width={30}
      />
    ),
  },
  {
    name: "MongoDB",
    color: "#5578ff",
    icon: (
      <img
        className="mx-3"
        src="assets/img/logo/mongodb.png"
        width={30}
      />
    ),
  },
  {
    name: "JavaScript",
    color: "#5578ff",
    icon: (
      <img
        className="mx-3"
        src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png"
        width={30}
      />
    ),
  },

  {
    name: "Next JS",
    color: "#5578ff",
    icon: (
      <img
        className="mx-3"
        src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
        width={30}
      />
    ),
  },
  {
    name: "React Native",
    color: "#5578ff",
    icon: (
      <img
        className="mx-3"
        src="assets/img/logo/reactNativeLogo.png"
        width={30}
      />
    ),
  },
  {
    name: "React JavaScript",
    color: "#5578ff",
    icon: (
      <img
        className="mx-3"
        src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
        width={30}
      />
    ),
  },
  {
    name: "React Redux",
    color: "#5578ff",
    icon: (
      <img
        className="mx-3"
        src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
        width={30}
      />
    ),
  },
  {
    name: "Node JavaScript",
    color: "#e80368",
    icon: (
      <img
        className="mx-3"
        src="https://seeklogo.com/images/N/nodejs-logo-065257DE24-seeklogo.com.png"
        width={30}
      />
    ),
  },
  {
    name: "Node Express JavaScript",
    color: "#e80368",
    icon: (
      <img
        className="mx-3"
        src="https://seeklogo.com/images/N/nodejs-logo-065257DE24-seeklogo.com.png"
        width={30}
      />
    ),
  },
  {
    name: "Git Hub Actions",
    color: "#11dbcf",
    icon: (
      <img
        className="mx-3"
        src="https://avatars.githubusercontent.com/u/44036562?s=200&v=4"
        width={30}
      />
    ),
  },
  {
    name: "Git",
    color: "#11dbcf",
    icon: <i className="bi bi-git" style={{ color: "#11dbcf" }} />,
  },
  {
    name: "Java",
    color: "#5578ff",
    icon: (
      <img
        className="mx-3"
        src="https://seeklogo.com/images/J/java-logo-A5A6D66CD2-seeklogo.com.png"
        width={20}
      />
    ),
  },
 
];
export const resumeToolsIcons = [
  {
    name: "React JavaScript",
    color: "#5578ff",
    icon: <i className="bi bi-code-slash" style={{ color: "#e361ff" }} />,
  },
  {
    name: "Node Express JavaScript",
    color: "#e80368",
    icon: <i className="bi bi-alt" style={{ color: "#5578ff" }} />,
  },
  {
    name: "Agile Development",
    color: "#e361ff",
    icon: <i className="bi bi-lightning" style={{ color: "#e80368" }} />,
  },
  {
    name: "Git",
    color: "#11dbcf",
    icon: <i className="bi bi-git" style={{ color: "#11dbcf" }} />,
  },
];

export const clients = [
  {
  alt: "Sprint UG",
  imageDisplay: (
    <img
      className="mx-3"
      src="assets/img/clients/sprint_logo.PNG"
      width={30}
    />
  ),
},
  {
    alt: "outbox",
    imageDisplay: (
      <img
        className="mx-3"
        src="assets/img/clients/outbox.png"
        width={30}
      />
    ),
  },
  {
    alt: "solfix",
    imageDisplay: (
      <img
        className="mx-3"
        src="assets/img/clients/solfix.jpeg"
        width={30}
      />
    ),
  },
  {
    alt: "buri",
    imageDisplay: (
      <img
        className="mx-3"
        src="assets/img/clients/buri.svg"
        width={30}
      />
    ),
  },
  {
    alt: "Housing Finance Bank",
    imageDisplay: (
      <img
        className="mx-3"
        src="assets/img/clients/hfb2.jpg"
        width={30}
      />
    ),
  },
];

export const resumeExperience = [
  {
    jobTitle: "SOFTWARE DEVELOPER - PERMANENT",
    period: "Oct 2022 - Present",
    companyAndLocation: "Sprint UG Uganda, Kampala, Uganda",
    jobDescriptions: [
      "Collaborate with clients and use Figma to create UI/UX designs for software development",
      "Write frontend software using React Native for mobile applications and React Next.js for web applications, with a preference for TypeScript as the programming language.",
      "Develop backend software using Mongoose or Postgres SQL(TypeORM) to efficiently process, store, and retrieve data.",
      "Deploy software to production environments using CI/CD(Github Actions) methodologies.",
    ],
  },
  {
    jobTitle: "SOFTWARE DEVELOPER - CONTRACT",
    period: "Feb 2021 - June 2022",
    companyAndLocation: "Outbox EDU Hub Uganda, Kampala, Uganda",
    jobDescriptions: [
      "Taught students software development in JavaScript front and backend development so that they can be able to create and attract opportunities in the technology industry.",
      "Contributed to curriculum and content development, based on learnings and data, utilizing student feedback and continuously iterating to improve teaching and assessment methods.",
      "Built Frontend and Backend software using React JavaScript, Express JavaScript and Mongo Database to create functional user-friendly web applications.",
    ],
  },
  {
    jobTitle: "SOFTWARE DEVELOPER - STUDENT",
    period: "Oct 2020 - Feb 2021",
    companyAndLocation: "Outbox EDU Hub Uganda, Kampala, Uganda",
    jobDescriptions: [
      "Developed front-end and Backend web applications using React, Express JavaScript and Mongo DataBase.",
      "Developed a React-redux JavaScript application that displays the monthly loan repayment amount for a given loan a user has input - Loan Repayment Application.",
      "Developed a React-context API JavaScript front-end application that displays shopping items a user can select from, shopping categories and search for items using the search bar - Commerce site.",
    ],
  },
  {
    jobTitle: "SOFTWARE DEVELOPER - SELF TEACHING",
    period: "April 2020 - Oct 2020",
    companyAndLocation: "Uganda, Kampala, Uganda",
    jobDescriptions: [
      "learnt front-end web applications using HTML CSS.",
      "learnt Languages like Java, JavaScript.",
      "learnt Git and Github to manage development versions.",
    ],
  },
  {
    jobTitle: "SALES OFFICER - BANKER",
    period: "Nov 2016- April 2020",
    companyAndLocation: "Housing Finance Bank Uganda, Kampala, Uganda",
    jobDescriptions: [
      "Achieved a portfolio of worth One Million US dollars of  both assest and liabilities combined",
      "Faced potential customers and onboard them to the  bank.",
      "Hit the company expected set sales targets.",
      "Provide customer service and provide business solutions to customer business challenges.",
    ],
  },
];
