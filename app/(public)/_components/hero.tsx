"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const Hero = () => {
	return (
		<AuroraBackground>
			<div
				id="hero"
				className="relative min-h-screen py-4 antialiased overflow-hidden"
			>
				<div className="z-10 relative lg:container lg:pt-40 pt-24 px-4 flex flex-col items-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-8 mt-20 relative text-center text-zinc-700 max-w-6xl mx-auto">
						Maîtrisez les données de vos{" "}
						<span className="relative bg-clip-text text-transparent bg-gradient-to-t from-primary to-primary/[0.8] z-10">
							ressources matérielles
						</span>
					</h1>
					<h2 className="relative font-regular text-base md:text-xl text-zinc-500 tracking-wide mb-8 text-center max-w-3xl mx-auto antialiased">
						Améliorez le suivi et la gestion de vos actifs et ressources
						matérielles et gagnez du temps grâce à nos solutions web simples et
						accessibles.
					</h2>
					<div className="flex justify-center items-center">
						<HoverBorderGradient
							containerClassName="rounded-full"
							as="button"
							className="flex items-center space-x-2"
						>
							<span>Démo gratuite</span>
						</HoverBorderGradient>
					</div>
				</div>
			</div>
		</AuroraBackground>
	);
};

export default Hero;
