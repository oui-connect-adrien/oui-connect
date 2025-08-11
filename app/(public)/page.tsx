import { About } from "./components/about/about";
import { Contact } from "./components/contact";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects/projects";

export default function Home() {
	return (
		<>
			<Hero />
			<Projects />
			<About />
			<Contact />
		</>
	);
}
