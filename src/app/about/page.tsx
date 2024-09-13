import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="At VAPS technology, we transform ideas into dynamic digital solutions tailored for startups, SaaS platforms, and business sites. Our expertise spans web and mobile development, full-stack solutions, and bespoke web design. We’re dedicated to delivering high-quality, fully customizable services that drive growth and establish a robust online presence. Ready to turn your vision into reality? We’re here to help every step of the way."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
