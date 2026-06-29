export const checkTime = (req, res, next) => {
  const date = new Date();
  if (date.getHours() >= 17) {
    next();
  } else {
    res.json({
      message: "api will live after 5PM.",
    });
  }
};
