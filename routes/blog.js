import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
} from "../controllers/blog.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.post("/create", createBlog);
router.put("/update/:id", updateBlog);
router.delete("/:id", deleteBlog);
