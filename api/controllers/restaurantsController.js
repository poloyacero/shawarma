const RestoModel = require('../models/restaurants');

const restaurantsController = {};

restaurantsController.create = async (req, res) => {
  const { name, address, longitude, latitude } = req.body;
  try {
    const result = await RestoModel.create({
                     name: name,
                     address: address,
                     longitude: longitude,
                     latitude: latitude
                   });
    res.status(201).json({
      status: 'success',
      action: 'create',
      data: result
    });
  }catch(e) {
    res.status(500).json({ message: e.message });
  }
}

restaurantsController.read = async (req, res) => {
  try {
    const results = await RestoModel.find();
    res.status(201).json({
      status: 'success',
      action: 'read',
      data: results
    });
  }catch(e) {
    res.status(500).json({ message: e.message });
  }
}

restaurantsController.readSpecificResto = async (req, res) => {
  const { uid } = req.params;
  try{
    const result = await RestoModel.findById(uid);
    res.status(201).json({
      status: 'success',
      action: 'read',
      data: result
    });
  }catch(e) {
    res.status(500).json({ message: e.message });
  }
}

restaurantsController.update = async (req, res) => {
  const { uid } = req.params;
  const { name, address, longitude, latitude } = req.body;
  try {
    const result = await RestoModel.updateOne({ _id: uid }, 
                   { $set: { name: name, address: address, longitude: longitude, latitude: latitude } }, { upsert: true });
    res.status(201).json({
      status: 'success',
      action: 'update',
      data: result
    });
  }catch(e) {
    res.status(500).json({ message: e.message });
  }
}

restaurantsController.delete = async (req, res) => {
  const { uid } = req.params;
  try{
    const result = await RestoModel.deleteOne({ _id: uid });
    res.status(201).json({
      status: 'success',
      action: 'delete',
      data: result
    });
  }catch(e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = restaurantsController;