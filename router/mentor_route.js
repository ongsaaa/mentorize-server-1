import { Router } from "express";
const router = Router();

/** import all controllers */
import * as controller from '../controllers/mentor/appController.js';
import { registerMail } from '../controllers/mailer.js'
import Auth, { localVariables } from '../middleware/auth.js';



/** POST Methods */
router.route('/mentor/register').post(controller.register); // register mentor
router.route('/mentor/registerMail').post(registerMail); // send the email
router.route('/mentor/authenticate').post(controller.verifyMentor, (req, res) => res.end()); // authenticate mentor
router.route('/mentor/login').post(controller.verifyMentor,controller.login); // login in app

/** GET Methods */
router.route('/mentor/:username').get(controller.getMentor) // mentor with mentor
router.route('/mentor/generateOTP').get(controller.verifyMentor, localVariables, controller.generateOTP) // generate random OTP
router.route('/mentor/verifyOTP').get(controller.verifyMentor, controller.verifyOTP) // verify generated OTP
router.route('/mentor/createResetSession').get(controller.createResetSession) // reset all the variables
router.route('/mentor/checkone').get(controller.checkone) // checkpoint one


/** PUT Methods */
router.route('/mentor/updatementor').put(Auth, controller.updateMentor); // is use to update the mentor profile
router.route('/mentor/resetPassword').put(controller.verifyMentor, controller.resetPassword); // use to reset password



export default router;