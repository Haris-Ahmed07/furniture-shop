import React, { useState } from "react";
import { newsletter } from "../../data.js";

const Newsletter = () => {
  const { title, subtitle, placeholder, buttonText } = newsletter;
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const formData = new FormData();
      formData.append("EMAIL", email);

      fetch(
        "https://gmail.us17.list-manage.com/subscribe/post?u=b0810372cf41ef0628d820e6e&id=9e655b034b&f_id=008bebe3f0",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      )
        .then(() => {
          setEmail("");
          alert(
            "Thank you for signing up! We will keep you updated with discounts and new updates about our furniture shop services."
          );
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("There was an error with your submission. Please try again.");
        });
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <section className="section bg-newsletter bg-no-repeat bg-cover min-h-[490px]">
      <div className="container mx-auto flex justify-center lg:justify-end">
        <div className="w-full max-w-[558px] text-center text-white">
          <h2 className="text-4xl font-semibold  mx-auto lg:mx-0 mb-5 leading-normal">
            {title}
          </h2>
          <p className="text-xl text-center font-light mb-10">{subtitle}</p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row gap-[10px]"
          >
            <input
              className="h-[60px] px-6 outline-none placeholder:text-gray-400 text-gray-600 rounded-lg lg:flex-1"
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className="bg-primary h-[60px] hover:bg-slate-500 px-7 rounded-lg font-medium text-xl transition"
              type="submit"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
