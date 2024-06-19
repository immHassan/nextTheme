import { FAQType } from "@/common/modules/FAQ";

export default {
  kicker: "Get your questions answered",
  title: "Frequently Asked Questions",
  description:
    "If you have any other questions, please feel free to contact us.",
  faqs: [
    {
      question: "How accurate is the HouseFax report?",
      answer:
        "Our AI-driven platform uses over 1 billion data points and 30 years of data to ensure the highest accuracy possible.",
    },
    {
      question: "What sources do you use for data?",
      answer:
        "We leverage both public and private data sources to compile our reports.",
    },
    {
      question: "Can I use HouseFax for any type of property?",
      answer:
        "Yes, HouseFax can be used for residential, commercial, and rental properties.",
    },
  ],
} as FAQType;
