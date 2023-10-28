const mongoose = require("mongoose");
// MongoDB connection string
const uri = process.env.URI1;

// Connect to MongoDB
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected(Predict)..."))
    .catch((err) => console.log(err));

const PredictSchema = new mongoose.Schema({
    name: String,
    timestamp: String,
    age: Number,
    gender: String,
    country: String,
    state: String,
    self_employed: String,
    family_history: String,
    work_interfere: String,
    no_employees: String,
    remote_work: String,
    tech_company: String,
    benefits: String,
    care_options: String,
    wellness_program: String,
    seek_help: String,
    anonymity: String,
    leave: String,
    mental_health_consequence: String,
    phys_health_consequence: String,
    coworkers: String,
    supervisor: String,
    mental_health_interview: String,
    phys_health_interview: String,
    mental_vs_physical: String,
    obs_consequence: String,
    predict: String
});

const Predict = mongoose.model("PREDICT", PredictSchema, "PredictCollection");


module.exports = Predict;
