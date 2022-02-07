const express = require("express");
const blogsController = require("../controllers/blogs");
const validatorErrorHandler = require("../middleware/validator-error-handler");
const { body } = require("express-validator");

const router = express.Router();

router.get("", blogsController.getAllBlogs);
router.get("/:id", blogsController.getBlog);
router.post(
  "",
  body("title").isString().exists().isLength({ min: 5 }),
  body("body")
    .isString()
    .exists(),
  validatorErrorHandler,
  blogsController.createBlog
);

router.put(
  "/:id",
  body("title").if(body("title").exists()).isString().isLength({ min: 5 }),
  body("body")
    .if(body("body").exists())
    .isString()
    .isLength({ max: 1000 })
    .withMessage("Body length should not exceed 1000 characters"),
  validatorErrorHandler,
  blogsController.updateBlog
);

router.delete("/:id", blogsController.deleteBlog);

module.exports = router;
