// components/BusinessForm.js

'use client'
import { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import emailjs from 'emailjs-com';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BusinessForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    talentRequirements: '',
    otherRequirements: '',
    numberOfTalents: 1,
    startDate: new Date(),
  });
  const form = useRef();

  const talentOptions = [
    'Administrative',
    'Data',
    'Sales',
    'Marketing',
    'Customer Service',
    'Technology',
    'Others',
  ];
  const [formValid, setFormValid] = useState(true);

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
      formData.talentRequirements === ''
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
      talentRequirements: formData.talentRequirements,
      otherRequirements:
        formData.talentRequirements === 'Others'
          ? formData.otherRequirements
          : '',
      numberOfTalents: formData.numberOfTalents,
      startDate: formData.startDate.toISOString(),
    };

    try {
      const response = await fetch(
        'https://mozisha-47b2f-default-rtdb.firebaseio.com/talents.json',
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
      } else {
        console.error('Data could not be saved.');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    // Optionally, you can reset the form after submission
    setFormData({
      name: '',
      companyName: '',
      email: '',
      talentRequirements: '',
      otherRequirements: '',
      numberOfTalents: 1,
      startDate: new Date(),
    });

    sendEmail(e);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1kjbpag',
        'template_81k3zcp',
        form.current,
        'oCtQ4YXyDy5Xm4BQm'
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
      <h2 className="font-bold text-2xl text-center my-8">
        Needs Assessment Form
      </h2>
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
          <label className="font-bold mr-8 w-full">
            Talent Requirements:
          </label>
          <select
            className="border py-4 px-4 w-full"
            name="talentRequirements"
            value={formData.talentRequirements}
            onChange={handleInputChange}
          >
            <option value="">Select a talent requirement</option>
            {talentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {formData.talentRequirements === 'Others' && (
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
            Number of Talents Needed:
          </label>
          <input
            className="border pl-4"
            type="number"
            name="numberOfTalents"
            placeholder="1"
            value={formData.numberOfTalents}
            onChange={handleInputChange}
            min="1"
            max="10"
          />
        </div>
        <div className="mt-4 md:mt-8">
          <label className="font-bold mr-8">
            Preferred Start Date for Talents:
          </label>
          <DatePicker
            selected={formData.startDate}
            onChange={(date) => setFormData({ ...formData, startDate: date })}
            className="w-full border px-4"
          />
        </div>
        <div className="mt-4 md:mt-8 mb-44">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-purple-700 text-white rounded-md md:px-4 md:py-2 py-2  hover:bg-purple-100 mb-4 hover:text-purple-800 hover:font-bold md:w-full justify-center items-center w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessForm;
