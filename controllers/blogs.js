const Blog = require("../models/blog");

exports.getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.getAllBlogs();
    return res.status(200).json(blogs);
  } catch (err) {
    next(err);
  }
};

exports.getBlog = async (req, res, next) => {
  try {
    const blog = await Blog.getSingleBlog(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "there is no blog with that id" });
    }
    return res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
};

exports.createBlog = async (req, res, next) => {
  try {
    const blog = await Blog.createBlog(req.body);
    return res
      .status(200)
      .json({ message: "new blog created successfully", blog });
  } catch (err) {
    next(err);
  }
};

exports.updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.updateBlog(req.params.id, req.body);
    return res
      .status(200)
      .json({ message: "blog updated successfully", blog });
  } catch (err) {
    next(err);
  }
};

exports.deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.deleteBlog(req.params.id);
    return res
      .status(200)
      .json({ message: "blog deleted successfully", blog });
  } catch (err) {
    next(err);
  }
};
