const express = require('express');
const app = express();

// Start Server
app.listen(8000, () => {
    console.log(`Server is running on http://localhost:8000`);
});

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Sample Data
let books = [
    { id: 1, title: "1984", author: "George Orwell", year: 1949 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

// GET: Fetch all books
app.get("/api/books", (req, res) => {
    res.json(books);
});

// GET: Fetch a book by ID
app.get("/api/books/:id", (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send("Book not found.");
    res.json(book);
});

// POST: Add a new book
app.post("/api/books", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.json.title,
        author: req.json.author,
        year: req.json.year,
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT: Update a book by ID
app.put("/api/books/:id", (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send("Book not found.");

    book.title = req.json.title;
    book.author = req.json.author;
    book.year = req.json.year;
    res.json(book);
});

// DELETE: Remove a book by ID
app.delete("/api/books/:id", (req, res) => {
    const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).send("Book not found.");

    const deletedBook = books.splice(bookIndex, 1);
    res.json(deletedBook);
});

// Error Handling
app.use((req, res) => {
    res.status(404).send("Sorry! Can't find that resource. Please check your URL.");
});
