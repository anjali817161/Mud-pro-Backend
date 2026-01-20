import express from "express";
import { createService, getServices, updateService, deleteService } from "../../modules/services/controller/service.controller.js";

const router = express.Router();

router.post("/add-service", createService);
router.get("/get-service", getServices);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

export default router;
