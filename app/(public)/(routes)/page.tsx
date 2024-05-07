import Hero from "@/app/(public)/_components/hero";
import ProjectsList from "@/app/(public)/_components/projects-list";
import QuoteRequest from "@/app/(public)/_components/quote-request";
import StatisticsList from "@/app/(public)/_components/statistics-list";
import ClientFeedback from "../_components/client-feedback";

export default function Home() {
	return (
		<>
			<Hero />
			<ProjectsList />
			<StatisticsList />
			<ClientFeedback />
			<QuoteRequest />
		</>
	);
}
