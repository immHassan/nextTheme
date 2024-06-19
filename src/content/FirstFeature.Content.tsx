import ImageFeatureMap from "@/assets/images/Feature.Map.update.png";
import { FeatureContentType } from "@/common/modules/FeatureContent";
import {
  IconUpload,
  IconArrowAutofitDown,
  IconStars,
  IconWind,
  IconBolt,
} from "@tabler/icons";

export default {
  kicker: "Three Simple Steps",
  title: "How It Works",
  description: "Please follow the steps below to turn your dream into reality.",

  tags: [
    { label: "Create An Account", icon: <IconUpload size={17} /> },
    {
      label: "Enter Property Address",
      icon: <IconArrowAutofitDown size={17} />,
    },
    { label: "Get Your Detailed, Real-Time Property HouseFax Report Instantly", icon: <IconStars size={17} /> },
    
  ],
  image: { src: ImageFeatureMap, width: 770, gradientWrapper: true },
} as FeatureContentType;
