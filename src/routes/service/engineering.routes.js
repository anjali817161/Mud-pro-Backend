import express from "express";
import { createEngineering, getEngineering, updateEngineering, deleteEngineering } from "../../modules/services/controller/service.engineering.controller.js";

const router = express.Router();

router.post("/add-engineering", createEngineering);
router.get("/get-engineering", getEngineering);
router.put("/:id", updateEngineering);
router.delete("/:id", deleteEngineering);

export default router;
