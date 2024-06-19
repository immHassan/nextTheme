import { FooterType } from "@/common/modules/Footer";

export default {
  description:
    "Real-Time AI Property Valuation Report",
  copyright: "Housestack AI. All rights reserved",
  email: "example@domain.com",
  twitter: {
    title: "Twitter",
    link: "/#",
  },
  facebook: {
    title: "Facebook",
    link: "/#",
  },
  instagram: {
    title: "Instagram",
    link: "/#",
  },

  linkGroups: [
    {
      title: "Pages",
      links: [
        {
          title: "Features",
          href: "/#features",
        },
        {
          title: "Pricing",
          href: "/pricing",
        },
        {
          title: "Blog",
          href: "/blog",
        },
        {
          title: "FAQ",
          href: "/#faq",
        },
      ],
    },
    // {
    //   title: "Support",
    //   links: [
    //     {
    //       title: "Check Uptime",
    //       href: "/#",
    //     },
    //     {
    //       title: "Request Feedback",
    //       href: "/#",
    //     },
    //     {
    //       title: "Submit Bugs",
    //       href: "/#",
    //     },
    //     {
    //       title: "Contact Us",
    //       href: "/#",
    //     },
    //   ],
    // },
    {
      title: "Legal",
      links: [
      
        {
          title: "Privacy Policy",
          href: "/#",
        },
        
      ],
    },
  ],
} as FooterType;
