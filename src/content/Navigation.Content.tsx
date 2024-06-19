import { NavigationMenuType } from "@/common/modules/NavigationMenu";

export default {
  links: [
    { title: "Features", href: "/#features" },
    { title: "FAQ", href: "/#faq" },
    { title: "About", href: "/#about" },
    { title: "Pricing", href: "/pricing" },
    { title: "Blog", href: "/blog" },
  ],
  buttons: [
    { title: "Learn More", href: "/#features", type: "secondary" },
    { title: "Get Started", href: "/pricing", type: "primary" },
  ],
} as NavigationMenuType;
