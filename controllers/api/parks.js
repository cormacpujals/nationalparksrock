const Park = require('../../models/park');

module.exports = {
  index,
  toggleAdd,
};

async function index(req, res) {
  // icebox feature for pagination
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

async function toggleAdd(req, res) {
  const park = await Park.findById(req.body.parkId) 
  if (park.usersArray.includes(req.user._id)) {
    park.usersArray.remove(req.user._id)
  } else {
    park.usersArray.push(req.user._id)
  }
  await park.save()
  res.json(park)
}
