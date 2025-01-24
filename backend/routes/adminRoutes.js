import { Router } from "express";
import { handler, loginHandler, logoutHandler, signupHandler } from "../controllers/adminHandlers.js";

const router = Router();

router.get('/', handler);
router.post('/login', loginHandler);
router.post('/signup', signupHandler);

router.get('/logout', logoutHandler);


export default router;