const express = require("express");
const {
  fetchQuotes,
  updateQuotes,
  deleteQuotes,
  addQuotes,
  fetchQuote,
} = require("../controllers/quoteController");
const router = express.Router();

//RestFul API'S
router.route("/").get(fetchQuotes).post(addQuotes);

router
  .route("/quote/:quoteId")
  .get(fetchQuote)
  .patch(updateQuotes)
  .delete(deleteQuotes);

module.exports = router;
