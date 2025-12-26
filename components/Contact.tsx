// "use client";
// import dynamic from "next/dynamic";
import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";

const Contact = () => {
  const [mailSent, setMailSent] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

  const defaultOptions = {
    loop: mailSent,
    autoplay: mailSent,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleClear = () => {
    setStep(1);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleSend = async () => {
    try {
      console.log("Sending form data", formData);

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Response received", response);
      // if (!response.ok) {
      //   console.error("Error sending email", await response.json());
      //   setMailSent(false);
      //   return;
      // }

      console.log("Email sent successfully");
      if (response.status !== 200) {
        console.error("Error sending email", await response.json());
        setMailSent(false);
        return;
      }
      setMailSent(true);

      setTimeout(() => {
        setMailSent(false);
      }, 2000);
      handleClear();
    } catch (err) {
      console.log(err);
      setMailSent(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      // You can add any conditional logic if needed based on the element value.
      handleNext();
    }
  };

  return (
    <>
      <div
        id="contact"
        style={{ display: "block" }}
        className="no-scrollbar relative w-full  overflow-hidden overflow-y-hidden border border-neutral-300 bg-white"
      >
        <section
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="bg-violet-600 px-4 py-12"
        >
          <div className="mx-auto h-96 w-full max-w-3xl cursor-text overflow-y-hidden rounded-lg bg-slate-950/70 font-mono shadow-xl backdrop-blur">
            <div className="sticky top-0 flex w-full items-center gap-1 bg-slate-900 p-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="absolute left-[50%] -translate-x-[50%] text-sm font-semibold text-slate-200">
                koushiksherugar.contact@gmail.com
              </span>
            </div>
            <div className={`absolute`}>
              {mailSent && (
                <Lottie options={defaultOptions} height={200} width={400} />
              )}
            </div>
            <div className="p-4 text-lg text-slate-100">
              {step === 1 && (
                <>
                  <p>To start, could you give us your name?</p>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded bg-slate-800 p-2 text-white focus:border-0"
                  />
                  <button
                    onClick={handleNext}
                    disabled={!formData.name}
                    className="mt-4 rounded bg-indigo-500 px-4 py-2 text-white hover:opacity-90"
                  >
                    Next
                  </button>
                </>
              )}
              {step === 2 && (
                <>
                  <p>Thanks, {formData.name}! Could you provide your email?</p>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter your email"
                    className="mt-2 w-full rounded bg-slate-800 p-2 text-white"
                  />
                  <button
                    onClick={handleNext}
                    disabled={!formData.email}
                    className="mt-4 rounded bg-indigo-500 px-4 py-2 text-white hover:opacity-90"
                  >
                    Next
                  </button>
                </>
              )}
              {step === 3 && (
                <>
                  <p>Great! How can we help you?</p>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="mt-2 w-full rounded bg-slate-800 p-2 text-white"
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    onClick={handleNext}
                    disabled={!formData.message}
                    className="mt-4 rounded bg-indigo-500 px-4 py-2 text-white hover:opacity-90"
                  >
                    Next
                  </button>
                </>
              )}
              {step === 4 && (
                <>
                  <p>Beautiful! Here&apos;s what we&apos;ve got:</p>
                  <p>
                    <span className="text-blue-300 mt-2">Name:</span>{" "}
                    {formData.name}
                  </p>
                  <p>
                    <span className="text-blue-300">Email:</span>{" "}
                    {formData.email}
                  </p>
                  <p>
                    <span className="text-blue-300">Message:</span>{" "}
                    {formData.message}
                  </p>
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => {
                        handleClear();
                      }}
                      className="rounded bg-slate-100 px-3 py-1 text-base text-black transition-opacity hover:opacity-90"
                    >
                      Restart
                    </button>
                    <button
                      onClick={() => {
                        handleSend();
                      }}
                      className="rounded bg-indigo-500 px-3 py-1 text-base text-white transition-opacity hover:opacity-90"
                    >
                      Send it!
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
