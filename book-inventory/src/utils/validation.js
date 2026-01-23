export const validateBook = (book) => {
  const errors = {};

  if (!book.title || book.title.trim() === "") {
    errors.title = "Title is required";
  }

  if (!book.author || book.author.trim() === "") {
    errors.author = "Author is required";
  }

  if (!Number.isInteger(Number(book.age))) {
    errors.age = "Age must be a valid number";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(book.email || "")) {
    errors.email = "Enter a valid email address";
  }

  return errors;
};
