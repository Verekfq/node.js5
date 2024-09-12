const { Router } = require("express");

const router = new Router();

router.get("/", (req, res) => {
  res.end("/");
});
router.get("/best", (req, res) => {
  res.end("/best");
});
router.get("/:id", () => {});
router.post("/", () => {});
router.put("/", () => {});
router.delete("/", () => {});

module.exports = router;
