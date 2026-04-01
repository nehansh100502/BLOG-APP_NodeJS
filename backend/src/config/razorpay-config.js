import Razorpay from "razorpay";
import { RAZORPAY } from "./index.js";
let razorpay = new Razorpay({
  api_id: RAZORPAY.API_ID,
  key_secret: RAZORPAY.KEY_SECRET,
});

export default razorpay;
