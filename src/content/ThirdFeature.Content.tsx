import ImageFeatureNotifications from "@/assets/images/Feature.Notifications.png";
import { FeatureContentType } from "@/common/modules/FeatureContent";
import {
  IconUpload,
  IconArrowAutofitDown,
  IconStars,
  IconWind,
  IconBolt,
} from "@tabler/icons";

export default {
  kicker: "Branding",
  title: "Brand Your Landing Page",
  description:
    "Your landing page should reflect the aesthetic, the design and the energy of the brand you've already created. With NextJs, you can customize the page's details to create a truly unique page that refines your look and feel. We make designing and launching easy, no matter what your product is.",
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
  image: { src: ImageFeatureNotifications, width: 250, gradientWrapper: true },
} as FeatureContentType;
