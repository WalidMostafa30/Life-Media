import { useState } from "react";
import SectionTitle from "../../../components/common/SectionTitle";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We offer full branding, web design, social media management, content creation, and campaign strategy for businesses across multiple industries — including clinics, restaurants, conferences, and banks.",
  },
  {
    id: 2,
    question: "How long does a project take?",
    answer:
      "It depends on the project scope, but typically between 2 to 6 weeks.",
  },
  {
    id: 3,
    question: "Can I request revisions?",
    answer:
      "Yes, we include multiple revision rounds to ensure your satisfaction.",
  },
  {
    id: 4,
    question: "Do you offer ongoing support?",
    answer:
      "Absolutely! We offer maintenance and support packages after delivery.",
  },
  {
    id: 5,
    question: "How do I get started?",
    answer:
      "Just reach out to us via our contact form and we’ll guide you from there.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container sectionPadding">
      <SectionTitle title="Got a Question? We've Got Answers" />

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={item.id}
            className="bg-light-gray rounded-xl transition-all duration-300 px-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer py-4"
              onClick={() => toggleItem(index)}
            >
              <h4 className="font-semibold">{item.question}</h4>
              <div className="w-8 h-8 rounded-full bg-dark-red flex items-center justify-center">
                {openIndex === index ? (
                  <FaMinus className="text-lg" />
                ) : (
                  <FaPlus className="text-lg" />
                )}
              </div>
            </div>
            <div
              className={`transition-all duration-400 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-40 pb-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-300">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
