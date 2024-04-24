import HeroSection from "@/app/(public)/(routes)/_components/hero-section";
import ProjectsSection from "@/app/(public)/(routes)/_components/projects-section";
import QuoteRequestSection from "@/app/(public)/(routes)/_components/quote-request-section";
import StatisticsSection from "@/app/(public)/(routes)/_components/statistics-section";
import ClientFeedbackSection from "./_components/client-feedback-section";

export default function Home() {
	return (
		<>
			<HeroSection />
			<ProjectsSection />
			<StatisticsSection />
			<ClientFeedbackSection />
			<QuoteRequestSection />
		</>
	);
}
