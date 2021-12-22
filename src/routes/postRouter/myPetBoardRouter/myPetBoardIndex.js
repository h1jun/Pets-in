const { Router } = require("express");

const router = Router();

const { isLoggedIn, setLoggedInStatus } = require("../../../middlewares");

const {
  getPosts,
  getPostDetail,
  getWritePage,
} = require("./myPetBoardController");

router.get("/", setLoggedInStatus, getPosts); // 게시물 전체 라우터
router.get("/:id", setLoggedInStatus, getPostDetail); // 상세 페이지 라우터
router.get("/writePage", isLoggedIn, getWritePage);
module.exports = router;