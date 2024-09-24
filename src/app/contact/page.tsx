import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="At VAPS technology, we're committed to providing exceptional support and ensuring you have everything you need to succeed. Whether you have questions, need assistance, or want to explore collaboration opportunities, we're here to help."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
