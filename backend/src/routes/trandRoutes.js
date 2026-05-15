import express from "express";

const router = express.Router()

router.post("/", createTrand)
router.get("/", getTrands)
router.get("/:trandId", deleteTrand)


export default router