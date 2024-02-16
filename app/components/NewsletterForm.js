import { useState } from "react";
import { sanitize } from "./miscellanous";
import { ClipLoader } from "react-spinners";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };

  return (
    <div className=" max-w-xl p-4 rounded-xl  mb-8 mx-auto">
      <h3
        className="md:tracking-wide font-extrabold my-8 md:text-7xl text-4xl"
        style={{ lineHeight: "60px" }}>
        Mozisha
        <span className="text-purple-700"> Blog </span>
      </h3>

      <p className=" max-w-xl my-4">
        Join our vibrant community free of charge and stay updated on issues around youth, education and workforce in Africa.
      </p>
      <div className="flex">
        <div className="flex flex-col md:flex-row gap-4 mt-8 md:gap-0 w-full ">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? "")}
            type="email"
            placeholder="Your email"
            className=" border px-6 py-4 w-full"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
          <div className="">
            <button
              className="cursor-pointer	text-white bg-purple-500  px-5 focus:outline-none hover:bg-purple-700 rounded  py-4"
              onClick={handleFormSubmit}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-[42px] my-4">
        {"sending" === status ? (
          <ClipLoader className=" text-purple-700" />
        ) : null}
        {"error" === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {"success" === status && "error" !== status && !error && (
          <div
            className="text-green-600 font-bold pt-2"
            dangerouslySetInnerHTML={{ __html: sanitize(message) }}
          />
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
