let marks = prompt("Enter your marks to see grade: ");

// Ensure input is a number between 0 and 100
while (isNaN(marks) || marks < 0 || marks > 100) {
  marks = prompt("Invalid input! Please enter student marks (between 0 and 100):");
}

// Determine the grade based on the input marks
let grade;
if (marks > 79) {
  grade = "A";
} else if (marks >= 60) {
  grade = "B";
} else if (marks >= 50) {
  grade = "C";
} else if (marks >= 40) {
  grade = "D";
} else {
  grade = "E";
}

// Output the grade
console.log(`You got grade: ${grade}.`);