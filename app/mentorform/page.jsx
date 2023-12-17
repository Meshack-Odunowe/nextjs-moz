// Import necessary libraries and modules
'use client'
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const MentorForm = () => {
  // State variables
  const [formValid, setFormValid] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    yearsOfExperience: "",
    organization: "",
  });
  const [loading, setLoading] = useState(false); // New state for loading

  // Ref for the form
  const form = useRef();

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4bgxn9a",
        "template_i1mry7b",
        form.current,
        "ganWq3jiqJV6BwpHf"
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

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.profession === "" ||
      formData.yearsOfExperience === "" ||
      formData.organization === ""
    ) {
      setFormValid(false);
      return;
    }

    setFormValid(true);
    setLoading(true); // Set loading to true when the form is submitted

    const url =
      "https://mozisha-47b2f-default-rtdb.firebaseio.com/talents.json";
    const formDataToSave = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      profession: formData.profession,
      yearsOfExperience: formData.yearsOfExperience,
      organization: formData.organization,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSave),
      });

      if (response.ok) {
        window.scrollTo(0, 0); // Scroll to the top of the page
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        router.push("/success");
      } else {
        console.error("Data could not be saved");
      }
    } catch (error) {
      console.error("error:", error);
    } finally {
      setLoading(false); // Set loading back to false after the form submission is complete
    }

    setFormData({ ...formData });
    sendEmail(e);
  };

  // Router for navigation
  const router = useRouter();

  // Render the form
  return (
    <div className="max-w-5xl mx-auto leading-8 px-4 md:px-24">
      <form ref={form} onSubmit={handleSubmit}>
        {!formValid && (
          <p className="text-red-500">Please fill in all required fields.</p>
        )}
        {/* Loading spinner */}
        {loading && <div className="cliploader" />}

        <div className="mb-8">
        <label htmlFor="firstName">Firstname</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="border focus-visible:bg-purple-100 w-full  pl-5"
            placeholder="Enter your Firstname"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-8">
          <label htmlFor="lastName">Lastname</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="border focus-visible:bg-purple-100 w-full  pl-5"
            placeholder="Enter your Lastname"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-8">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="border focus-visible:bg-purple-100 w-full  pl-5"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-8">
          <label htmlFor="profession">Profession</label>
          <select
            name="profession"
            id="profession"
            className="border focus-visible:bg-purple-100 w-full pl-5"
            value={formData.profession}
            onChange={handleInputChange}
          >
            <option value="">Select your area of expertise</option>
            <option value="International development">International development</option>
            <option value="Sales and Marketing">Sales and Marketing</option>
            <option value="Data">Data</option>
            <option value="Designs">Designs</option>
          </select>
        </div>
        <div className="mb-8">
          <label htmlFor="yearsOfExperience">Years of Experience</label>
          <input
            type="text"
            name="yearsOfExperience"
            id="yearsOfExperience"
            className="border focus-visible:bg-purple-100 w-full  pl-5"
            placeholder="Enter your Years of Experience"
            value={formData.yearsOfExperience}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-8">
          <label htmlFor="yearsOfExperience">Organization</label>
          <input
            type="text"
            name="organization"
            id="organization"
            className="border focus-visible:bg-purple-100 w-full  pl-5"
            placeholder="Where do you currently work?"
            value={formData.organization}
            onChange={handleInputChange}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-purple-700 text-white rounded-md md:px-4 md:py-2 py-2  hover:bg-purple-100 mb-4 hover:text-purple-800 hover:font-bold md:w-full justify-center items-center w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MentorForm;
