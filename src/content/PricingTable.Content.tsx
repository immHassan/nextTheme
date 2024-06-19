import { PricingTableType } from '@/common/modules/PricingTable';

export const PricingTableContent: PricingTableType = {
  plans: [
    {
      name: "Free Plan",
      description: "You know exactly where you want to invest.",
      price: "$0",
      interval: "one-time payment",
      includeLocalTaxesInformation: true,
      featured: false,
      buttton: {
        type: "primary",
        title: "Purchase",
        href: "#",
      },
      features: [
        "address search",
        "Property Details",
        "AI Valuation",
        "Listing Status",
        "Listing Details",
      ],
    },
    {
      name: "Premier Plan",
      description: "You want to explore multiple areas to find the best opportunities.",
      price: "$20",
      interval: "one-time payment",
      includeLocalTaxesInformation: true,
      featured: true,
      buttton: {
        type: "primary",
        title: "Purchase",
        href: "#",
      },
      features: [
        "address searchs",
        "AI Valuation",
        "Listing Details",
        "Lifestyle Score",
        "Sold Comparable",
        "Historical Property Sales in Neighbourhood",
      ],
    },
    {
      name: "Executive Plan",
      description: "You’re expanding to new markets & want to discover different opportunities.",
      price: "$30",
      interval: "one-time payment",
      includeLocalTaxesInformation: true,
      featured: false,
      buttton: {
        type: "primary",
        title: "Purchase",
        href: "#",
      },
      features: [
        "address search",
        "Property Details",
        "AI Valuation",
        "Listing Details",
        "Lifestyle Score",
        "Sold Comparable",
        "Historical Property Sales in Neighbourhood",
        "Property Investment Score",
        "Predictive Investment Analytics",
      ],
    },
  ],
};

export default PricingTableContent;
