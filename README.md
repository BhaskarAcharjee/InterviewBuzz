# Interview Buzz

Welcome to **Interview Buzz**! This platform is designed to help you prepare for your interviews with a comprehensive collection of resources, including behavioral questions, project questions, technical questions, flashcards, and more.

## Features

- **Behavioral Questions**: Access a wide range of common behavioral interview questions with sample answers.
- **Project Questions**: Get questions related to your past projects to help you articulate your work effectively.
- **Technical Questions**: Practice with a variety of technical questions across different domains.
- **Flashcards**: Use flashcards for quick revision of key concepts.
- **Dream Company Tracker**: Keep track of your dream companies and the interview processes for each.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/BhaskarAcharjee/InterviewBuzz.git
   ```

2. **Navigate to the project directory:**
   ```sh
   cd interview-buzz
   ```

3. **Install the dependencies for both the frontend and backend:**
   ```sh
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

4. **Create a `.env` file in the backend directory and add your environment variables:**
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

5. **Start the backend server:**
   ```sh
   cd backend
   npm start
   ```

6. **Start the frontend development server:**
   ```sh
   cd ../frontend
   npm start
   ```

7. **Open your browser and navigate to `http://localhost:3000` to see the application running.**

## Usage

- **Behavioral Questions**: Navigate to the Behavioral Questions section to view, add, edit, and delete questions. You can also import and export questions.
- **Project Questions**: Similar functionality as Behavioral Questions, tailored for project-related inquiries.
- **Technical Questions**: A section dedicated to technical interview preparation.
- **Flashcards**: Use the flashcards feature for quick revisions.
- **Dream Company Tracker**: Keep track of your application process for your dream companies.

### Project Questions

- Similar endpoints as Behavioral Questions

### Technical Questions

- Similar endpoints as Behavioral Questions

### Flashcards

- **GET /api/flashcards**: Get all flashcards
- **POST /api/flashcards**: Create a new flashcard
- **GET /api/flashcards/:id**: Get a specific flashcard by ID
- **PATCH /api/flashcards/:id**: Update a flashcard by ID
- **DELETE /api/flashcards/:id**: Delete a flashcard by ID

## Contributing

We welcome contributions to Interview Buzz! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

Please ensure your code follows our coding guidelines and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using Interview Buzz! We hope this platform helps you succeed in your interview preparation. If you have any questions or need further assistance, feel free to open an issue or contact us.

Happy interviewing! 🚀