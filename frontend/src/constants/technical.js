export const categories = [
  {
    name: "Frontend Development",
    questions: [
      {
        question: "Explain the concept of Virtual DOM.",
        answer:
          "The Virtual DOM is a concept where a virtual representation of the UI is kept in memory and synced with the real DOM by a library such as React.",
        type: "theoretical",
      },
      {
        question: "What are the differences between state and props in React?",
        answer:
          "State is a component’s local state, whereas props are inputs passed from a parent component to a child component.",
        type: "theoretical",
      },
      {
        question: "How does CSS specificity work?",
        answer:
          "CSS specificity determines which CSS rule is applied by the browser when multiple rules could apply to the same element.",
        type: "theoretical",
      },
      {
        question: "Implement a debounce function in JavaScript.",
        answer:
          "function debounce(func, wait) {let timeout; return function(...args) { clearTimeout(timeout); timeout = setTimeout(() => func.apply(this, args), wait); }; }",
        language: "javascript",
        type: "coding",
      },
    ],
  },
  {
    name: "Backend Development",
    questions: [
      {
        question: "What is RESTful API?",
        answer:
          "RESTful API is an architectural style for building APIs, using HTTP requests to access and use data.",
        type: "theoretical",
      },
      {
        question: "Explain the difference between PUT and PATCH methods.",
        answer:
          "PUT updates a resource completely, while PATCH applies partial modifications to a resource.",
        type: "theoretical",
      },
      {
        question: "How does database indexing work?",
        answer:
          "Database indexing improves the speed of data retrieval operations on a database table at the cost of additional storage and maintenance overhead.",
        type: "theoretical",
      },
      {
        question: "Write a basic CRUD application in Node.js.",
        answer:
          "// Code snippet to perform CRUD operations in Node.js using Express and MongoDB",
        language: "javascript",
        type: "coding",
      },
    ],
  },
  {
    name: "Database Management",
    questions: [
      {
        question: "What are ACID properties in database transactions?",
        answer:
          "ACID properties ensure reliable processing of database transactions: Atomicity, Consistency, Isolation, and Durability.",
        type: "theoretical",
      },
      {
        question: "Explain the difference between SQL and NoSQL databases.",
        answer:
          "SQL databases are relational and use structured query language for defining and manipulating data, while NoSQL databases are non-relational and can store unstructured data.",
        type: "theoretical",
      },
      {
        question: "What is database normalization?",
        answer:
          "Database normalization is the process of structuring a database to reduce redundancy and improve data integrity.",
        type: "theoretical",
      },
      {
        question:
          "Write a SQL query to find the second highest salary in a table.",
        answer:
          "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);",
        language: "sql",
        type: "coding",
      },
    ],
  },
];
