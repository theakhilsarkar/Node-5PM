import Book from "../models/bookModel.js";

export const addBook = async (req, res) => {
  try {
    await Book.create({
      title: "Power of Now",
      author: "Eckart Tale",
      price: 250,
      description: null,
      category: "Self Help",
      publishedYear: 2000,
    });

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
