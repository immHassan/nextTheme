import { FeatureGridType } from "@/common/modules/FeatureGrid";
import { IconBolt, IconColorSwatch, IconTools } from "@tabler/icons";

export default {
  kicker: "Why choose us",
  title: "The Ultimate AI Platform To Assist You In Your Decision-Making",
  description:
    "Some of the benefits of using Housestack AI.",
  features: [
    {
      title: "Automated Property Valuation Report",
      description:
        "Leverage AI to provide quick and precise home valuations. Access over 1 billion data points from public and private sources.",
      icon: <IconColorSwatch />,
    },
    {
      title: "Unparalleled Historical Data",
      description:
        "Utilize over 30 years of historical data to gain deeper insights. Make informed decisions with comprehensive historical trends.",
      icon: <IconTools />,
      
    },
    {
      title: "AI-Generated Data Analysis and Insights",
      description:
        "Receive detailed reports powered by advanced AI data analysis. Gain valuable insights for buying, selling, and investing in real estate.",
      icon: <IconBolt />,
    },
  ],
} as FeatureGridType;
