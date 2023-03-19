# Week-1-Code-Challenge

code challenge 1
Code Description:
This JavaScript code takes input marks from the user and assigns a grade based on the marks. The code checks if the input is a valid number between 0 and 100. If the input is not valid, it prompts the user to enter valid marks until a valid input is received. Once a valid input is received, the code determines the grade based on the input marks.

How to Use:
To use this code, follow the below instructions:

Copy the code and paste it into any JavaScript editor of your choice or a web browser console.
Run the code.
Input the student's marks in the prompt box and hit enter.
The code will output the grade for the input marks.
Code Logic:
The code starts by taking input marks from the user using a prompt.
Then it checks whether the input is valid or not by checking if it's a number and is between 0 and 100. It uses a while loop to prompt the user to enter valid marks until the input is valid.
Once a valid input is received, the code determines the grade based on the input marks using if-else statements.
The code then outputs the grade using console.log statement.
Example Output:
If the user inputs marks greater than 79, the code will output "You got grade: A."
If the user inputs marks between 60 and 79, the code will output "You got grade: B."
If the user inputs marks between 50 and 59, the code will output "You got grade: C."
If the user inputs marks between 40 and 49, the code will output "You got grade: D."
If the user inputs marks less than 40, the code will output "You got grade: E."







code challenge 2


Code Description:
This JavaScript code calculates the demerit points for a driver if they exceed the speed limit. The code takes the speed of the driver as an input and calculates the demerit points based on the difference between the driver's speed and the speed limit. The code also checks if the driver's speed is within the speed limit, and if so, it outputs "Ok". If the driver accumulates 12 or more demerit points, their license is suspended.

How to Use:
To use this code, follow the below instructions:

Copy the code and paste it into any JavaScript editor of your choice or a web browser console.
Call the function calculateDemeritPoints() with a number parameter that represents the speed of the driver in km/h.
The function will calculate the demerit points based on the input speed and output the result.
Code Logic:
The code starts by declaring two constants, speedLimit and kmPerDemeritPoint.
Then it checks if the input speed is less than or equal to the speedLimit. If it is, it outputs "Ok" and returns.
If the input speed is greater than the speedLimit, the code calculates the demerit points by subtracting the speedLimit from the input speed and then dividing it by kmPerDemeritPoint. It uses Math.floor() to round down the result to the nearest integer.
The code then checks if the demerit points are greater than or equal to 12. If they are, it outputs "License suspended". If they are not, it outputs the calculated demerit points.
Example Output:
If the input speed is less than or equal to 70, the code will output "Ok".
If the input speed is greater than 70 and less than or equal to 74, the code will output "Points: 1".
If the input speed is greater than 74 and less than or equal to 79, the code will output "Points: 2".
If the input speed is greater than 79 and less than or equal to 84, the code will output "Points: 3".
If the input speed is greater than 84 and less than or equal to 89, the code will output "Points: 4".
If the input speed is greater than 89 and less than or equal to 94, the code will output "Points: 5".
If the input speed is greater than 94 and less than or equal to 99, the code will output "Points: 6".
If the input speed is greater than 99 and less than or equal to 104, the code will output "Points: 7".
If the input speed is greater than 104 and less than or equal to 109, the code will output "Points: 8".
If the input speed is greater than 109 and less than or equal to 114, the code will output "Points: 9".
If the input speed is greater than 114 and less than or equal to 119, the code will output "Points: 10".
If the input speed is greater than 119 and less than or equal to 124, the code will output "Points: 11".
If the input speed is greater than 124, the code will output "License suspended".






code challenge three

Payroll Calculation
This is a JavaScript function that calculates the payroll for a given basic salary. The payroll includes the following deductions: PAYE (Pay As You Earn), NHIF (National Hospital Insurance Fund), and NSSF (National Social Security Fund).

How to use
Copy the code into your JavaScript file or script tag in your HTML file.
Call the calculatePayroll() function and pass in the desired basic salary as an argument.
The function will log the basic salary, PAYE, NHIF, NSSF, and net salary to the console.
Inputs
The calculatePayroll() function takes one input:

basicSalary (number): The basic salary of the employee.
Outputs
The calculatePayroll() function logs the following information to the console:

Basic Salary: The employee's basic salary.
PAYE: The amount of PAYE deducted from the employee's salary.
NHIF: The amount of NHIF deducted from the employee's salary.
NSSF: The amount of NSSF deducted from the employee's salary.
Net Salary: The employee's net salary after all deductions have been made.
How it works
The function first calculates the PAYE deduction based on the employee's annual taxable pay.
The function then calculates the NHIF deduction based on the employee's basic salary.
The function then calculates the NSSF deduction based on the employee's basic salary.
The function then calculates the total deductions and the net salary.
Finally, the function logs the results to the console.
Assumptions
The following assumptions were made in this implementation:

The input basicSalary is a number.
The input basicSalary is the gross salary before deductions.
The tax rates and deduction brackets are up to date and accurate as of September 2021.
The output is logged to the console, but it could be modified to return the values as an object or array.