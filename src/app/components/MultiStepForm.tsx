// components/MultiStepForm.tsx
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface MultiStepFormProps {
  onClose: () => void;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">        
            {step === 1 && (
          <div>
            <h2>Step 1</h2>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Name:
            </label>
            <input
              className="w-full mb-2 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <button
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>Step 2</h2>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Email:
            </label>
            <input
              className="w-full mb-2 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <div className="flex justify-between">
              <button
                className="w-1/2 mr-1 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className="w-1/2 ml-1 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Step 3</h2>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Password:
            </label>
            <input
              type="password"
              name="password"
              className="w-full mb-2 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              value={formData.password}
              onChange={handleInputChange}
            />
            <div className="flex justify-between">
              <button
                className="w-1/2 mr-1 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className="w-1/2 ml-1 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
