import Head from "next/head";
import Hero from "@/common/modules/Hero";
import PricingTable from '@/common/modules/PricingTable'; // Corrected this import
import PriceTableContent from '@/content/PricingTable.Content'; // Corrected this import
import GradientBackgroundImage from "@/common/components/backgrounds/GradientBackgroundImage";
import HeroGradientBackground from "@/assets/images/Hero.Gradient.svg";
import LargeRedGradientBackground from "@/assets/images/LargeRedBackground.Gradient.svg";
import FeatureGrid from "@/common/modules/FeatureGrid";
import FeatureContent from "@/common/modules/FeatureContent";
import UserReviews from "@/common/modules/UserReviews";
import StatNumbers from "@/common/modules/StatNumbers";
import FAQ from "@/common/modules/FAQ";
import CallToActionBlock from "@/common/modules/CallToActionBlock";
import Section from "@/common/components/containers/Section";
import FoundersNote from "@/common/modules/FoundersNote";
import LogoClouds from "@/common/modules/LogoClouds";
import GradientBackground from "@/common/components/backgrounds/GradientBackground";
import HeroContent from "@/content/Hero.Content";
import LogoCloudsContent from "@/content/LogoClouds.Content";
import FeatureGridContent from "@/content/FeatureGrid.Content";
import FirstFeatureContent from "@/content/FirstFeature.Content";
import SecondFeatureContent from "@/content/SecondFeature.Content";
import ThirdFeatureContent from "@/content/ThirdFeature.Content";
import UserReviewsContent from "@/content/UserReviews.Content";
import StatNumbersContent from "@/content/StatNumbers.Content";
import FAQContent from "@/content/FAQ.Content";
import CallToActionBlockContent from "@/content/CallToActionBlock.Content";
import FoundersNoteContent from "@/content/FoundersNote.Content";
import AppLayout from "@/common/layouts/AppLayout";

export default function LandingPage() {
  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>HouseFax</title>
        <meta name="description" content="HouseFax" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Background Gradient Image */}
      <GradientBackgroundImage
        src={HeroGradientBackground}
        className="opacity-80"
      />

      <AppLayout>
        {/* Hero Section with Logo Clouds */}
        <Section>
          <Hero {...HeroContent} />
          <LogoClouds {...LogoCloudsContent} />
        </Section>

        {/* Feature Grid Section */}
        <Section background="lighter" id="features">
          <FeatureGrid {...FeatureGridContent} />
          <GradientBackground position="bottom-left" />
          <GradientBackground position="bottom-right" />
        </Section>


<Section>
<div style={{ padding: "0px 7% !important" }}>

 <h2
            style={{ textAlign: "center", padding: "20px 0px 50px 0px" }}
            className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl"
          >
            How is HouseFax Different?
          </h2>
          <table className="min-w-full  border">
            <thead>
              <tr>
                <th style={{ textAlign: "left" }} className="px-4 py-2 border-b">Feature</th>
                <th style={{ textAlign: "left" }} className="px-4 py-2 border-b">House Fax</th>
                <th style={{ textAlign: "left" }} className="px-4 py-2 border-b">House Sigma</th>
                <th style={{ textAlign: "left" }} className="px-4 py-2 border-b">Zolo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">Real Time Valuation</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Rental Estimate</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Property Information</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Sales History</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Sold Comparables</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Property Images</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Investment Score</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b"></td>
                <td className="px-4 py-2 border-b"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">ROI Score</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b"></td>
                <td className="px-4 py-2 border-b"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Recommended Listings</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Market Trends</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Building Permit History</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b"></td>
                <td className="px-4 py-2 border-b"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Crime Score</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b"></td>
                <td className="px-4 py-2 border-b"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Lifestyle Score</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b">✅</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Reconstruction Cost</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b"></td>
                <td className="px-4 py-2 border-b"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Sustainability Score</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b"></td>
                <td className="px-4 py-2 border-b"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Efficiency Recommendations</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b"></td>
                <td className="px-4 py-2 border-b"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">AI Chatbot</td>
                <td className="px-4 py-2 border-b">✅</td>
                <td className="px-4 py-2 border-b"></td>
                <td className="px-4 py-2 border-b"></td>
              </tr>
            </tbody>
          </table></div>
         
        </Section>



        {/* Pricing Table Section */}
        <Section>
          <PricingTable {...PriceTableContent} />
        </Section>

        {/* Comparison Table Section */}
   
        {/* First Detailed Feature with Description */}
        <Section>
          <FeatureContent {...FirstFeatureContent} />
        </Section>

        {/* Second Detailed Feature with Description */}
        {/* <Section background="lighter">
          <FeatureContent {...SecondFeatureContent} />
        </Section> */}

        {/* Third Detailed Feature with Description */}
        {/* <Section>
          <FeatureContent {...ThirdFeatureContent} />
        </Section> */}

        {/* Testimonials Section */}
        <Section background="lighter" id="testimonials">
          <UserReviews {...UserReviewsContent} />
          <h2
            style={{ textAlign: "center", padding: "20px 0px" }}
            className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl"
          >
            Our Numbers
          </h2>
          <StatNumbers {...StatNumbersContent} />
        </Section>

        {/* FAQ Section */}
        <Section id="faq">
          <FAQ {...FAQContent} />
        </Section>

        {/* Call to Action Block Section */}
        <Section background="lighter">
          <CallToActionBlock {...CallToActionBlockContent} />
        </Section>

        {/* Founders Note Section */}
        <Section id="about">
          <GradientBackground position="top-left" />
          <GradientBackground position="top-right" />
          <GradientBackgroundImage
            src={LargeRedGradientBackground}
            position="bottom-0"
          />
          <FoundersNote {...FoundersNoteContent} />
        </Section>
      </AppLayout>
    </>
  );
}
