"use client";
import Image from "next/image";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
function Contact() {
  const [state, handleSubmit] = useForm("xqkrpywy");
  if (state.succeeded) {
    return (
     
      <div  className="flex justify-center pr-4 py-16  ">
      <div className="card ">
      <div className="rounded-full h-40 w-40 bg-gray-200 flex items-center justify-center mx-auto">
        <i className="checkmark">✓</i>
      </div>
      <h1 className="text-green-600 font-bold text-4xl mb-4 text-center my-4">Success</h1> 
      <p className="text-gray-700 text-lg text-center">Form submitted successfully, <br/> we'll be in touch soon!</p>
    </div>
    </div>
    );
  }

  return (
    <div className="md:px-16 lg:px-32">
      <div className="flex flex-col-reverse  px-8 lg:flex-row  md:px-16 lg:px-32 ">
        <div className=" lg:w-1/2 leading-8">
          <h1 className=" text-3xl font-bold my-8 text-center">Contact us</h1>
          <p className=" text-gray-500">
            Let's connect: We're here to help, and we'd love to hear from you!
            Whether you have a comment, a question, or just want to chat, you
            can reach out to us through the contact form on this page or by
            phone, email or social media
          </p>
          <div className=" flex justify-center items-center gap-4">
            <button className=" px-4 py-2 bg-purple-700 text-white rounded-md my-8">
              <Link
                href="https://wa.me/+27824277902"
                target="_blank"
                rel="noreferrer">
                Via Whatsapp Chat
              </Link>
            </button>
            <button className=" px-4 py-2 bg-purple-700 text-white rounded-md my-8">
              <Link href="tel:27824277902" target="_blank" rel="noreferrer">
                {" "}
                Via Call{" "}
              </Link>
            </button>
          </div>
        </div>
        <div className=" lg:w-1/2 mx-auto">
          <Image
            src="/contactus.jpg"
            width={600}
            height={600}
            alt="contact us image"
          />
        </div>

      </div>
      <h4 className=" text-center font-bold my-8">Email Form</h4>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center  mx-auto mb-8 px-8 lg:max-w-[1000px]">
        <label htmlFor="email">Names </label>
        <input
          className="border  mt-2 mb-4 p-2"
          placeholder="John Doe"
          id="name"
          type="name"
          name="name"
        />
        <ValidationError prefix="name" field="name" errors={state.errors} />
        <label htmlFor="email">Email Address</label>
        <input
          className="border mb-4 mt-2 p-2"
          placeholder="johndoe@gmail.com"
          id="email"
          type="email"
          name="email"
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message</label>

        <textarea
          rows={5}
          className=" border  p-2 mt-2"
          placeholder="What's on your mind?"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className=" bg-purple-700 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
