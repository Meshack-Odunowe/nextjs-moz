// components/GetApprenticeForm.js

'use client'
import { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import emailjs from 'emailjs-com';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';

const GetApprenticeForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    apprenticeRequirements: '',
    numberOfApprentice: 1,
    startDate: new Date(),
  });
  const form = useRef();

  const apprenticeOptions = [
    'Administrative',
    'Data',
    'Sales',
    'Marketing',
    'Customer Service',
    'Technology',
    'Others',
  ];
  const [formValid, setFormValid] = useState(true);
  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    const updatedApprenticeRequirements = [...formData.apprenticeRequirements];
  
    if (updatedApprenticeRequirements.includes(value)) {
      // Remove the apprentice if it was already selected
      const index = updatedApprenticeRequirements.indexOf(value);
      updatedApprenticeRequirements.splice(index, 1);
    } else {
      // Add the apprentice if it wasn't selected
      updatedApprenticeRequirements.push(value);
    }
  
    setFormData({ ...formData, apprenticeRequirements: updatedApprenticeRequirements });
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.name === '' ||
      formData.companyName === '' ||
      formData.email === '' ||
      !isValidEmail(formData.email) ||
      formData.apprenticeRequirements === ''
    ) {
      // If any of these fields are empty or email is invalid, mark the form as invalid
      toast.error('Please fill in all required fields.');
      return;
    }

    // If the form is valid, reset the form validation state
    const formDataToSave = {
      name: formData.name,
      companyName: formData.companyName,
      email: formData.email,
      apprenticeRequirements: formData.apprenticeRequirements,
      otherRequirements:
        formData.apprenticeRequirements === 'Others'
          ? formData.otherRequirements
          : '',
      numberOfApprentices: formData.numberOfApprentices,
      startDate: formData.startDate.toISOString(),
    };
    setIsLoading(true); // Set loading to true before making the API call

    try {
      const response = await fetch(
        'https://mozisha-47b2f-default-rtdb.firebaseio.com/apprentices.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataToSave),
        }
      );

      if (response.ok) {
        toast.success('Form submitted successfully!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Redirect to the success page after success
        router.push('/success');
        setIsLoading(false); // Set loading to false after successful API call
      } else {
        console.error('Data could not be saved.');
        setIsLoading(false); // Set loading to false if there is an error

      }
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false); // Set loading to false if there is an error
    }

    // Optionally, you can reset the form after submission
    setFormData({
      name: '',
      companyName: '',
      email: '',
      apprenticeRequirements: '',
      otherRequirements: '',
      numberOfApprentices: 1,
      startDate: new Date(),
    });

    sendEmail(e);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_p2rq5hg',
        'template_4ffqi7c',
        form.current,
        "KeJ5uXs7qlFjIHPHL"
        )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mt-4 md:mt-8 h-screen">
     
      <form
        className="leading-10 h-full md:px-16"
        ref={form}
        onSubmit={sendEmail}
      >
        {formValid === false && (
          <p className="text-red-500">Please fill in all required fields.</p>
        )}
        <div>
          <label className="font-bold mr-8">Name:</label>
          <input
            className="border w-full px-4"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mt-4 md:mt-8">
          <label className="font-bold mr-8">Company Name:</label>
          <input
            className="border w-full px-4"
            type="text"
            name="companyName"
            placeholder="Enter your company name"
            value={formData.companyName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mt-4 md:mt-8">
          <label className="font-bold mr-8">Email:</label>
          <input
            className="border w-full px-4"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mt-4 md:mt-8">
  <label className="font-bold mr-8 w-full">Apprentice Requirements:</label>
  {apprenticeOptions.map((option) => (
    <div key={option} className="flex items-center">
      <input
        type="checkbox"
        id={option}
        name="apprenticeRequirements"
        value={option}
        checked={formData.apprenticeRequirements.includes(option)}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={option} className="ml-2">{option}</label>
    </div>
  ))}
</div>

        {formData.apprenticeRequirements === 'Others' && (
          <div className="mt-4 md:mt-8">
            <label className="font-bold mr-8">Other Requirements:</label>
            <textarea
              className="border w-full px-4"
              name="otherRequirements"
              placeholder="Enter your other requirements"
              value={formData.otherRequirements}
              onChange={handleInputChange}
            />
          </div>
        )}
        <div className="mt-4 md:mt-8">
          <label className="font-bold mr-8">
            Number of Apprentices Needed:
          </label>
          <input
            className="border pl-4"
            type="number"
            name="numberOfApprentice"
            placeholder="1"
            value={formData.numberOfApprentice}
            onChange={handleInputChange}
            min="1"
            max="10"
          />
        </div>
        <div className="mt-4 md:mt-8">
          <label className="font-bold mr-8">
            Preferred Start Date for Apprentices:
          </label>
          <DatePicker
            selected={formData.startDate}
            onChange={(date) => setFormData({ ...formData, startDate: date })}
            className="w-full border px-4"
          />
        </div>
        <div className="mt-4 md:mt-8 mb-44">
        {isLoading ? (
              <div>
                <ClipLoader color={"#7e22ce"} loading={isLoading} size={50} />
              </div>
            ) : (
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 px-3 rounded-lg hover:bg-purple-700  mb-4  transition duration-300">
                Submit{" "}
              </button>
            )}
        </div>
      </form>
    </div>
  );
};

export default GetApprenticeForm;
