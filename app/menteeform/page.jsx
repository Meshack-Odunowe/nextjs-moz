'use client'
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const MenteeForm = () => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const router = useRouter();

  const [formValid, setFormValid] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    selectedSkill: "",  // Added selectedSkill
    yearsOfExperience: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4bgxn9a",
        "template_cmnywfh",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.selectedSkill === ""   // Check if selectedSkill is empty
    ) {
      setFormValid(false);
      return;
    }

    setFormValid(true);

    const url =
      "https://mozisha-47b2f-default-rtdb.firebaseio.com/talents.json";
    const formDataToSave = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      selectedSkill: formData.selectedSkill,  // Include selectedSkill
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
        window.scrollTo(0, 0);
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
    }

    setFormData({ ...formData });
    sendEmail(e);
  };

  return (
    <div className="max-w-5xl mx-auto leading-8 px-4 md:px-24">
      <form ref={form} onSubmit={handleSubmit}>
        {!formValid && (
          <p className="text-red-500">Please fill in all required fields.</p>
        )}
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
          <label htmlFor="selectedSkill">Area Of Interest:</label>
          <select
            name="selectedSkill"
            id="selectedSkill"
            className="border focus-visible:bg-purple-100 w-full pl-5"
            value={formData.selectedSkill}
            onChange={handleInputChange}
          >
            <option value="">Select a skill</option>
            <option value="International development">International development</option>
            <option value="Software development">Sales and Marketing.</option>
            <option value="Data">Data</option>
            <option value="Designs">Designs</option>
          </select>
        </div>
       
        <div className="mb-8">
          <label htmlFor="email">Why do you need a mentor?</label>
          <input
            type="text"
            name="email"
            id="email"
            className="border focus-visible:bg-purple-100 w-full  pl-5"
            placeholder="maximum of 500 characters"
            value={formData.email}
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

export default MenteeForm;
