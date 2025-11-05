"use client";
import { Reveal } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Clock, FileText, Rocket } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
	return (
		<div className="relative border py-4 antialiased overflow-hidden">
			{/* Hero Section */}
			<div className="z-10 relative lg:container pt-24 px-4 flex flex-col items-center min-h-[60vh] justify-center">
				<Reveal amount={0.2} delay={0}>
					<div className="flex items-center justify-center mb-8">
						<div className="p-4 bg-primary/10 rounded-full">
							<Rocket className="w-16 h-16 text-primary" />
						</div>
					</div>
				</Reveal>

				<Reveal amount={0.2} delay={0.1}>
					<h1 className="text-4xl md:text-6xl font-bold mb-8 relative text-center text-zinc-700 max-w-6xl mx-auto">
						Blog Oui-Connect
					</h1>
				</Reveal>

				<Reveal amount={0.2} delay={0.2}>
					<h2 className="relative font-regular text-base md:text-xl text-zinc-500 tracking-wide mb-12 text-center max-w-3xl mx-auto antialiased">
						Actualités, guides et conseils sur les technologies web et la
						digitalisation industrielle.
					</h2>
				</Reveal>

				{/* Under Construction Message */}
				<Reveal amount={0.2} delay={0.3}>
					<div className="bg-zinc-100 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border-2 border-zinc-200">
						<div className="flex items-center justify-center mb-6">
							<Clock className="w-12 h-12 text-primary animate-pulse" />
						</div>
						<h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-zinc-700">
							En construction
						</h3>
						<p className="text-base md:text-lg text-zinc-600 text-center mb-8">
							Notre blog est actuellement en cours de développement. Nous
							travaillons activement à vous proposer du contenu de qualité sur
							les technologies web, l'IoT industriel et nos solutions innovantes.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<div className="flex items-center gap-2 text-zinc-600">
								<FileText className="w-5 h-5 text-primary" />
								<span className="text-sm">Articles à venir</span>
							</div>
							<div className="flex items-center gap-2 text-zinc-600">
								<Rocket className="w-5 h-5 text-primary" />
								<span className="text-sm">Guides techniques</span>
							</div>
						</div>
					</div>
				</Reveal>
			</div>

			{/* CTA Section */}
			<div className="bg-zinc-100 mt-24 py-24">
				<div className="z-10 relative lg:container px-4 flex flex-col items-center">
					<Reveal amount={0.2} delay={0}>
						<h3 className="text-3xl font-bold mb-8 text-center text-neutral-700 max-w-6xl mx-auto">
							Découvrez nos solutions dès maintenant
						</h3>
					</Reveal>
					<Reveal amount={0.2} delay={0.2}>
						<p className="text-base text-zinc-500 text-center max-w-2xl mb-12">
							En attendant le lancement de notre blog, explorez nos solutions de
							digitalisation industrielle et découvrez comment nous pouvons vous
							accompagner.
						</p>
					</Reveal>
					<div className="flex flex-col sm:flex-row gap-4">
						<Reveal amount={0.2} delay={0.3}>
							<Button asChild size="lg" variant="default">
								<Link href="/#solutions">Nos solutions</Link>
							</Button>
						</Reveal>
						<Reveal amount={0.2} delay={0.4}>
							<Button asChild size="lg" variant="outline">
								<Link href="/#contact">Nous contacter</Link>
							</Button>
						</Reveal>
					</div>
				</div>
			</div>
		</div>
	);
}
