"use client";
import React from "react";
import { Accordion } from "flowbite-react";

const faqPage = [
  {
    question: "What is included with my CaptainShare account?",
    answer:
      "CaptainShare is free to use! You can access all the platform's features, such as boat listings, trip management, captain availability, and more, at no cost.",
  },
  {
    question: "Are there any service fees?",
    answer:
      "CaptainShare only charges a service fee if we successfully match you with a captain for your vessel. This ensures you only pay when the platform delivers value.",
  },
  {
    question: "Can I use CaptainShare for multiple boats or captains?",
    answer:
      "Absolutely! CaptainShare supports managing multiple boats and captains efficiently. With bulk scheduling, preferred captain lists, and automated trip management, it’s easy to scale for growing fleets.",
  },
  {
    question: "How does CaptainShare ensure smooth operations for my fleet?",
    answer:
      "CaptainShare includes tools like a Captain's Pre-Trip Checklist, emergency functionality, lake surveying for education, and GPS integration for locations like Lake Austin. These features streamline operations and improve safety and efficiency.",
  },
  {
    question: "What happens in case of a double-booking?",
    answer:
      "CaptainShare prevents double-booking with real-time validation for both captains and boats. Automated scheduling ensures availability is checked and conflicts are resolved proactively.",
  },
  {
    question: "How can I get support after signing up?",
    answer:
      "We provide multiple support options, including a detailed knowledge base, ticket submission system, and community support via our Discord channel. Reach out anytime for assistance with features or troubleshooting.",
  },
  {
    question: "Is my data secure with CaptainShare?",
    answer:
      "Yes, CaptainShare follows industry-standard security protocols, including data encryption, GDPR/CCPA compliance, audit logging, and HTTPS enforcement to ensure your data is safe.",
  },
];

const Questions = () => {
  return (
    <>
      <div className="flex justify-center py-10">
        <div className="max-w-xl ">
          <h2 className="text-2xl text-center mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-darklink text-base">
            Learn more about CaptainShare and how it can simplify boat and trip
            management for captains and owners.
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto ">
        <Accordion collapseAll className="bg-white dark:bg-dark">
          {faqPage.map((faq, i) => (
            <Accordion.Panel key={i} className="bg-white dark:bg-dark">
              <Accordion.Title>{faq.question}</Accordion.Title>
              <Accordion.Content>{faq.answer}</Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Questions;
