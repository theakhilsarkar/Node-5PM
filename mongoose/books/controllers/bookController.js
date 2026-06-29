import Book from "../models/bookModel.js";

export const addBook = async (req, res) => {
  try {
    await Book.create(req.body);

    res.status(201).json({
      status: true,
      message: "Book Inserted successfully !",
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: "Book Insertion Failed ",
      err: err.message,
    });
  }
};

export const getBooks = async (req, res) => {
  try {
    const data = await Book.find();
    res.status(200).json({
      status: true,
      message: "Book fetched successfully!",
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: "Book fetching failed !",
      err: err.message,
    });
  }
};

export const testing = (req, res) => {
  res.json({ data: req.body });
};

export const updateBook = async (req, res) => {
  try {
    const result = await Book.findByIdAndUpdate(req.body.id, req.body); // (id,data)
    res.json({
      status: true,
      message: "Book updated successfully !",
      data: result,
    });
  } catch (err) {
    res.json({
      status: false,
      message: "Book updation failed !",
      err: err.message,
    });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.query.id);
    res.json({ status: true, message: "book deleted successfully !" });
  } catch (err) {
    res.status(400).json({
      err: err.message,
    });
  }
};
