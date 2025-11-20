# Web Development Assignment 1

A collection of beginner-friendly web development exercises demonstrating fundamental HTML, CSS, and JavaScript concepts.

## 📋 Table of Contents
- [Overview](#overview)
- [Questions](#questions)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [How to Run](#how-to-run)
- [Features](#features)
- [Screenshots](#screenshots)
- [Learning Outcomes](#learning-outcomes)

## 🎯 Overview

This assignment consists of 4 web development questions that demonstrate basic programming concepts using HTML, CSS, and JavaScript. Each question is implemented with separate HTML, CSS, and JavaScript files for better code organization and maintainability.

## 📝 Questions

### Question 1: Sum of First N Numbers
**Description:** Calculate the sum of all numbers from 1 to N.

**Example:**
- Input: `5`
- Output: `Sum is 15`

**Concepts:** Loops, arithmetic operations, DOM manipulation

---

### Question 2: Multiplication Table Generator
**Description:** Generate a multiplication table for a given number up to 10.

**Example:**
- Input: `3`
- Output:
```
3 × 1 = 3
3 × 2 = 6
3 × 3 = 9
...
3 × 10 = 30
```

**Concepts:** Loops, string concatenation, dynamic content generation

---

### Question 3: Pattern Printer
**Description:** Print a star pattern based on user input.

**Example:**
- Input: `4`
- Output:
```
*
**
***
****
```

**Concepts:** Nested loops, pattern generation, text formatting

---

### Question 4: Grade Calculator
**Description:** Calculate total marks, average, and grade for 3 subjects.

**Grading Rules:**
- ≥ 90 → Grade A
- ≥ 75 → Grade B
- ≥ 60 → Grade C
- else → Fail

**Example:**
- Input: `95, 88, 90`
- Output:
```
Total: 273
Average: 91.00
Grade: A
```

**Concepts:** Conditional statements, calculations, multiple inputs

## 💻 Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and layout
  - Flexbox for centering
  - Gradients for backgrounds
  - CSS transitions and hover effects
- **JavaScript (ES5)** - Functionality and interactivity
  - DOM manipulation
  - Event handling
  - Form validation

## 📁 File Structure

```
Weekly Assignments - LST/
│
├── Assignment 1/
│
├── Grade Calculator/
│   ├── grade.css           # Styles for Grade Calculator
│   ├── grade.html          # HTML for Grade Calculator
│   └── grade.js            # JavaScript for Grade Calculator
│
├── Homepage/
│   ├── Assets/             # Images and media files
│   │   ├── dino_gif.gif
│   │   ├── grade_ss.png
│   │   ├── homepage_ss.png
│   │   ├── man_gif.gif
│   │   ├── pattern_ss.png
│   │   ├── sum_ss.png
│   │   └── table_ss.png
│   ├── homepage.css        # Styles for Homepage
│   └── homepage.html       # Main Homepage
│
├── Multiplication Table/
│   ├── table.css           # Styles for Multiplication Table
│   ├── table.html          # HTML for Multiplication Table
│   └── table.js            # JavaScript for Multiplication Table
│
├── Pattern Printer/
│   ├── pattern.css         # Styles for Pattern Printer
│   ├── pattern.html        # HTML for Pattern Printer
│   └── pattern.js          # JavaScript for Pattern Printer
│
├── Sum/
│   ├── sum.css             # Styles for Sum Calculator
│   ├── sum.html            # HTML for Sum Calculator
│   └── sum.js              # JavaScript for Sum Calculator
│
└── README.md               # Project documentation
```

## 🚀 How to Run

1. **Clone the repository**
   ```bash
   https://github.com/broskell/LST-Assignments.git
   cd Assignment\ 1/
   ```

2. **Open the Homepage**
   - Navigate to `Homepage/` folder
   - Open `homepage.html` in your browser
   - Navigate to individual questions from there

3. **Or open individual questions directly**
   - **Sum Calculator:** Open `Sum/sum.html`
   - **Multiplication Table:** Open `Multiplication Table/table.html`
   - **Pattern Printer:** Open `Pattern Printer/pattern.html`
   - **Grade Calculator:** Open `Grade Calculator/grade.html`

4. **Test the functionality**
   - Enter values in the input fields
   - Click the button to see results
   - Use Reset button to clear inputs
   - Use "Go Back to Homepage" to navigate

## ✨ Features

### User Interface
- 🎨 **Dark Theme** - Professional black and gray color scheme
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎭 **Smooth Animations** - Hover effects and transitions
- ✅ **Input Validation** - Prevents invalid inputs
- 📊 **Clear Examples** - Each page shows example inputs/outputs
- 🔄 **Reset Functionality** - Clear inputs and outputs with one click
- 🏠 **Navigation** - "Go Back to Homepage" link on each page
- 🖼️ **Visual Assets** - Custom GIFs and screenshots for better UX

### Code Quality
- 💡 **Beginner-Friendly** - Simple, readable code with comments
- 📂 **Organized Structure** - Separate HTML, CSS, and JS files
- 🔄 **No Form Submission Issues** - Uses divs instead of forms
- 🎯 **Modular Functions** - Each question has its own function
- 🛡️ **Error Handling** - Validates user inputs properly
- ♻️ **Reusable Code** - Clean separation of concerns

## 📸 Screenshots

### Homepage
![Homepage](./Assignment%201/Homepage/Assets/homepage_ss.png)
*Main landing page with navigation to all questions*

### Question 1 - Sum of First N Numbers
![Sum Calculator](./Assignment%201/Homepage/Assets/sum_ss.png)
*Calculate sum of numbers from 1 to N with Reset functionality*

### Question 2 - Multiplication Table Generator
![Multiplication Table](./Assignment%201/Homepage/Assets/table_ss.png)
*Generate multiplication tables with clean output display*

### Question 3 - Pattern Printer
![Pattern Printer](./Assignment%201/Homepage/Assets/pattern_ss.png)
*Print star patterns using nested loops*

### Question 4 - Grade Calculator
![Grade Calculator](./Assignment%201/Homepage/Assets/grade_ss.png)
*Calculate grades with color-coded results and grading rules*

## 📚 Learning Outcomes

After completing this assignment, you will understand:

### HTML
- Basic HTML5 structure
- Form inputs and labels
- Semantic HTML elements
- Proper document structure
- Linking external CSS and JavaScript files

### CSS
- Flexbox layout
- CSS Grid basics
- Gradients and shadows
- Transitions and animations
- Responsive design principles
- Dark theme implementation
- External stylesheet organization

### JavaScript
- Variables and data types (`var`)
- For loops (single and nested)
- Conditional statements (if-else)
- Functions and function calls
- DOM manipulation methods:
  - `getElementById()`
  - `innerHTML`
  - `style` property
- Type conversion (`Number()`)
- Input validation (`isNaN()`)
- String concatenation
- External JavaScript files

### Project Organization
- Separating HTML, CSS, and JavaScript
- Folder structure best practices
- Asset management
- Navigation between pages

## 🎓 Key Concepts Demonstrated

1. **User Input Handling** - Getting values from input fields
2. **Data Validation** - Checking for valid inputs before processing
3. **Loops** - `for` loops for repetitive tasks
4. **Nested Loops** - Creating patterns with multiple loops
5. **Conditional Logic** - `if-else` statements for decision making
6. **DOM Manipulation** - Dynamically updating page content
7. **String Operations** - Building formatted output strings
8. **Mathematical Operations** - Calculations and formulas
9. **File Organization** - Separating concerns (HTML/CSS/JS)
10. **User Experience** - Reset buttons and navigation

## 🐛 Common Issues & Solutions

### Issue 1: Data Appears and Disappears Quickly
**Problem:** Using `<form>` tags causes page reload
**Solution:** Use `<div>` tags instead or add `type="button"` to buttons

### Issue 2: NaN Error
**Problem:** Empty or invalid input
**Solution:** Code includes validation using `isNaN()` check

### Issue 3: Pattern Not Displaying Correctly
**Problem:** Using `innerHTML` instead of `textContent` for pattern
**Solution:** Use `textContent` to preserve whitespace formatting

### Issue 4: CSS/JS Not Loading
**Problem:** Incorrect file paths in HTML
**Solution:** Use relative paths correctly (e.g., `./sum.css`, `./sum.js`)

### Issue 5: Navigation Not Working
**Problem:** Incorrect paths to homepage or other pages
**Solution:** Ensure correct relative paths from current folder location

## 📝 Code Style

- **Variables:** Declared with `var` (ES5 style for beginners)
- **Functions:** Simple named functions with clear names
- **Comments:** Clear explanations for each section
- **Indentation:** Consistent spacing for readability
- **Naming Conventions:** 
  - Files: lowercase with underscores (e.g., `sum.html`)
  - Functions: camelCase (e.g., `calculateSum`)
  - Variables: descriptive names (e.g., `sum`, `average`)
- **File Organization:** Separate HTML, CSS, and JS files

## 🔮 Future Enhancements

Possible improvements for future versions:
- [x] Add reset/clear button for each question ✓
- [x] "Go Back to Homepage" navigation ✓
- [x] Separate CSS and JS files ✓
- [x] Homepage with navigation ✓
- [x] Visual assets and screenshots ✓
- [ ] Save results to local storage
- [ ] Add print functionality
- [ ] Add more input validation (max values, decimals)
- [ ] Include keyboard shortcuts (Enter key support)
- [ ] Add loading animations
- [ ] Create a dark/light theme toggle
- [ ] Add unit tests for JavaScript functions

## 👨‍💻 Author

**Kellampalli Saathvik**
- GitHub: [@broskell](https://github.com/broskell)
- Project Repository: [Weekly-Assignments---LST](https://github.com/broskell/Weekly-Assignments---LST)

## 📅 Assignment Details

- **Course:** Web Development
- **Assignment:** Assignment 1
- **Due Date:** Friday, 11:59 PM
- **Marks:** 5 marks per question (Total: 20 marks)

## 🎯 Assignment Requirements Met

✅ **Question 1:** Sum of First N Numbers - Complete  
✅ **Question 2:** Multiplication Table Generator - Complete  
✅ **Question 3:** Pattern Printer - Complete  
✅ **Question 4:** Grade Calculator - Complete  
✅ **Bonus:** Styled with dark theme (black/white/gray colors only)  
✅ **Code Quality:** Beginner-friendly, well-commented code  
✅ **Organization:** Professional folder structure with separate files  

## 📄 License

This project is created for educational purposes as part of a web development course assignment.

## 🙏 Acknowledgments

- Thanks to the course instructor for the assignment guidelines
- Dark theme inspired by modern web design trends
- CSS gradients and animations for enhanced UI/UX
- GIF assets for improved user experience

## 💡 Key Takeaways

1. **Separation of Concerns** - Keeping HTML, CSS, and JS in separate files makes code easier to maintain
2. **User Validation** - Always validate user input before processing
3. **Clean Code** - Simple, readable code is better than complex code
4. **User Experience** - Small features like Reset buttons greatly improve usability
5. **Documentation** - Clear README helps others understand your project

---

⭐ **Note:** Make sure to test all questions before submission. Each function should handle edge cases and invalid inputs properly.

**Happy Coding!** 🚀

## 📞 Contact

For any questions or feedback about this project:
- Open an issue on GitHub
- Check the documentation in each folder
- Review the code comments for implementation details

---

*Last Updated: 14th November 2025*





