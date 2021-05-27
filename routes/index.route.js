import express from "express";

const router = express.Router();
router.all("/", (req, res, next) => {
    const data = {
        "status": "success",
        "body": req.body,
        "header": JSON.stringify(req.headers),
        "path": req.path,
        "query": req.query,
        "params": req.params
    };
    console.log(data);
    res.status(200).json(data);
});

export default router;