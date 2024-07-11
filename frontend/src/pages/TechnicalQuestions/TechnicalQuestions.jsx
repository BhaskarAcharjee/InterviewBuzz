import React from 'react';
import './TechnicalQuestions.css';

const TechnicalQuestions = () => {
    const categories = [
        {
            name: 'Frontend Development',
            questions: [
                'Explain the concept of Virtual DOM.',
                'What are the differences between state and props in React?',
                'How does CSS specificity work?',
            ]
        },
        {
            name: 'Backend Development',
            questions: [
                'What is RESTful API?',
                'Explain the difference between PUT and PATCH methods.',
                'How does database indexing work?',
            ]
        },
        {
            name: 'Database Management',
            questions: [
                'What are ACID properties in database transactions?',
                'Explain the difference between SQL and NoSQL databases.',
                'What is database normalization?',
            ]
        }
    ];

    return (
        <div className="technical-questions-container">
            <h1 className="technical-questions-title">Technical Questions</h1>
            <p className="technical-questions-description">Keep a record of technical questions you prepared to revise later...</p>
            
            <div className="categories-list">
                {categories.map((category, index) => (
                    <div className="category" key={index}>
                        <h2 className="category-name">{category.name}</h2>
                        <ul className="questions-list">
                            {category.questions.map((question, idx) => (
                                <li className="question" key={idx}>
                                    {question}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnicalQuestions;
