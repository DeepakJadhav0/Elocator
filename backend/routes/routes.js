import { Router } from "express";
import { facilityDemo } from "../controller/FacilityDemo.js";
import { verifiedFacility } from "../controller/VerifiedFacility.js";
import { registerController } from "../controller/registerController.js";
import loginController from "../controller/loginController.js";
import {authChecker} from "../auth/AuthChecker.js";
import { refreshtoken } from "../controller/refreshtoken.js";
import { logoutController } from "../controller/logoutController.js";

const router = Router()

router.get("/facility", authChecker,facilityDemo)
router.get("/verified", authChecker ,verifiedFacility)
router.post("/register",registerController)
router.post("/login",loginController)
router.get("/refresh-access",refreshtoken)
router.get("/logout",logoutController)

export default router;