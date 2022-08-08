const Sample = require("../models/Sample.model");

router.get("/", async (req, res, next) => {
  try {
    const samples = await Sample.find();
    res.status(200).json({ samples });
  } catch (err) {
    next(err);
  }
});
