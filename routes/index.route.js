import express from "express";

const router = express.Router();
router.get("/", (req, res, next) => {
    console.log(req);
    res.status(200).json({"status": "success"});
});

export default router;