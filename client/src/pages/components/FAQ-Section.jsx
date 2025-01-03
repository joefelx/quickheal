import React, { useState } from "react";

function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is QuickHeal?",
      answer:
        "QuickHeal is a free healthcare platform where patients can connect with doctors for video consultations, ask questions, and get prescriptions.",
    },
    {
      question: "How can I use QuickHeal?",
      answer:
        "Simply sign up, choose your role as a patient or doctor, and get started with the services available.",
    },
    {
      question: "Is QuickHeal free?",
      answer:
        "Yes, all services on QuickHeal are completely free for patients and doctors.",
    },
    {
      question: "Can I book an appointment with a doctor?",
      answer:
        "No, QuickHeal does not have an appointment booking feature. Instead, you can directly connect with available doctors instantly.",
    },
  ];

  return (
    <div className="py-2 px-8 text-white pl-5 pr-5">
      <div className="max-w-lg mx-auto w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-4">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="text-left">
              <button
                className="w-full flex justify-between items-center py-2 px-2 rounded text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-base font-medium">{faq.question}</span>
                <span className="text-xl">{openFAQ === index ? "-" : "+"}</span>
              </button>
              {openFAQ === index && (
                <p className="mt-1 px-2 py-2 text-white text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
