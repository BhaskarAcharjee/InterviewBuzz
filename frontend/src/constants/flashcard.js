export const flashcards = {
  javascript: [
    {
      // Revise
      question: "What is closure in JavaScript?",
      answer:
        "Closure is the combination of a function and the lexical environment within which that function was declared.",
      type: "revise",
    },
    {
      question:
        "What is the difference between 'undefined' and 'null' in JavaScript?",
      answer:
        "'Undefined' means a variable has been declared but has not yet been assigned a value, whereas 'null' is an assignment value that means no value.",
      type: "revise",
    },
    {
      question: "What are higher-order functions in JavaScript?",
      answer:
        "Higher-order functions are functions that take other functions as arguments or return functions as their results.",
      type: "revise",
    },

    // MCQ questions
    {
      question: "Which of the following is not a JavaScript data type?",
      options: ["Number", "String", "Boolean", "Class"],
      correctAnswer: "Class",
      type: "mcq",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
      ],
      correctAnswer: "Cascading Style Sheets",
      type: "mcq",
    },
    {
      question:
        "What is the CSS property used to control the size of text displayed in an element?",
      options: ["font-size", "text-size", "text-style", "font-style"],
      correctAnswer: "font-size",
      type: "mcq",
    },
    {
      question: "Which CSS property is used to change the color of text?",
      options: ["text-color", "color", "text-style", "font-color"],
      correctAnswer: "color",
      type: "mcq",
    },

    {
      question: "Which operator is used to concatenate strings in JavaScript?",
      options: ["+", "-", "*", "&"],
      correctAnswer: "+",
      type: "mcq",
    },

    // yes/no questions
    {
      question: "Is 'NaN' (Not a Number) a primitive data type in JavaScript?",
      options: ["Yes", "No"],
      type: "yesno",
      correctAnswer: "No",
    },
    {
      question: "Is JavaScript a dynamically typed language?",
      options: ["Yes", "No"],
      type: "yesno",
      correctAnswer: "Yes",
    },
    {
      question: "Does 'margin' property affect the inline elements in CSS?",
      options: ["Yes", "No"],
      type: "yesno",
      correctAnswer: "No",
    },
    {
      question: "Are JavaScript functions objects?",
      options: ["Yes", "No"],
      type: "yesno",
      correctAnswer: "Yes",
    },
    {
      question: "Is 'null' a primitive data type in JavaScript?",
      options: ["Yes", "No"],
      type: "yesno",
      options: ["Yes", "No"],
      correctAnswer: "No",
    },
    {
      question: "Can CSS be used to create animations?",
      options: ["Yes", "No"],
      type: "yesno",
      correctAnswer: "Yes",
    },
    {
      question: "Does JavaScript have block scope?",
      options: ["Yes", "No"],
      type: "yesno",
      correctAnswer: "Yes",
    },
  ],
  react: [
    {
      question: "What is JSX in React?",
      answer:
        "JSX is a syntax extension for JavaScript used with React to describe what the UI should look like.",
      type: "revise",
    },
    {
      question: "What is a functional component in React?",
      answer:
        "A functional component in React is a JavaScript function that accepts props and returns React elements.",
      type: "revise",
    },
    {
      question: "What is the purpose of React hooks?",
      answer:
        "React hooks are functions that let you use state and other React features without writing a class.",
      type: "revise",
    },
    {
      question: "What is state in React?",
      answer:
        "State in React is an object that represents the parts of the app that can change.",
      type: "revise",
    },
    {
      question: "What are props in React?",
      answer:
        "Props (short for properties) are a way to pass data from a parent component to a child component in React.",
      type: "revise",
    },
    {
      question: "What is the lifecycle method in React?",
      answer:
        "Lifecycle methods are special methods in React that allow you to hook into the lifecycle of a component.",
      type: "revise",
    },
    {
      question: "What is React Router?",
      answer:
        "React Router is a library that allows you to handle routing in a React application.",
      type: "revise",
    },
    {
      question: "What is Redux?",
      answer:
        "Redux is a predictable state container for JavaScript apps, used to manage application state.",
      type: "revise",
    },
    {
      question: "What are React hooks used for?",
      answer:
        "React hooks are used to add state and other React features to functional components.",
      type: "revise",
    },
    {
      question: "Is React a framework or a library?",
      options: ["Framework", "Library"],
      correctAnswer: "Library",
      type: "mcq",
    },
    // Add more React questions here
  ],
  css: [
    {
      question: "What is the box model in CSS?",
      answer:
        "The CSS box model is a box that wraps around HTML elements, comprising margins, borders, padding, and the actual content.",
      type: "revise",
    },
    {
      question: "What is CSS specificity?",
      answer:
        "CSS specificity is the set of rules that determine which CSS styles are applied to an element when multiple rules could apply.",
      type: "revise",
    },
    {
      question: "What are CSS flexbox and grid layouts?",
      answer:
        "Flexbox and grid are layout models in CSS used to design and structure web pages more efficiently.",
      type: "revise",
    },
    {
      question: "How can you center an element horizontally in CSS?",
      answer:
        "To center an element horizontally in CSS, you can use 'margin: 0 auto;' or 'text-align: center;' on the parent element.",
      type: "revise",
    },
    {
      question:
        "What is the difference between 'inline' and 'block' elements in CSS?",
      answer:
        "'Inline' elements do not start on a new line and only take up as much width as necessary, whereas 'block' elements start on a new line and take up the full width available.",
      type: "revise",
    },
    {
      question: "What is the 'float' property in CSS used for?",
      answer:
        "The 'float' property in CSS is used for positioning and formatting content, allowing an element to be pushed to one side of its containing block and have content flow around it.",
      type: "revise",
    },
    {
      question: "How can you create a responsive design in CSS?",
      answer:
        "To create a responsive design in CSS, you can use media queries, flexible grids (flexbox and grid), and relative units like percentages or 'em'.",
      type: "revise",
    },
    {
      question: "What is the CSS 'box-shadow' property used for?",
      answer:
        "The 'box-shadow' property in CSS is used to add shadow effects around an element's frame.",
      type: "revise",
    },
    {
      question: "Can you use CSS to create animations?",
      options: ["Yes", "No"],
      correctAnswer: "Yes",
      type: "yesno",
    },
    {
      question: "What is the CSS 'z-index' property used for?",
      answer:
        "The 'z-index' property in CSS is used to specify the stack order of positioned elements that overlap.",
      type: "revise",
    },
    // Add more CSS questions here
  ],
  // Add more categories here
};
