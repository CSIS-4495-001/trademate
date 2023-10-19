// components/MultiStepForm.tsx
import React, { useState } from "react";

interface FormData {
  item_name: string;
  item_description: string;
  item_location: string;
  item_price: string;
  item_pictures: string[]; // Add this property for storing image URLs or file objects
}

interface MultiStepFormProps {
  onClose: () => void;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    item_name: "",
    item_description: "",
    item_location: "",
    item_price: "",
    item_pictures: [], // Initialize the new property
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files) {
      // Handle file input
      const picturesArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setFormData((prevData) => ({ ...prevData, [name]: picturesArray }));
    } else {
      // Handle other input types
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
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
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded w-full max-w-md">
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
                value={formData.item_name}
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
                Description:
              </label>
              <input
                className="w-full mb-2 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                value={formData.item_description}
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
                Price:
              </label>
              <input
                type="password"
                name="password"
                className="w-full mb-2 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                value={formData.item_price}
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
          {step === 4 && (
            <div>
              <h2>Step 4 - Upload Pictures</h2>
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Pictures:
              </label>
              <input
                type="file"
                name="item_pictures"
                accept="image/*"
                multiple
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
