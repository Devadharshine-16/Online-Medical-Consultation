import Appointment from "../models/Appointment.js";

export const createAppointment = async (req, res) => {
  try {
    const { doctor, date } = req.body;
    const patient = req.user.id;

    const appointment = new Appointment({
      patient,
      doctor,
      date,
    });

    await appointment.save();
    res.status(201).json({ msg: "Appointment booked successfully", appointment });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ patient: req.user.id })
      .populate("doctor", "name specialization");
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
