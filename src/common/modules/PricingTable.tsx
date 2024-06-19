import React from "react";
import GradientBackgroundImage from "../components/backgrounds/GradientBackgroundImage";
import Container from "../components/containers/Container";
import RedGradientBackground from "@/assets/images/LargeRedBackground.Gradient.svg";
import PricingCard, { PricingCardType } from "../components/cards/PricingCard";

export type PricingTableType = {
  plans: PricingCardType[];
};

const PricingTable: React.FC<PricingTableType> = ({ plans }) => {
  if (!plans || plans.length === 0) {
    return <p>No pricing plans available.</p>;
  }

  return (
    <>
      <GradientBackgroundImage src={RedGradientBackground} position="bottom-0" />

  <div class="relative mx-auto max-w-5xl text-center">
  <span class="text-main my-3 flex items-center justify-center font-medium uppercase tracking-wider">PRICING</span>
<h2
  style={{ paddingBottom: "100px", textTransform: "capitalize" }}
  className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl"
>
  Cancel anytime. 14 day money-back guarantee
</h2>
</div>
      <Container className="z-10 grid grid-cols-1 gap-10 sm:gap-20 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
     


        {plans.map((plan, index) => (
          <PricingCard {...plan} key={index} />
        ))}
      </Container>
    </>
  );
};

export default PricingTable;
