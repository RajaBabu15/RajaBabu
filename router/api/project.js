const express = require("express");
const app_project = express.Router();
// const Predict = require("../../model/Predict");
const cors = require("cors");

app_project.use(cors(
  {
    origin: "https://raja-babu-93mi.vercel.app/",
    credentials: true,
    methods:["GET", "POST" ]
  }

));
app_project.use(express.json());

app_project.post("/predict", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin','https://raja-babu-93mi.vercel.app'); 
  const {
    step,
    name,
    age,
    gender,
    country,
    state,
    self_employed,
    family_history,
    work_interfere,
    no_employees,
    remote_work,
    tech_company,
    benefits,
    care_options,
    wellness_program,
    seek_help,
    anonymity,
    leave,
    mental_health_consequence,
    phys_health_consequence,
    coworkers,
    supervisor,
    mental_health_interview,
    phys_health_interview,
    mental_vs_physical,
    obs_consequence,
  } = req.body;
  import("@gradio/client").then(async (module) => {
    const client = module.client;
    // rest of your code
    const app = await client(
      "https://rajababu15-ht-bk-gr.hf.space/--replicas/kk9xd/"
    );
    const result = await app.predict("/predict", [
      new Date().toISOString().slice(0, 19).replace("T", " "),
      age,
      gender,
      country,
      state,
      self_employed,
      family_history,
      work_interfere,
      no_employees,
      remote_work,
      tech_company,
      benefits,
      care_options,
      wellness_program,
      seek_help,
      anonymity,
      leave,
      mental_health_consequence,
      phys_health_consequence,
      coworkers,
      supervisor,
      mental_health_interview,
      phys_health_interview,
      mental_vs_physical,
      obs_consequence,
      "",
    ]);
//     let arrayValue = result.data;
// let stringValue = arrayValue[0];
//     const predictData = new Predict({
//       name,
//       timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
//       age,
//       gender,
//       country,
//       state,
//       self_employed,
//       family_history,
//       work_interfere,
//       no_employees,
//       remote_work,
//       tech_company,
//       benefits,
//       care_options,
//       wellness_program,
//       seek_help,
//       anonymity,
//       leave,
//       mental_health_consequence,
//       phys_health_consequence,
//       coworkers,
//       supervisor,
//       mental_health_interview,
//       phys_health_interview,
//       mental_vs_physical,
//       obs_consequence,
//       predict:stringValue
//     });
    // try {
    //   await predictData.save();
    //   console.log("Saved predict data");
    // } catch (err) {
    //   console.error(err);
    //   res.status(500).json({ message: "Error saving data to database" });
    // }
    res.status(200).json({ data: result.data });
  });
});

module.exports = app_project;
