import { Router } from "express";
const router = Router();

/** import all controllers */
import * as controller from '../controllers/student/appController.js';
import { registerMail } from '../controllers/mailer.js'
import Auth, { localVariables } from '../middleware/auth.js';



/** POST Methods */
router.route('/student/register').post(controller.register); // register student
router.route('/student/registerMail').post(registerMail); // send the email
router.route('/student/authenticate').post(controller.verifyStudent, (req, res) => res.end()); // authenticate student
router.route('/student/login').post(controller.verifyStudent,controller.login); // login in app

/** GET Methods */
router.route('/student/generateOTP').get(controller.verifyStudent, localVariables, controller.generateOTP) // generate random OTP
router.route('/student/verifyOTP').get(controller.verifyStudent, controller.verifyOTP) // verify generated OTP
router.route('/student/createResetSession').get(controller.createResetSession) // reset all the variables
router.route('/student/checkone').get(controller.checkone) // checkpoint one
router.route('/student/:username').get(controller.getStudent) // student with username


/** PUT Methods */
router.route('/student/updateuser').put(Auth, controller.updateUser); // is use to update the student profile
router.route('/student/resetPassword').put(controller.verifyStudent, controller.resetPassword); // use to reset password



export default router;