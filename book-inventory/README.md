# 📚 Book Inventory Management System (React)

##  Overview
The **Book Inventory Management System** is a responsive web application built using **React** that allows users to manage a collection of books.  
It supports full **CRUD operations** (Create, Read, Update, Delete) with real-time data handling via API integration.

The application is designed with a **clean, professional UI** using **Bootstrap** and works seamlessly across **mobile, tablet, and laptop** devices.

---

##  Features

###  Home Page
- Displays all books in a structured **table view**
- Scrollable table with sticky header
- Click on a book title to view detailed information

### ➕ Add Book
- Add new books using a form
- Proper **form validation**:
  - Title & Author → required strings
  - Age → integer only
  - Email → valid email format

###  Edit Book
- Edit existing book details
- Form auto-fills selected book data
- Cancel option to exit edit mode cleanly

###  Delete Book
- Delete books directly from the table
- Data updates instantly after deletion

###  Book Details Page
- Displays complete book information:
  - Author
  - Publisher
  - Published date
  - Description
- Scrollable content for long descriptions

---

##  API Integration
- Uses **JSON Server** as a mock backend
- All data operations are handled via REST APIs
- API service layer implemented using **Axios**

---

##  Responsive Design
- Mobile & Tablet → Single-column layout
- Laptop & Desktop → Optimized wide layout
- Fixed navbar at the top
- Vertical scrolling enabled for tables

---

##  Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Bootstrap
- Axios

### Backend (Mock API)
- JSON Server

### Tools
- Git & GitHub
- VS Code

---


## 🌐 Live Demo
https://book-inventory-chi.vercel.app/

## 🖥 Backend / API Note
This project uses JSON Server as a mock backend.

To run the API locally:
json-server --watch db.json --port 3001

The frontend is deployed separately for demonstration purposes.




