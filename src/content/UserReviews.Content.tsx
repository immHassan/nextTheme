import { UserReviewSectionType } from "@/common/modules/UserReviews";
import ImageFoundersNote from "@/assets/images/updtimage.JPG";
import ImageFoundersNotes from "@/assets/images/thispersondoesnotexis.JPEG";
import ImageFoundersNotess from "@/assets/images/jorda.JPEG";

export default {
  kicker: "400+ Companies Using Housestack AI Every Day",
  title: "Testimonials",
  buttons: [
    { title: "Get Started", href: "/pricing", type: "primary" },
    { title: "Learn More", href: "/#features", type: "secondary" },
  ],
  userReviews: [
    {
      stars: 5,
      quote:
        "I really love what Housestack AI is doing in the real estate space. I was trying to buy a house for rental investment and came across Housestack AI. This is way better than what I thought. Thanks for doing all the amazing work you are doing and making our lives easier.",
      image: {
        src: ImageFoundersNote,
      },
      name: "Lisa P.",
      role: "Real Estate Investor",
    },
    {
      stars: 5,
      quote:
        "I love this website! Having property ratings is crucial when investing virtually. These guys do a great job by including all the relevant numbers, and everything is dynamic, so you can change it. What they're doing is pretty game-changing.",
      image: {
                src: ImageFoundersNotes,

      },
      name: "Adam S.",
      role: "Brokerage Firm Owner",
    },
    {
      stars: 5,
      quote:
        "So far, this is the best tool I have used yet. I have found other tools that will analyze properties that you manually enter in or import, but this takes it a step further and actually does the search for you too so it is all in one place. Good stuff!",
      image: {


               src: ImageFoundersNotess,

      },
      name: "Jordan M.",
      role: "Real Estate Investment Trust Manager",
    },
  ],
} as UserReviewSectionType;
