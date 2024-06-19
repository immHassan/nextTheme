import { HeroType } from "@/common/modules/Hero";

import ImageDashboard from "@/assets/images/image.second.png";

export default {
  notfication: {
    tag: "New",
    text: "Book a free discovery call with us today! ",
    button: "Book Now",
    href: "https://calendly.com/suman-housestack/30min",
  },
  title: "Real-Time AI Property Valuation Report",
  description:
    "Accurate, Reliable, and AI-Driven Home Valuations Report",
  buttons: [
    { title: "Get Your FREE HouseFax Report", href: "/pricing", type: "primary" },
    { title: "Book a Call", href: "https://calendly.com/suman-housestack/30min", type: "secondary" },
  ],
  image: {
    src: ImageDashboard,
    width: 1000,
  },
} as HeroType;
