import { Router } from "express";
import { saveOperators, getOperators } from "../../controllers/operator/operator.controller.js";

const router = Router();

router.post("/add-operators", saveOperators);
router.get("/get-operators", getOperators);

export default router;
