import ImageFeatureTable from "@/assets/images/Feature.Table.png";
import { FeatureContentType } from "@/common/modules/FeatureContent";

import {
  IconUpload,
  IconArrowAutofitDown,
  IconStars,
  IconWind,
  IconBolt,
} from "@tabler/icons";

export default {
  kicker: "Launch Strategy",
  title: "The Easiest Way To Launch",
  align: "left",
  description:
    "No tech experience needed. Our template will have your landing page ready to go in record time. No coding or design skills needed; our template is made for both new and experienced users alike. Get up and running fast with NextSiders.",
  tags: [
    { label: "Easy Uploads", icon: <IconUpload size={17} /> },
    {
      label: "Automatic Autofit",
      icon: <IconArrowAutofitDown size={17} />,
    },
    { label: "Premium Support", icon: <IconStars size={17} /> },
    { label: "Windy Environment", icon: <IconWind size={17} /> },
    { label: "Really Fast", icon: <IconBolt size={17} /> },
  ],
  image: { src: ImageFeatureTable, width: 600 },
} as FeatureContentType;
