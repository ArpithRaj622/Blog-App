const Express = require("express");

const blogRoute = Express.Router();

blogRoute.get("/", getAllBlogs);
blogRoute.get("/:id", getBlogById);
blogRoute.post("/", addBlog);
blogRoute.put("/:id", updateBlog);
blogRoute.delete("/:id", deleteBlog);
blogRoute.get("/user/:userid", getBlogByUserId);

module.exports = blogRoute;