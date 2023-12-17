'use client'
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
function InterviewForm() {
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
    interviewEmail: "",
  });
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending email...");

    emailjs
      .sendForm(
        "service_w6v0yit",
        "template_gvgru2h",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted...");

    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.interviewEmail === "" // Check if selectedSkill is empty
    ) {
      setFormValid(false);
      return;
    }

    setFormValid(true);
    setIsLoading(true);

    const url =
      "https://mozisha-47b2f-default-rtdb.firebaseio.com/talents.json";
    const formDataToSave = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      interviewEmail: formData.interviewEmail,
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
    setIsLoading(false);
    setFormData({ ...formData });
    sendEmail(e);
  };

  return (
    <div>
      <form ref={form} action="" className="" onSubmit={handleSubmit}>
        {!formValid && (
          <p className="text-red-500">Please fill in all required fields.</p>
        )}
        <div className=" grid  items-center gap-4">
          <label htmlFor="firstName">FirstName</label>
          <input
            name="firstName"
            id="firstName"
            type="text"
            placeholder="Enter your firstname"
            value={formData.firstName}
            onChange={handleInputChange}
            className="border px-4 py-2"
          />
        </div>
        <div className=" grid items-center gap-4">
          <label htmlFor="lastName">LastName</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your lastname"
            value={formData.lastName}
            onChange={handleInputChange}
            className="border px-4 py-2"
          />
        </div>
        <div className=" grid items-center gap-4">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border px-4 py-2"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className=" grid items-center gap-4">
          <label htmlFor="">Interview Email</label>
          <input
            type="text"
            name="interviewEmail"
            id="interviewEmail"
            value={formData.interviewEmail}
            onChange={handleInputChange}
            placeholder="Paste the interview email you received here."
            className="border px-4 py-2"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-purple-700 text-white rounded-md md:px-4 md:py-2 py-2 my-8  hover:bg-purple-100 mb-4 hover:text-purple-800 hover:font-bold md:w-full justify-center items-center w-full">
          {isLoading ? (
            <ClipLoader color={"#7e22ce"} loading={isLoading} size={30} />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}

export default InterviewForm;
