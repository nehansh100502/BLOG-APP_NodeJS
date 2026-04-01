//! create payment
//! verify payment

//?payment mode = razorpay
import { AI } from "../config/index.js";
export const createPayment = async (req, res, next) => {
  try {
    //? create order in razorpay
    let amount = AI_AI_FEATURE_PRICE;
    razorpay.orders.create(
      {
        amount,
        currency: "INR",
        receipt: `receipt_${req.user._id}`,
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else console.log(data);
      }
    );
  } catch (error) {
    next(error);
  }
};

export const verifyPayment = async (req, res, next) => {
  try {
    //? verify payment signature
    //? update user to premium
  } catch (error) {
    next(error);
  }
};
