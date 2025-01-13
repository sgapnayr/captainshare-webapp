"use client";
import { Accordion } from "flowbite-react";
import Link from "next/link";

export const FAQ = () => {
  const Questions = [
    {
      key: "question1",
      question: "What is included with my CaptainShare account?",
      answer:
        "CaptainShare is free to use! You can access all the platform's features, such as boat listings, trip management, captain availability, and more, at no cost.",
    },
    {
      key: "question2",
      question: "Are there any service fees?",
      answer:
        "CaptainShare only charges a service fee if we successfully match you with a captain for your vessel. This ensures you only pay when the platform delivers value.",
    },
    {
      key: "question3",
      question: "Can I use CaptainShare for multiple boats or captains?",
      answer:
        "Absolutely! CaptainShare supports managing multiple boats and captains efficiently. With bulk scheduling, preferred captain lists, and automated trip management, it’s easy to scale for growing fleets.",
    },
    {
      key: "question4",
      question:
        "How can CaptainShare help ensure smooth operations for my fleet?",
      answer:
        "CaptainShare includes tools like a Captain's Pre-Trip Checklist, emergency functionality, lake surveying for education, and GPS integration for locations like Lake Austin. These features streamline operations and improve safety and efficiency.",
    },
    {
      key: "question5",
      question: "What if there’s a conflict or double-booking?",
      answer:
        "CaptainShare prevents double-booking with real-time validation for both captains and boats. Automated scheduling ensures availability is checked and conflicts are resolved proactively.",
    },
    {
      key: "question6",
      question: "How can I get support after signing up?",
      answer:
        "We provide multiple support options, including a detailed knowledge base, ticket submission system, and community support via our Discord channel. Reach out anytime for assistance with features or troubleshooting.",
    },
    {
      key: "question7",
      question: "Is my data secure with CaptainShare?",
      answer:
        "Yes, CaptainShare follows industry-standard security protocols, including data encryption, GDPR/CCPA compliance, audit logging, and HTTPS enforcement to ensure your data is safe.",
    },
  ];

  return (
    <>
      <div className="max-w-[800px] mx-auto px-4 lg:pb-24 pb-20 pt-0">
        <h3 className="md:text-40 text-32 font-bold text-link dark:text-white leading-tight text-center mb-14">
          Frequently Asked Questions
        </h3>
        <Accordion className="shadow-none dark:shadow-none divide-y-1 divide-b-0 divided:border-ld !rounded-none flex flex-col gap-4">
          {Questions.map((item) => {
            return (
              <Accordion.Panel key={item.key}>
                <Accordion.Title className="focus:ring-0 px-6 text-lg text-ld py-5 border border-ld rounded-md !border-b-none">
                  {item.question}
                </Accordion.Title>
                <Accordion.Content className="!p-0 px-0 pt-0 rounded-none">
                  <p className="text-base text-ld opacity-80 leading-7 border border-t-0 border-ld -mt-5 px-6 py-5 rounded-b-md">
                    {item.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            );
          })}
        </Accordion>
        <p className="mt-14 w-fit mx-auto py-1 px-2 rounded-md border-2 border-dashed border-border dark:border-darkborder text-sm font-medium justify-center text-lightmuted dark:text-darklink flex items-center flex-wrap gap-1">
          Still have a question?{" "}
          <Link
            href="https://discord.com/invite/XujgB8ww4n"
            className="underline hover:text-primary"
          >
            Ask On Discord
          </Link>{" "}
          <span>or</span>
          <Link
            href="https://captainshare.com/support/"
            className="underline hover:text-primary"
          >
            Submit A Ticket
          </Link>
        </p>
      </div>
    </>
  );
};
