# Task 5 – React Custom Hook (useFetch)

## Problem Statement
The objective of this assignment is to create a custom hook in React that simplifies the process of fetching data from an API. The hook should handle loading, error, and data states and make API fetching logic reusable.

---

## Project Description
This project demonstrates the use of a custom React hook named `useFetch`. The hook is designed to fetch data from a given API URL and return the fetched data along with loading and error states.

Instead of writing fetch logic directly inside components, the logic is abstracted into a custom hook. A React component then consumes this hook to display data fetched from a dummy API.

---

## Implementation Details
- A custom hook named `useFetch` is created inside the `hooks` folder.
- The hook accepts a URL as a parameter.
- `useState` is used to manage data, loading, and error states.
- `useCallback` is used to memoize the fetch function.
- `useEffect` is used to trigger the API call when the URL changes.
- Proper error handling is implemented for failed API requests.
- A separate component is used only for displaying the fetched data.

---

## Features
- Reusable custom hook for API data fetching
- Handles loading state while data is being fetched
- Handles error state if the API request fails
- Clean separation of logic and UI
- Modular and organized folder structure

---

## Folder Structure
Assign_5/
│
├── hooks/
│ └── useFetch.js
│
├── components/
│ └── FetchData.js
│
├── App.js
├── App.css
├── index.js
└── README.md



---

## API Used
The following dummy API is used to fetch product data:
https://api.escuelajs.co/api/v1/products



---

## Deployed Link
Live Application:
https://curious-macaron-574740.netlify.app/

---

## Technologies Used
- React
- JavaScript
- HTML
- CSS

---

## How to Run the Project Locally
1. Clone the GitHub repository
2. Navigate to the project directory
3. Install dependencies using `npm install`
4. Start the application using `npm start`

---

## Submission Summary
- Custom hook `useFetch` is implemented as required
- Loading and error states are handled properly
- React hooks `useState`, `useEffect`, and `useCallback` are used
- The project is deployed and the deployed link is included in this README
- Source code is uploaded to GitHub

---

## Author
Yash Khange
