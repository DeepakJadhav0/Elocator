import { Router } from "express";
import { facilityDemo } from "../controller/FacilityDemo.js";
import { verifiedFacility } from "../controller/VerifiedFacility.js";

const router = Router()

router.get("/facility", facilityDemo)
router.get("/verified",verifiedFacility)

export default router;