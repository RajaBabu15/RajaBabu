import { useState } from 'react';

function Predict() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');

  const nextStep = () => {
    if ((step === 1 && name !== '') || (step === 2 && age !== 0)||(step === 3 && name !== '')) {
      setStep(step + 1);
    } else {
      alert('Please fill in the field before proceeding.');
    }
  };


  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const greeting = gender === 'Male' ? 'Hi' : 'Hiiiii';
    alert(`${greeting} ${name}, you are ${age} years old.`);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 shadow-xl rounded-md p-8"
      >
        {step === 1 && (
          <div>
            <label
              htmlFor="name"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Name
            </label>
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
              htmlFor="age"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Age: {age}
            </label>
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
        {step === 3 && (
          <div>
            <label
              htmlFor="gender"
              className="block text-2xl font-medium text-gray-700 mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              onChange={(e) => setGender(e.target.value)}
              className="block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none text-lg"
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
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

        {step < 3 && (
          <button
            type="button"
            onClick={nextStep}
            className="mt-8 px-4 py-2  bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Next
          </button>
        )}

        {step === 3 && (
          <button
            type="submit"
            disabled={gender === ''}
            className={`mt-8 px-4 py-2 text-white rounded hover:{gender !== '' ? 'bg-green-700' : 'bg-gray-600'} ${gender !== '' ? 'bg-green-600' : 'bg-gray-600'}`}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default Predict;
