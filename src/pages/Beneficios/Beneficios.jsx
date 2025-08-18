import "../../index.css";
import "../../mediaquery.css";
import HeroSection from "../../components/Beneficios/HeroSection";
import KeyBenefits from "../../components/Beneficios/KeyBenefits";
import ROISection from "../../components/Beneficios/ROISection";
import CaseStudies from "../../components/Beneficios/CaseStudies";
import Sustainability from "../../components/Beneficios/Sustainability";
import CTASection from "../../components/Beneficios/CTASection";

export default function Beneficios() {
    return (
        <main>
            {/* Hero Section */}
            <HeroSection />

            {/* Key Benefits */}
            <KeyBenefits />

            {/* ROI Section */}
            <ROISection />

            {/* Case Studies */}
            <CaseStudies />

            {/* Sustainability */}
            <Sustainability />

            {/* CTA Section */}
            <CTASection />
        </main>
    );
}
