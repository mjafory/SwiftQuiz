const questions = [
    "1. What is the result of the expression <span> x + y * z <br><br>&emsp;&emsp;if x = 2,<br><br>&emsp;&emsp; y = 3, <br><br>&emsp;&emsp;z = 5 </span>?",
    "2. Given <br><br>&emsp;&emsp;<span> var firstNumber = 3.0 <br><br>&emsp;&emsp; var secondNumber = 4.4 </span>, <br><br>what is the result of <span> firstNumber + secondNumber</span>?",
    "3. Suppose you're checking the weather with two conditions:<br><br><span>&emsp;&emsp;var isSnowing = false <br><br>&emsp;&emsp;var isRaining = true <br><br>&emsp;&emsp;var isWarm = isSnowing || isRaining</span><br><br>what is the value of <span>`isWarm` </span>variable ? ",
    "4. Which escape character is used for a new line in Swift strings?",
    "5. What is the output of the following code?<br><br><span>let age = 55 <br><br> if age > 50 {<br><br>     &emsp;&emsp;&emsp;print(\"a is less than 20\")<br><br>} else {<br><br>     &emsp;&emsp;&emsp;print(\"a is greater than 20\")<br><br>}</span>",
    "6. What is the purpose of the `sayName()` method in the following Swift code? <br><br><span>struct Person { <br><br>&emsp;&emsp;&emsp;var name: String <br><br>&emsp;&emsp;&emsp;func sayName() {<br><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; print(\"Hello, my name is \(name)!\") <br><br>&emsp;&emsp;&emsp;} <br><br>} <br><br>let john = Person(name: \"John\") <br><br>john.sayName()</span> ",
    "7. What is the purpose of the following Swift function? <br><br><span>func greet(name: String) {<br><br>    &emsp;&emsp;&emsp;print(\"Hello, \(name) !\")<br><br>}</span>",
    "8. Which of the following correctly defines a multiline string literal in Swift?",
    "9. n the given Swift code, what does the variable 🐄 represent? <br><br>&emsp;&emsp;  <span>let cow = \"🐄\"</span>",
    "10. What does the backslash (\\) represent in Swift when used in a string?"
];

const options = [
    ["A) 25", "B) 17", "C) 20", "D) 16"], //1
    ["A) 7.4", "B) 8.4", "C) 7", "D) 8"], //2
    ["A) true", "B) false", "C) It depends on the value of age", "D) It depends on the value of isRaining"], //3
    ["A) \\", "B) \\t", "C) \\r", "D) \\n"], //4
    ["A) a is less than 20", "B) a is greater than 20", "C) There will be no output", "D) It will result in an error"], //5
    ["A) Prints the age of the person", "B) Displays the person's name on the screen", "C) Computes the height of the person", "D) Alters the person's name"], //6
    ["A) Adds two numbers and returns the result", "B) Prints a greeting message with the provided name", "C) Multiplies two numbers and returns the result", "D) It has a syntax error"], //7
    ["A) <span class='option'>let text = \"\"\"Hello \\n World\"\"\"</span>", "B)  <span class='option'>let text = \"Hello \\n World\"</span>", "C) <span class='option'>let text = \"Hello \\\\n World\"</span>", "D) <span class='option'>let text = \"Hello\" \\n \"World\"</span>"], //8
    ["A) A function named 🐄", "B) A string containing the word \"cow\"", "C) A variable with a cow emoji name", "D) A cow emoji"], //9
    ["A) Division operator", "B) Multiplication operator", "C) Escape character", "D) Concatenation operator"] //10
];

const correctAnswers = ["b", //1
						"a", //2
						"a", // 3
						"d", // 4
						"b", // 5
						"b", // 6
						"b", // 7
						"a", // 8
						"d", // 9
						"c" //10
					   ];

function buildQuiz() {
	const form = document.getElementById("quizForm");

	for (let i = 0; i < questions.length; i++) {
		const questionContainer = document.createElement("div");
		questionContainer.className = "question-container";
		questionContainer.innerHTML = `<p>${questions[i]}</p>`;

		for (let j = 0; j < options[i].length; j++) {
			const option = options[i][j];
			const radioBtn = document.createElement("input");
			radioBtn.type = "radio";
			radioBtn.name = `q${i}`;
			radioBtn.value = String.fromCharCode(97 + j); // Convert index to character ('a' to 'd')
			radioBtn.required = true;

			const label = document.createElement("label");
			label.innerHTML = option;

			questionContainer.appendChild(radioBtn);
			questionContainer.appendChild(label);
		}

		form.appendChild(questionContainer);
	}
}

function submitQuiz() {
	const form = document.getElementById("quizForm");
	const resultsContainer = document.getElementById("results");
	document.getElementById("results").style.display = "block";
	let score = 0;

	for (let i = 0; i < questions.length; i++) {
		const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);

		if (selectedOption) {
			if (selectedOption.value === correctAnswers[i]) {
				score++;
			}
		}
	}

	const percentage = (score / questions.length) * 100;
	resultsContainer.innerHTML = `Score: ${score} / ${questions.length} (${percentage}%)` + "<br><a href='answer.html'>See Answer</a>";
}

document.addEventListener("DOMContentLoaded", buildQuiz);
