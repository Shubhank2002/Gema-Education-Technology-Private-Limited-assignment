# Gema-Education-Technology-Private-Limited-assignment
## Student Assessment Report Page

A responsive web dashboard that displays speaking test scores and descriptive feedback based on performance.
The application fetches report data from a simple backend API and presents it in a clean, user-friendly UI.

## How to run the project

### 1. Clone the repository: run below commands 
```bash
    git clone https://github.com/Shubhank2002/Gema-Education-Technology-Private-Limited-assignment.git
     cd Gema-Education-Technology-Private-Limited-assignment
   ```
2) Install dependencies: run below commands
```bash
    npm i

3)  Start backend server: run below commands
    a) cd Backend
    b) node Server

4)  Start frontend: run below commands
    a) cd ..
    b) cd vite-project
    c) npm run dev
    d) click on link, or paste "localhost:5173" in browser.



# Where the Scores Are Stored

 Scores are stored on the backend in a simple JSON / in-memory data source.

 No database is used to keep the implementation simple.   

 Example structure returned by the API:
 {
  "score": {
    "overall": 7,
    "Pronunciation": 8.3,
    "Fluency": 9,
    "Vocabulary": 6.2,
    "Grammar": 6.2
  }
}

The frontend fetches this data using a single API endpoint:
   GET /api/reports


# How Feedback Logic Works

   Descriptive feedback is generated using simple conditional logic based on score ranges.

   Score Ranges

    Score ≥ 8

    → Excellent performance with dynamic control

     Score between 6 and 7.9

    → Good performance with minor inaccuracies

    Score < 6

    → Needs improvement

# Feedback Implementation

   Feedback messages are stored in a centralized configuration object (FEEDBACK_MAP).

   A helper function selects the correct feedback based on the score and category.


    
# Features

Overall Score (out of 9)
Skill-wise Scores
Pronunciation
Fluency
Vocabulary
Grammar
Progress bars for each skill
Descriptive Feedback
Automatically generated based on score ranges
Fully Responsive UI
Separate layouts for mobile and desktop
Dynamic Data Rendering
Updates automatically when API data changes



# Tech Stack

Frontend

React.js
Tailwind CSS
Axios
Lucide React (icons)

Backend (Simple)

Node.js + Express
JSON / in-memory data source
Single API endpoint
