export const questions = [
    {
        question: "How long did it take Brendan Eich to create the first version of JavaScript?",
        answers: ["10 days", "3 months", "10 days", "1 year"],
        correctAnswer: 0, // 10 days
        type: "checkbox"
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        answers: ["variable x = 5;", "let x = 5;", "const x -> 5;", "declare x = 5;"],
        correctAnswer: 1, // let x = 5;
        type: "checkbox"
    },
    {
        question: "What will typeof null return?",
        answers: ["undefined", "null", "empty", "object"],
        correctAnswer: 3, // object
        type: "checkbox"
    },
    {
        question: "Which company developed JavaScript?",
        answers: ["Apple", "Netscape", "Microsoft", "Google"],
        correctAnswer: 1, // Netscape
        type: "checkbox"
    },
    {
        question: "Which method can be used to combine two arrays?",
        answers: ["concat", "join", "slice", "combine"],
        correctAnswer: 0, // concat
        type: "checkbox"
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
        type: "checkbox"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        answers: ["<!-- -->", "//", "#", "/* */"],
        correctAnswer: 1, // //
        type: "checkbox"
    },
    {
        question: "What will 2 + '2' return?",
        answers: ["22", "4", "NaN", "undefined"],
        correctAnswer: 0, // 22
        type: "checkbox"
    },
    {
        question: "Which keyword is used to create a constant variable?",
        answers: ["var", "let", "const", "static"],
        correctAnswer: 2, // const
        type: "checkbox"
    },
    {
        question: "What is the default value of an uninitialized variable in JavaScript?",
        answers: ["null", "undefined", "0", "false"],
        correctAnswer: 1, // undefined
        type: "checkbox"
    },
    {
        question: "Which loop executes at least once, even if the condition is false?",
        answers: ["for", "do...while", "while", "forEach"],
        correctAnswer: 1, // do...while
        type: "checkbox"
    },
    {
        question: "How do you declare an arrow function?",
        answers: ["function => {}", "() => {}", "{ () -> }", "=> () {}"],
        correctAnswer: 1, // () => {}
        type: "checkbox"
    },
    {
        question: "Which statement correctly handles errors in JavaScript?",
        answers: ["if...else", "onError...catch", "try...catch", "validate...error"],
        correctAnswer: 2, // try...catch
        type: "checkbox"
    },
    {
        question: "What is the correct syntax to output 'Hello, World!' in the console?",
        answers: [
            "console.print('Hello, World!');",
            "print('Hello, World!');",
            "console.log('Hello, World!');",
            "log('Hello, World!');"
        ],
        correctAnswer: 2, // console.log('Hello, World!');
        type: "checkbox"
    },
    {
        question: "Which of these is a JavaScript framework/library?",
        answers: ["Laravel", "React", "Flask", "Spring"],
        correctAnswer: 1, // React
        type: "checkbox"
    },
    {
        question: "What will Boolean('false') return?",
        answers: ["true", "false", "undefined", "null"],
        correctAnswer: 0, // true
        type: "checkbox"
    },
    {
        question: "Which of the following is NOT a valid JavaScript event?",
        answers: ["onclick", "onpress", "onchange", "onmouseover"],
        correctAnswer: 1, // onpress
        type: "checkbox"
    },
    {
        question: "What does the === operator compare?",
        answers: ["Only values.", "Values and types.", "Only types.", "It doesn't compare anything."],
        correctAnswer: 1, // Values and types
        type: "checkbox"
    },
    {
        question: "Which method stops event propagation in JavaScript?",
        answers: ["stopImmediatePropagation()", "preventDefault()", "stopPropagation()", "cancelBubble()"],
        correctAnswer: 2, // stopPropagation()
        type: "checkbox"
    },
    {
        question: "What does the setInterval function do?",
        answers: [
            "Executes a block of code after a specified time, once.",
            "Repeats a block of code at specified intervals.",
            "Executes a block of code before a delay.",
            "Pauses the execution of a block of code."
        ],
        correctAnswer: 1, // Repeats a block of code at specified intervals.
        type: "checkbox"
    },
    {
        question: "What is the purpose of the this keyword in JavaScript?",
        answers: [
            "To reference the global scope.",
            "To refer to the parent function.",
            "To reference the current object.",
            "To refer to an external variable."
        ],
        correctAnswer: 2, // To reference the current object.
        type: "checkbox"
    }
];
 