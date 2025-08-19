// import React from 'react';

// const Contact = () => {
//   return (
//     <section className="bg-[#004d40] h-screen flex items-center text-white py-16 px-4 md:px-8" id="contact">
//       <div className="w-5xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
//           Contact Me_
//         </h2>

//         <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Row 1: Name + Email */}
//           <input
//             type="text"
//             placeholder="Name"
//             className="bg-[#1a1a1a] p-4 rounded-md border border-gray-700 focus:outline-none focus:border-green-400 w-full"
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             className="bg-[#1a1a1a] p-4 rounded-md border border-gray-700 focus:outline-none focus:border-green-400 w-full"
//           />

//           {/* Row 2: Mobile + Subject */}
//           <input
//             type="text"
//             placeholder="Mobile Number"
//             className="bg-[#1a1a1a] p-4 rounded-md border border-gray-700 focus:outline-none focus:border-green-400 w-full"
//           />

//           <input
//             type="text"
//             placeholder="Email Subject"
//             className="bg-[#1a1a1a] p-4 rounded-md border border-gray-700 focus:outline-none focus:border-green-400 w-full"
//           />

//           {/* Row 3: Full width Textarea */}
//           <textarea
//             placeholder="Write your message..."
//             rows="6"
//             className="md:col-span-2 bg-[#1a1a1a] p-4 rounded-md border border-gray-700 focus:outline-none focus:border-green-400 w-full"
//           ></textarea>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="md:col-span-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md w-full transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const mobile = form.current.mobile.value.trim();
    const subject = form.current.subject.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !mobile || !subject || !message) {
      setStatus("Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_raq2bme", // EmailJS Service ID
        "template_cfzguyn", // EmailJS Template ID
        form.current,
        "AqMr9WFqGAI3YBaXi" // EmailJS Public Key (User ID)
      )
      .then((result) => {
        setStatus("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      className="bg-[#004d40] h-screen flex items-center text-white py-16 px-4 md:px-8"
      id="contact"
    >
      <div className="w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Contact Me_
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="bg-[#1a1a1a] p-4 rounded-md border border-gray-700 focus:outline-none focus:border-green-400 w-full"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="bg-[#1a1a1a] p-4 rounded-md border border-gray-700 focus:outline-none focus:border-green-400 w-full"
          />

          <input
            name="mobile"
            type="text"
            placeholder="Mobile Number"
            className="bg-[#1a1a1a] p-4 rounded-md border border-gray-700 focus:outline-none focus:border-green-400 w-full"
          />

          <input
            name="subject"
            type="text"
            placeholder="Email Subject"
            className="bg-[#1a1a1a] p-4 rounded-md border border-gray-700 focus:outline-none focus:border-green-400 w-full"
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="10"
            className="md:col-span-2 bg-[#1a1a1a] p-4 rounded-md border border-gray-700 focus:outline-none focus:border-green-400 w-full"
          ></textarea>

          <button
            type="submit"
            className="md:col-span-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md w-full transition"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="text-center mt-4 text-sm text-green-400">{status}</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
