const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

blogSchema.statics.getAllBlogs = async function () {
  const blogs = await this.find().sort({createdAt:-1});
  return blogs;
};

blogSchema.statics.getSingleBlog = async function (id) {
  const blog = await this.findById(id);
  return blog;
};

blogSchema.statics.createBlog = async function (body) {
  const newBlog = await this.create(body);
  return newBlog;
};

blogSchema.statics.updateBlog = async function (id, body) {
  const updatedBlog = await this.findByIdAndUpdate(id, body, { new: true });
  return updatedBlog;
};

blogSchema.statics.deleteBlog = async function (id) {
  const deletedBlog = await this.findByIdAndDelete(id);
  return deletedBlog;
};

module.exports = mongoose.model("Blog", blogSchema);
