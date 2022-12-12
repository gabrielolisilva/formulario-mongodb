const Data = require("../models/data");

const getAllData = async (req, res) => {
  try {
    const allData = await Data.find({});
    res.status = 201;
    res.json({ allData });
  } catch (error) {
    res.status = 500;
    res.json({ msg: error });
  }
};

const createData = async (req, res) => {
  try {
    const task = await Data.create(req.body);
    res.status = 201;
    res.json({ task });
  } catch (error) {
    res.status = 500;
    res.json({ msg: error });
  }
};

module.exports = {
  getAllData,
  createData,
};
