import React, { useState } from "react";

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <div
        style={{ display: "block" }}
        className="no-scrollbar relative w-full overflow-hidden overflow-y-scroll border border-neutral-300 bg-white"
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
          <div className="mx-auto h-96 w-full max-w-3xl cursor-text overflow-y-scroll rounded-lg bg-slate-950/70 font-mono shadow-xl backdrop-blur">
            <div className="sticky top-0 flex w-full items-center gap-1 bg-slate-900 p-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="absolute left-[50%] -translate-x-[50%] text-sm font-semibold text-slate-200">
                koushiksherugar.contact@gmail.com
              </span>
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
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded bg-slate-800 p-2 text-white"
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
                  <p>Beautiful! Here's what we've got:</p>
                  <p>
                    <span className="text-blue-300">Name:</span> {formData.name}
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
                      onClick={() => setStep(1)}
                      className="rounded bg-slate-100 px-3 py-1 text-base text-black transition-opacity hover:opacity-90"
                    >
                      Restart
                    </button>
                    <button className="rounded bg-indigo-500 px-3 py-1 text-base text-white transition-opacity hover:opacity-90">
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