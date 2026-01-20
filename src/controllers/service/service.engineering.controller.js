import { Engineering } from "../../service/services.model.js";

export const createEngineering = async (req, res) => {
  try {
    const data = await Engineering.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getEngineering = async (req, res) => {
  try {
    const data = await Engineering.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateEngineering = async (req, res) => {
  try {
    const data = await Engineering.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteEngineering = async (req, res) => {
  try {
    await Engineering.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Engineering deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
