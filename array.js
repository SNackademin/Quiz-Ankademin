export const questions = [
    {
        question: "JavaScript can be used on both the front-end and back-end.",
        answers: ["True", "False"],
        correctAnswer: 0, // True
        type: "boolean"
    },
    {
        question: "The 'var' keyword declares a block-scoped variable in JavaScript.",
        answers: ["True", "False"],
        correctAnswer: 1, // False
        type: "boolean"
    },
    {
        question: "Functions in JavaScript can return other functions.",
        answers: ["True", "False"],
        correctAnswer: 0, // True
        type: "boolean"
    },
    {
        question: "The 'typeof' operator in JavaScript can return 'function' as a type.",
        answers: ["True", "False"],
        correctAnswer: 0, // True
        type: "boolean"
    },
    {
        question: "JavaScript and Java are the same programming language.",
        answers: ["True", "False"],
        correctAnswer: 1, // False
        type: "boolean"
    },
    {
        question: "The 'null' value in JavaScript has a type of 'object'.",
        answers: ["True", "False"],
        correctAnswer: 0, // True
        type: "boolean"
    },
    {
        question: "How long did it take Brendan Eich to create the first version of JavaScript?",
        answers: ["10 days", "3 months", "10 days", "1 year"],
        correctAnswer: 0, // 10 days
        type: "radio"
    },
    {
        question: "Which company developed JavaScript?",
        answers: ["Apple", "Netscape", "Microsoft", "Google"],
        correctAnswer: 1, // Netscape
        type: "radio"
    },
    {
        question: "What does the push method do?",
        answers: [
            "Removes an element from the end of an array.",
            "Adds an element to the end of an array.",
            "Adds an element to the beginning of an array.",
            "Removes an element from the beginning of an array."
        ],
        correctAnswer: 1, // Adds an element to the end of an array.
        type: "radio"
    },
    {
        question: "Which loop executes at least once, even if the condition is false?",
        answers: ["for", "do...while", "while", "forEach"],
        correctAnswer: 1, // do...while
        type: "radio"
    },
    {
        question: "How do you declare an arrow function?",
        answers: ["function => {}", "() => {}", "{ () -> }", "=> () {}"],
        correctAnswer: 1, // () => {}
        type: "radio"
    },
    {
        question: "Which of the following are JavaScript data types?",
        answers: ["string", "number", "boolean", "character"],
        correctAnswer: [0, 1, 2], // string, number, boolean
        type: "checkbox"
    },
    {
        question: "Which methods can be used to iterate over an array?",
        answers: ["forEach", "map", "filter", "reduceRight"],
        correctAnswer: [0, 1, 2], // forEach, map, filter
        type: "checkbox"
    },
    {
        question: "Which of the following are falsy values in JavaScript?",
        answers: ["0", '""', "null", "{}"],
        correctAnswer: [0, 1, 2], // 0, "", null
        type: "checkbox"
    },
    {
        question: "Which statements about let and const are true?",
        answers: [
            "let allows reassignment of values.",
            "const prevents reassignment of values.",
            "Both let and const have global scope.",
            "Both let and const have block scope."
        ],
        correctAnswer: [0, 1, 3], // let allows reassignment, const prevents reassignment, block scope
        type: "checkbox"
    },
    {
        question: "Which array methods return a new array?",
        answers: ["map", "filter", "forEach", "slice"],
        correctAnswer: [0, 1, 3], // map, filter, slice
        type: "checkbox"
    }
];
