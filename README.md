# Gema-Education-Technology-Private-Limited-assignment
Student Assessment Report Page

A responsive web dashboard that displays speaking test scores and descriptive feedback based on performance.
The application fetches report data from a simple backend API and presents it in a clean, user-friendly UI.

#How to run the project

1) Clone the repository:
    a) git clone 
3) 


#Features

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

#Feedback Logic

Feedback is generated using simple conditional logic:
Score ≥ 8 → Excellent performance with strong control
Score 6 – 7.9 → Good performance with minor inaccuracies
Score < 6 → Needs improvement
This logic is applied consistently across:
Overall score
Each individual skill

#Tech Stack

Frontend

React.js
Tailwind CSS
Axios
Lucide React (icons)

Backend (Simple)

Node.js + Express
JSON / in-memory data source
Single API endpoint
