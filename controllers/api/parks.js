const Park = require('../../models/park');

module.exports = {
  index,
};

async function index(req, res) {
  // const { page = 1, limit = 50 } = req.query;

  // try {
  //   const parks = await Park.find({})
  //   .limit(limit * 1)
  //   .skip((page - 1) * limit)
  //   .exec();

  //   const count = await Park.count();

  //   res.json({
  //     parks,
  //     totalPages: Math.ceil(count / limit),
  //     currentPage: page
  //   });
  // } catch (err) {
  //   console.log(err);
  // }
  const parks = await Park.find({});
  res.json(parks);
};