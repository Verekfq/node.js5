const { Router } = require("express");
const router = new Router();
//зарегали группу маршрутов
const routerComments = require("./comments.route");
const routerNews = require("./news.route");

router.use("/comments", routerComments);
router.use("/news", routerNews);

module.exports = router;
