export const checkPremium = (req, res, next) => {
  if (req.user.isPremium) next();
  else
    return next(
      new AppError(
        "You Need To Be A Premium User To Access This Resource",
        StatusCodes.FORBIDDEN
      )
    );
};
