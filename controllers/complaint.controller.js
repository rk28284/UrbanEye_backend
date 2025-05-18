const Complaint = require("../model/complaint.model");

const getComplaint = async (req, res) => {

  try {
    const complaints = await Complaint.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch complaints' });
  }
};

const addComplaint = async (req, res) => {
  

  try {
    const { title, description, imageUrl, location } = req.body;
    const complaint = await Complaint.create({
      user: req.user.id,
      title,
      description,
      imageUrl,
      location
    });
    res.status(201).json(complaint);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create complaint' });
  }
};


const updateComplaint = async (req, res) => {
  try {
    const { status } = req.body;
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: Date.now() },
      { new: true }
    );
    res.json(complaint);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update status' });
  }
};


const getSingleComplaint = async (req, res) => {
    try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) return res.status(404).json({ error: 'Complaint not found' });
    res.json(complaint);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch complaint' });
  }
};

module.exports = {

getComplaint,getSingleComplaint,updateComplaint,addComplaint

};

