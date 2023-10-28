import { observer } from "mobx-react";
import formDataStore from "./formStoreData";
import ProgressBar from 'react-progressbar';

const Predict = observer(() => {
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
  } = formDataStore;

  const handleChange = (event) => {
    formDataStore.setField(event.target.name, event.target.value);
  };

  const nextStep = () => {
    if (
      step === 0 ||
      (step === 1 && name !== "") ||
      (step === 2 && gender !== "") ||
      (step === 3 && age !== "") ||
      (step === 4 && country !== "") ||
      (step === 5 && state !== "") ||
      (step === 6 && self_employed !== "") ||
      (step === 7 && family_history !== "") ||
      (step === 8 && work_interfere !== "") ||
      (step === 9 && no_employees !== "") ||
      (step === 10 && remote_work !== "") ||
      (step === 11 && tech_company !== "") ||
      (step === 12 && benefits !== "") ||
      (step === 13 && care_options !== "") ||
      (step === 14 && wellness_program !== "") ||
      (step === 15 && seek_help !== "") ||
      (step === 16 && anonymity !== "") ||
      (step === 17 && leave !== "") ||
      (step === 18 && mental_health_consequence !== "") ||
      (step === 19 && phys_health_consequence !== "") ||
      (step === 20 && coworkers !== "") ||
      (step === 21 && supervisor !== "") ||
      (step === 22 && mental_health_interview !== "") ||
      (step === 23 && phys_health_interview !== "") ||
      (step === 24 && mental_vs_physical !== "") ||
      (step === 25 && obs_consequence !== "")
    ) {
      formDataStore.setField("step", step + 1);
    } else {
      alert("Please fill in the field before proceeding.");
    }
  };

  const prevStep = () => {
    formDataStore.setField("step", step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formDataStore, null, 2));
    alert(formDataStore);
  };
  const progress = (step / 25) * 100;

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-1/2 shadow-xl rounded-md p-8">

      <ProgressBar completed={progress} />
        {step === 0 && (
          <div>
            <h2 className="underline text-2xl font-medium text-gray-700 mb-2">
              🧠 <span className="text-blue-500">Mental Health Prediction</span>
            </h2>
            <p>
              Welcome to the{" "}
              <span className="font-bold text-blue-500">
                Mental Health Prediction
              </span>{" "}
              page. This page uses a predictive model to estimate your mental
              health status based on various parameters. The parameters include
              demographic information, work environment, and personal
              perceptions about mental health. Please provide accurate responses
              to ensure the best prediction.📝
            </p>
            <p>
              The prediction model considers factors such as age, gender,
              country of residence, employment status, family history of mental
              health issues, and more. It also considers your work environment,
              including the number of employees in your organization, whether
              you work remotely or in a tech company, and the mental health
              policies and resources provided by your employer.🏢
            </p>
            <p>
              The model also considers your perceptions about discussing mental
              health issues at work and during job interviews, as well as your
              willingness to discuss these issues with coworkers and
              supervisors.💼
            </p>
            <p className="font-bold text-red-500">
              By analyzing these factors, the model can predict your mental
              health status. This prediction is not a diagnosis and should not
              replace professional medical advice. Mental health is a serious
              issue that requires attention and care. If you're feeling unwell,
              please seek help from a healthcare professional.🩺💕
            </p>
            <p className="text-lg font-semibold">
              Mental health is a serious issue, and seeking help is important if
              you're struggling. Here are some resources that can help:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href="https://www.mentalhealth.gov/"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  MentalHealth.gov
                </a>
              </li>
              <li>
                <a
                  href="https://www.nami.org/"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  National Alliance on Mental Illness (NAMI)
                </a>
              </li>
            </ul>
          </div>
        )}

        {step === 1 && (
          <div>
            <label
              htmlFor="name"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <p>Please Enter Your Name 👇</p>
            <input
              type="text"
              id="name"
              name="name"
              value={formDataStore.name}
              onChange={handleChange}
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <label
              htmlFor="gender"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Gender
            </label>
            <p>Please Select Your Gender 👇</p>
            <div
              id="gender"
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
            >
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={formDataStore.gender === "Male"}
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
              <br />
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={formDataStore.gender === "Female"}
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
              <br />
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <label
              htmlFor="age"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Age: {formDataStore.age}
            </label>
            <p>Please Select Your Age 👇</p>
            <input
              type="range"
              id="age"
              name="age"
              min="1"
              max="100"
              value={formDataStore.age}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
            />
          </div>
        )}

        {step === 4 && (
          <div>
            <label
              htmlFor="country"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Country
            </label>
            <p>Select Country</p>
            <select
              id="country"
              name="country"
              value={formDataStore.country}
              onChange={handleChange}
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
            >
              <option value="">Select...</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="France">France</option>
              <option value="Portugal">Portugal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Poland">Poland</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="Russia">Russia</option>
              <option value="Mexico">Mexico</option>
              <option value="Brazil">Brazil</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Austria">Austria</option>
              <option value="Ireland">Ireland</option>
              <option value="India">India</option>
              <option value="South Africa">South Africa</option>
              <option value="Italy">Italy</option>
              <option value="Sweden">Sweden</option>
              <option value="Colombia">Colombia</option>
              <option value="Latvia">Latvia</option>
              <option value="Romania">Romania</option>
              <option value="Belgium">Belgium</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Zimbabwe">Zimbabwe</option>
              <option value="Spain">Spain</option>
              <option value="Finland">Finland</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Israel">Israel</option>
              <option value="Bosnia and Herzegovina">
                Bosnia and Herzegovina
              </option>
              <option value="Hungary">Hungary</option>
              <option value="Singapore">Singapore</option>
              <option value="Japan">Japan</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Croatia">Croatia</option>
              <option value="Norway">Norway</option>
              <option value="Thailand">Thailand</option>
              <option value="Denmark">Denmark</option>
              <option value="Bahamas, The">Bahamas, The</option>
              <option value="Greece">Greece</option>
              <option value="Moldova">Moldova</option>
              <option value="Georgia">Georgia</option>
              <option value="China">China</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Philippines">Philippines</option>
            </select>
          </div>
        )}

        {step === 5 && (
          <div>
            <label
              htmlFor="state"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              State
            </label>
            <p>Enter state if applicable</p>
            <input
              type="text"
              id="state"
              name="state"
              value={formDataStore.state}
              onChange={handleChange}
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
            />
          </div>
        )}

        {step === 6 && (
          <div>
            <label
              htmlFor="self_employed"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Self Employed
            </label>
            <p>Select Yes or No</p>
            <div
              id="self_employed"
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
            >
              <input
                type="radio"
                id="yes"
                name="self_employed"
                value="Yes"
                checked={formDataStore.self_employed === "Yes"}
                onChange={handleChange}
              />
              <label htmlFor="yes">Yes</label>
              <br />
              <input
                type="radio"
                id="no"
                name="self_employed"
                value="No"
                checked={formDataStore.self_employed === "No"}
                onChange={handleChange}
              />
              <label htmlFor="no">No</label>
              <br />
            </div>
          </div>
        )}

        {step === 7 && (
          <div>
            <label
              htmlFor="family_history"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Family History of Mental Health
            </label>
            <p>
              Does your family have a history of mental health issues? Please
              select 'Yes' or 'No'.
            </p>
            <div
              id="family_history"
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
            >
              <input
                type="radio"
                id="yes"
                name="family_history"
                value="Yes"
                checked={formDataStore.family_history === "Yes"}
                onChange={handleChange}
              />
              <label htmlFor="yes">Yes</label>
              <br />
              <input
                type="radio"
                id="no"
                name="family_history"
                value="No"
                checked={formDataStore.family_history === "No"}
                onChange={handleChange}
              />
              <label htmlFor="no">No</label>
              <br />
            </div>
          </div>
        )}

        {step === 8 && (
          <div>
            <label
              htmlFor="work_interfere"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Work Interference
            </label>
            <p>Select how often work interferes with mental health</p>
            <select
              id="work_interfere"
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
              name="work_interfere"
              value={formDataStore.work_interfere}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Often">Often</option>
              <option value="Rarely">Rarely</option>
              <option value="Never">Never</option>
            </select>
          </div>
        )}

        {step === 9 && (
          <div>
            <label
              htmlFor="no_employees"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Size of Your Workplace
            </label>
            <p>
              How many employees are there in your current workplace? Please
              select the appropriate range.
            </p>
            <select
              id="no_employees"
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
              name="no_employees"
              value={formDataStore.no_employees}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="1-5">1-5</option>
              <option value="6-25">6-25</option>
              <option value="26-100">26-100</option>
              <option value="100-500">100-500</option>
              <option value="500-1000">500-1000</option>
              <option value="More than 1000">More than 1000</option>
            </select>
          </div>
        )}

        {step === 10 && (
          <div>
            <label
              htmlFor="remote_work"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Remote Work
            </label>
            <p>Do you work remotely? Please select 'Yes' or 'No'.</p>
            <div
              id="remote_work"
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
            >
              <input
                type="radio"
                id="yes"
                name="remote_work"
                value="Yes"
                checked={formDataStore.remote_work === "Yes"}
                onChange={handleChange}
              />
              <label htmlFor="yes">Yes</label>
              <br />
              <input
                type="radio"
                id="no"
                name="remote_work"
                value="No"
                checked={formDataStore.remote_work === "No"}
                onChange={handleChange}
              />
              <label htmlFor="no">No</label>
              <br />
            </div>
          </div>
        )}

        {step === 11 && (
          <div>
            <label
              htmlFor="tech_company"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Tech Company
            </label>
            <p>
              Are you currently employed at a tech company? Please select 'Yes'
              or 'No'.
            </p>
            <div
              id="tech_company"
              className="block w-full px -4 py -2 rounded -md shadow -sm focus:border -blue -500 focus:outline -none text -lg"
            >
              <input
                type="radio"
                id="yes"
                name="tech_company"
                value="Yes"
                checked={formDataStore.tech_company === "Yes"}
                onChange={handleChange}
              />
              <label htmlFor="yes"> Yes </label>
              <br />
              <input
                type="radio"
                id="no"
                name="tech_company"
                value="No"
                checked={formDataStore.tech_company === "No"}
                onChange={handleChange}
              />
              <label htmlFor="no"> No </label>
              <br />
            </div>
          </div>
        )}

        {step === 12 && (
          <div>
            <label
              htmlFor="benefits"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Benefits
            </label>
            <p>Select if the employer provides mental health benefits</p>
            <select
              id="benefits"
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
              name="benefits"
              value={formDataStore.benefits}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Don't know">Don't know</option>
            </select>
          </div>
        )}

        {step === 13 && (
          <div>
            <label
              htmlFor="care_options"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Care Options
            </label>
            <p>
              Select if the employer provides care options for mental health
              issues
            </p>
            <select
              id="care_options"
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg" 
              name="care_options"
              value={formDataStore.care_options}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
        )}

        {step === 14 && (
          <div>
            <label
              htmlFor="wellness_program"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Wellness Program
            </label>
            <p>Select if the employer offers a wellness program</p>
            <select
              id="wellness_program"
              className="block w-full px -4 py -2 rounded -md shadow -sm focus:border -blue -500 focus:outline -none text -lg"
              name="wellness_program"
              value={formDataStore.wellness_program}
              onChange={handleChange}
            >
              <option value=""> Select... </option>{" "}
              <option value="Yes"> Yes </option>{" "}
              <option value="No"> No </option>{" "}
              <option value="Don't know"> Don't know </option>
            </select>
          </div>
        )}

        {step === 15 && (
          <div>
            <label
              htmlFor="seek_help"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Seek Help
            </label>
            <p>
              Select if the employer provides resources to seek help for mental
              health issues
            </p>
            <select
              id="seek_help"
              className="block w-full px -4 py -2 rounded -md shadow -sm focus:border -blue -500 focus:outline -none text -lg"
              name="seek_help"
              value={formDataStore.seek_help}
              onChange={handleChange}
            >
              <option value=""> Select... </option>{" "}
              <option value="Yes"> Yes </option>{" "}
              <option value="No"> No </option>{" "}
              <option value="Don't know"> Don't know </option>
            </select>
          </div>
        )}

        {step === 16 && (
          <div>
            <label
              htmlFor="anonymity"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Anonymity
            </label>
            <p>
              Select if the employer protects anonymity when seeking help for
              mental health issues
            </p>
            <select
              id="anonymity"
              className="block w-full px -4 py -2 rounded -md shadow -sm focus:border -blue -500 focus:outline -none text -lg"
              name="anonymity"
              value={formDataStore.anonymity}
              onChange={handleChange}
            >
              <option value=""> Select... </option>{" "}
              <option value="Yes"> Yes </option>{" "}
              <option value="No"> No </option>{" "}
              <option value="Don't know"> Don't know </option>
            </select>
          </div>
        )}

        {step === 17 && (
          <div>
            <label
              htmlFor="leave"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Leave
            </label>
            <p>Select how easy it is to take leave for mental health issues</p>
            <select
              id="leave"
              className="block w-full px -4 py -2 rounded -md shadow -sm focus:border -blue -500 focus:outline -none text -lg"
              name="leave"
              value={formDataStore.leave}
              onChange={handleChange}
            >
              <option value=""> Select... </option>{" "}
              <option value="Very easy"> Very easy </option>{" "}
              <option value="Somewhat easy"> Somewhat easy </option>{" "}
              <option value="Somewhat difficult"> Somewhat difficult </option>{" "}
              <option value="Very difficult"> Very difficult </option>
            </select>
          </div>
        )}

        {step === 18 && (
          <div>
            <label
              htmlFor="mental_health_consequence"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Mental Health Consequence
            </label>
            <p>
              Select if there are consequences for discussing mental health
              issues with the employer
            </p>
            <select
              id="mental_health_consequence"
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
              name="mental_health_consequence"
              value={formDataStore.mental_health_consequence}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="Maybe">Maybe</option>
              <option value="No">No</option>
            </select>
          </div>
        )}

        {step === 19 && (
          <div>
            <label
              htmlFor="phys_health_consequence"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Physical Health Consequence
            </label>
            <p>
              Select if there are consequences for discussing physical health
              issues with the employer
            </p>
            <select
              id="phys_health_consequence"
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
              name="phys_health_consequence"
              value={formDataStore.phys_health_consequence}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="Maybe">Maybe</option>
              <option value="No">No</option>
            </select>
          </div>
        )}

        {step === 20 && (
          <div>
            <label
              htmlFor="coworkers"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Coworkers
            </label>
            <p>
              Select if you are willing to discuss mental health issues with
              your coworkers
            </p>
            <select
              id="coworkers"
              className="block w-full px -4 py -2 rounded -md shadow -sm focus:border -blue -500 focus:outline -none text -lg"
              name="coworkers"
              value={formDataStore.coworkers}
              onChange={handleChange}
            >
              <option value=""> Select... </option>{" "}
              <option value="Yes"> Yes </option>{" "}
              <option value="Some of them"> Some of them </option>{" "}
              <option value="No"> No </option>
            </select>
          </div>
        )}

        {step === 21 && (
          <div>
            <label
              htmlFor="supervisor"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Supervisor
            </label>
            <p>
              Select if you are willing to discuss mental health issues with
              your supervisor
            </p>
            <select
              id="supervisor"
              className="block w-full px -4 py -2 rounded -md shadow -sm focus:border -blue -500 focus:outline -none text -lg"
              name="supervisor"
              value={formDataStore.supervisor}
              onChange={handleChange}
            >
              <option value=""> Select... </option>{" "}
              <option value="Yes"> Yes </option>{" "}
              <option value="Some of them"> Some of them </option>{" "}
              <option value="No"> No </option>
            </select>
          </div>
        )}

        {step === 22 && (
          <div>
            <label
              htmlFor="mental_health_interview"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Mental Health Interview
            </label>
            <p>
              Select if you would bring up mental health issues in a job
              interview
            </p>
            <select
              id="mental_health_interview"
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
              name="mental_health_interview"
              value={formDataStore.mental_health_interview}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="Maybe">Maybe</option>
              <option value="No">No</option>
            </select>
          </div>
        )}

        {step === 23 && (
          <div>
            <label
              htmlFor="phys_health_interview"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Physical Health Interview
            </label>
            <p>
              Select if you would bring up physical health issues in a job
              interview
            </p>
            <select
              id="phys_health_interview"
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
              name="phys_health_interview"
              value={formDataStore.phys_health_interview}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="Maybe">Maybe</option>
              <option value="No">No</option>
            </select>
          </div>
        )}

        {step === 24 && (
          <div>
            <label
              htmlFor="mental_vs_physical"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Mental vs Physical
            </label>
            <p>
              Select if you think that your employer takes mental health as
              seriously as physical health
            </p>
            <select
              id="mental_vs_physical"
              className="block w-full px -4 py -2 rounded -md shadow -sm focus:border -blue -500 focus:outline -none text -lg"
              name="mental_vs_physical"
              value={formDataStore.mental_vs_physical}
              onChange={handleChange}
            >
              <option value=""> Select... </option>{" "}
              <option value="Yes"> Yes </option>{" "}
              <option value="Maybe"> Maybe </option>{" "}
              <option value="No"> No </option>
            </select>
          </div>
        )}

        {step === 25 && (
          <div>
            <label
              htmlFor="obs_consequence"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Obs Consequence
            </label>
            <p>Select Yes or No</p>
            <div
              id="obs_consequence"
              className="block w-full px -4 py -2 rounded -md shadow -sm focus:border -blue -500 focus:outline -none text -lg"
            >
              <input
                type="radio"
                id="yes"
                name="obs_consequence"
                value="Yes"
                checked={formDataStore.obs_consequence === "Yes"}
                onChange={handleChange}
              />
              <label htmlFor="yes"> Yes </label>
              <br />
              <input
                type="radio"
                id="no"
                name="obs_consequence"
                value="No"
                checked={formDataStore.obs_consequence === "No"}
                onChange={handleChange}
              />
              <label htmlFor="no"> No </label>
              <br />
            </div>
          </div>
        )}

        {step > 0 && (
          <button
            type="button"
            onClick={prevStep}
            className="mt-8 px-4 py-2 mx-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Previous
          </button>
        )}

        {step < 25 && (
          <button
            type="button"
            onClick={nextStep}
            className="mt-8 px-4 py-2  bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Next
          </button>
        )}

        {step === 25 && (
          <button
            type="submit"
            disabled={obs_consequence === ""}
            className={`mt-8 px-4 py-2 text-white rounded hover:${
              obs_consequence !== "" ? "bg-green-700" : "bg-gray-600"
            } ${obs_consequence !== "" ? "bg-green-600" : "bg-gray-600"}`}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
});

export default Predict; 