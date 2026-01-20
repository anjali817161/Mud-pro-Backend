import { Package } from "../../service/services.model.js";

// CREATE
export const createPackage = async (req, res) => {
  try {
    const data = await Package.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET ALL
export const getPackages = async (req, res) => {
  try {
    const data = await Package.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// UPDATE
export const updatePackage = async (req, res) => {
  try {
    const data = await Package.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE
export const deletePackage = async (req, res) => {
  try {
    await Package.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Package deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
