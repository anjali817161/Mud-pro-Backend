import express from "express";
import { createPackage, getPackages, updatePackage, deletePackage } from "../../controllers/service/servicepackage.controller.js";

const router = express.Router();

router.post("/add-package", createPackage);
router.get("/get-package", getPackages);
router.put("/:id", updatePackage);
router.delete("/:id", deletePackage);

export default router;
