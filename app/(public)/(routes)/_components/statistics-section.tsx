"use client";

import { InfiniteMovingCards } from "../../../../components/ui/infinite-moving-cards";
import Statistic from "./statistic";

const StatisticsSection = () => {
	const partners = [
		{
			imageUrl: "/partners/agromousquetaires-ranou.png",
		},
		{
			imageUrl: "/partners/akwel.png",
		},
		{
			imageUrl: "/partners/bellavol.png",
		},
		{
			imageUrl: "/partners/blini.png",
		},
		{
			imageUrl: "/partners/bonilait.png",
		},
		{
			imageUrl: "/partners/charal.png",
		},
		{
			imageUrl: "/partners/cometi.png",
		},
		{
			imageUrl: "/partners/ennolys-by-lesaffre.png",
		},
		{
			imageUrl: "/partners/lactalis.png",
		},
		{
			imageUrl: "/partners/laita.png",
		},
		{
			imageUrl: "/partners/LSDH.png",
		},
		{
			imageUrl: "/partners/lustucru.png",
		},
		{
			imageUrl: "/partners/nutribio.png",
		},
		{
			imageUrl: "/partners/smurfit-kappa.png",
		},
		{
			imageUrl: "/partners/storopack.png",
		},
		{
			imageUrl: "/partners/tibbloc.png",
		},
		{
			imageUrl: "/partners/total.png",
		},
		{
			imageUrl: "/partners/whats-cooking.png",
		},
	];

	const stats = [
		{ number: 37, label: "Clients nous font déjà confiance", duration: 2.5 },
		{ number: 102, label: "Plus de 100 installations suivies", duration: 3 },
		{ number: "40%", label: "De croissance en 2022", duration: 2 },
	];

	return (
		<section
			id="hero"
			className="relative min-h-screen bg-grid-small-black/[0.2] py-4 antialiased overflow-hidden"
		>
			<div className="z-10 relative lg:container pt-20 px-4 flex flex-col gap-8 items-center">
				<div className="mb-12">
					<h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-neutral-700 max-w-6xl mx-auto">
						Nos garanties en quelques chiffres
					</h2>

					<p className="text-center text-neutral-500 mb-12 max-w-3xl text-xl mx-auto">
						Découvrez toutes les raisons de nous faire confiance
					</p>
					<div className="grid lg:grid-cols-3 gap-8 w-full">
						{stats.map((stat, index) => (
							<Statistic
								key={index}
								value={stat.number}
								label={stat.label}
								duration={stat.duration}
							/>
						))}
					</div>
				</div>
				<div>
					<h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-neutral-700 max-w-6xl mx-auto">
						Ils nous font confiance
					</h2>
					<div className="mt-8 rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
						<InfiniteMovingCards
							items={partners}
							pauseOnHover={false}
							direction="right"
							speed="slow"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StatisticsSection;
