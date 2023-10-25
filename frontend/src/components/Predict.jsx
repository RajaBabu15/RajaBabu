import { useState } from "react";

function Predict() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [self_employed, setSelfEmployed] = useState("");
  const [family_history, setFamilyHistory] = useState("");
  const [work_interfere, setWorkInterfere] = useState("");
  const [no_employees, setNoEmployees] = useState("");
  const [remote_work, setRemoteWork] = useState("");
  const [tech_company, setTechCompany] = useState("");
  const [benefits, setBenefits] = useState("");
  const [care_options, setCareOptions] = useState("");
  const [wellness_program, setWellnessProgram] = useState("");
  const [seek_help, setSeekHelp] = useState("");
  const [anonymity, setAnonymity] = useState("");
  const [leave, setLeave] = useState("");
  const [mental_health_consequence, setMentalHealthConsequence] =    useState("");
  const [phys_health_consequence, setPhysHealthConsequence] = useState("");
  const [coworkers, setCoworkers] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [mental_health_interview, setMentalHealthInterview] = useState("");
  const [phys_health_interview, setPhysHealthInterview] = useState("");
  const [mental_vs_physical, setMentalVsPhysical] = useState("");
  const [obs_consequence, setObsConsequence] = useState("");

  const nextStep = () => {
    if (
      (step === 1 && name !== "") ||
      (step === 2 && gender !== 0) ||
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
      setStep(step + 1);
    } else {
      alert("Please fill in the field before proceeding.");
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify({
      "Name": name,
      "Age": age,
      "Gender": gender,
      "Country": country,
      "State": state,
      "Self Employed": self_employed,
      "Family History": family_history,
      "Work Interfere": work_interfere,
      "No Employees": no_employees,
      "Remote Work": remote_work,
      "Tech Company": tech_company,
      "Benefits": benefits,
      "Care Options": care_options,
      "Wellness Program": wellness_program,
      "Seek Help": seek_help,
      "Anonymity": anonymity,
      "Leave": leave,
      "Mental Health Consequence": mental_health_consequence,
      "Physical Health Consequence": phys_health_consequence,
      "Coworkers": coworkers,
      "Supervisor": supervisor,
      "Mental Health Interview": mental_health_interview,
      "Physical Health Interview": phys_health_interview,
      "Mental vs Physical": mental_vs_physical,
      "Obs Consequence": obs_consequence
    }, null, 2));

    alert({
      "Name": name,
      "Age": age,
      "Gender": gender,
      "Country": country,
      "State": state,
      "Self Employed": self_employed,
      "Family History": family_history,
      "Work Interfere": work_interfere,
      "No Employees": no_employees,
      "Remote Work": remote_work,
      "Tech Company": tech_company,
      "Benefits": benefits,
      "Care Options": care_options,
      "Wellness Program": wellness_program,
      "Seek Help": seek_help,
      "Anonymity": anonymity,
      "Leave": leave,
      "Mental Health Consequence": mental_health_consequence,
      "Physical Health Consequence": phys_health_consequence,
      "Coworkers": coworkers,
      "Supervisor": supervisor,
      "Mental Health Interview": mental_health_interview,
      "Physical Health Interview": phys_health_interview,
      "Mental vs Physical": mental_vs_physical,
      "Obs Consequence": obs_consequence
    }    )
    
    
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-1/2 shadow-xl rounded-md p-8">

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
              onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="male">Male</label>
              <br />
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
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
              Age: {age}
            </label>
            <p>Please Select Your Age 👇</p>
            <input
              type="range"
              id="age"
              min="1"
              max="100"
              onChange={(e) => setAge(e.target.value)}
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
              onChange={(e) => setCountry(e.target.value)}
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
              onChange={(e) => setState(e.target.value)}
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
                onChange={(e) => setSelfEmployed(e.target.value)}
              />
              <label htmlFor="yes">Yes</label>
              <br />
              <input
                type="radio"
                id="no"
                name="self_employed"
                value="No"
                onChange={(e) => setSelfEmployed(e.target.value)}
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
              Family History
            </label>
            <p>Select Yes or No</p>
            <div
              id="family_history"
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
            >
              <input
                type="radio"
                id="yes"
                name="family_history"
                value="Yes"
                onChange={(e) => setFamilyHistory(e.target.value)}
              />
              <label htmlFor="yes">Yes</label>
              <br />
              <input
                type="radio"
                id="no"
                name="family_history"
                value="No"
                onChange={(e) => setFamilyHistory(e.target.value)}
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
              onChange={(e) => setWorkInterfere(e.target.value)}
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
              Number of Employees
            </label>
            <p>Select number of employees</p>
            <select
              id="no_employees"
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
              onChange={(e) => setNoEmployees(e.target.value)}
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
            <p>Select Yes or No</p>
            <div
              id="remote_work"
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
            >
              <input
                type="radio"
                id="yes"
                name="remote_work"
                value="Yes"
                onChange={(e) => setRemoteWork(e.target.value)}
              />
              <label htmlFor="yes">Yes</label>
              <br />
              <input
                type="radio"
                id="no"
                name="remote_work"
                value="No"
                onChange={(e) => setRemoteWork(e.target.value)}
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
            <p>Select Yes or No</p>
            <div
              id="tech_company"
              className="block w-full px -4 py -2 rounded -md border -gray -300 shadow -sm focus:border -blue -500 focus:outline -none text -lg"
            >
              <input
                type="radio"
                id="yes"
                name="tech_company"
                value="Yes"
                onChange={(e) => setTechCompany(e.target.value)}
              />
              <label htmlFor="yes"> Yes </label>
              <br />
              <input
                type="radio"
                id="no"
                name="tech_company"
                value="No"
                onChange={(e) => setTechCompany(e.target.value)}
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
              onChange={(e) => setBenefits(e.target.value)}
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
              onChange={(e) => setCareOptions(e.target.value)}
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
              className="block w-full px -4 py -2 rounded -md border -gray -300 shadow -sm focus:border -blue -500 focus:outline -none text -lg"
              onChange={(e) => setWellnessProgram(e.target.value)}
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
              className="block w-full px -4 py -2 rounded -md border -gray -300 shadow -sm focus:border -blue -500 focus:outline -none text -lg"
              onChange={(e) => setSeekHelp(e.target.value)}
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
              className="block w-full px -4 py -2 rounded -md border -gray -300 shadow -sm focus:border -blue -500 focus:outline -none text -lg"
              onChange={(e) => setAnonymity(e.target.value)}
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
              className="block w-full px -4 py -2 rounded -md border -gray -300 shadow -sm focus:border -blue -500 focus:outline -none text -lg"
              onChange={(e) => setLeave(e.target.value)}
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
              onChange={(e) => setMentalHealthConsequence(e.target.value)}
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
              onChange={(e) => setPhysHealthConsequence(e.target.value)}
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
              className="block w-full px -4 py -2 rounded -md border -gray -300 shadow -sm focus:border -blue -500 focus:outline -none text -lg"
              onChange={(e) => setCoworkers(e.target.value)}
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
              className="block w-full px -4 py -2 rounded -md border -gray -300 shadow -sm focus:border -blue -500 focus:outline -none text -lg"
              onChange={(e) => setSupervisor(e.target.value)}
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
              onChange={(e) => setMentalHealthInterview(e.target.value)}
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
              onChange={(e) => setPhysHealthInterview(e.target.value)}
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
              className="block w-full px -4 py -2 rounded -md border -gray -300 shadow -sm focus:border -blue -500 focus:outline -none text -lg"
              onChange={(e) => setMentalVsPhysical(e.target.value)}
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
              className="block w-full px -4 py -2 rounded -md border -gray -300 shadow -sm focus:border -blue -500 focus:outline -none text -lg"
            >
              <input
                type="radio"
                id="yes"
                name="obs_consequence"
                value="Yes"
                onChange={(e) => setObsConsequence(e.target.value)}
              />
              <label htmlFor="yes"> Yes </label>
              <br />
              <input
                type="radio"
                id="no"
                name="obs_consequence"
                value="No"
                onChange={(e) => setObsConsequence(e.target.value)}
              />
              <label htmlFor="no"> No </label>
              <br />
            </div>
          </div>
        )}

        {step > 1 && (
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
            className={`mt-8 px-4 py-2 text-white rounded hover:${obs_consequence !== '' ? 'bg-green-700' : 'bg-gray-600'} ${
              obs_consequence !== "" ? "bg-green-600" : "bg-gray-600"
            }`}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default Predict;
