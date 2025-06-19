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

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="bg-zinc-900 text-white p-5 rounded-xl mb-4 transition-all duration-300">
      <div
        className="flex justify-between items-start cursor-pointer"
        onClick={onToggle}
      >
        <h4 className="text-base font-semibold">{question}</h4>
        <div className="w-6 h-6 rounded-full bg-red-700 flex items-center justify-center mt-1">
          {isOpen ? (
            <FaMinus className="text-xs" />
          ) : (
            <FaPlus className="text-xs" />
          )}
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container sectionPadding">
      <SectionTitle title="Got a Question? We've Got Answers" />

      <div className="mt-6">
        {faqData.map((item, index) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
