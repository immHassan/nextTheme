import { FoundersNoteType } from "@/common/modules/FoundersNote";
import ImageFoundersNote from "@/assets/images/FoundersNote.User.upate.JPEG";

export default {
  kicker: "Founders Note",
  title: "It's no secret that finding the right property to invest in is not an easy task.",
  note: `My name is Sana, one of the founders of Housestack AI. My passion for artificial intelligence and real estate started when I tried to evaluate deals as a real estate investor in 2023. I soon discovered that information was limited. That’s why I created Housestack AI to help people and businesses invest in real estate!`,
  buttons: [
    { title: "Get Started", href: "/pricing", type: "primary" },
    { title: "Learn More", href: "/#features", type: "secondary" },
  ],
  founder: {
    name: "Sana Srithas",
    role: "Co-Founder and CEO",
    image: {
      src: ImageFoundersNote,
    },
  },
} as FoundersNoteType;
