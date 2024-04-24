"use client";

import Link from "next/link";
import { projects } from "../app/(public)/(routes)/_components/projects-section";

const Footer = () => {
	return (
		<footer className="lg:container lg:mt-20 mt-10 py-12 sm:py-16 lg:py-20">
			<div className="mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
					<div>
						<h4 className="font-semibold mb-4">Nos solutions</h4>
						<nav className="space-y-2">
							{projects.map((project) => (
								<Link key={project.link} href={project.link}>
									<span className="cursor-pointer text-sm block py-2">
										{project.name}
									</span>
								</Link>
							))}
						</nav>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Resources</h4>
						<nav className="space-y-2"></nav>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Newsletter</h4>
						<p className="mb-4">
							Subscribe to our newsletter to stay up-to-date with our latest
							news and updates.
						</p>
					</div>
				</div>
				<div className="mt-12 lg:mt-10 border-t pt-8 sm:pt-10 lg:pt-12 text-sm">
					<p>© 2024 Oui-Connect. Tous droits réservés.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
