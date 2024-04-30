const TarifsPage = () => {
	const tabs = [
		{
			title: "Oui-Energy",
			value: "oui-energy",
			content: (
				<div className="border w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
					<p>Product Tab</p>
				</div>
			),
		},
		{
			title: "Oui-Access",
			value: "oui-access",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
					<p>Services tab</p>
				</div>
			),
		},
		{
			title: "Oui-Scan",
			value: "oui-scan",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
					<p>Playground tab</p>
				</div>
			),
		},
	];
	return (
		<section
			id="hero"
			className="min-h-screen py-4 antialiased overflow-hidden"
		>
			<div className="pb-20 pt-14 px-4 flex flex-col items-center">
				<div className="mb-14 shadow-b-2 shadow-slate-100 lg:container">
					<h1 className="text-3xl md:text-6xl font-bold mb-8 mt-20 relative text-center text-zinc-700 max-w-6xl mx-auto">
						Formules d'abonnement
					</h1>
					<h2 className="font-regular text-base md:text-xl text-zinc-500 tracking-wide text-center max-w-3xl mx-auto antialiased">
						Choisissez la formule qui vous convient le mieux
					</h2>
				</div>
				<div className="min-h-96 relative mx-auto w-full [mask-image:linear-gradient(to_top,transparent,white_20%,white_90%,transparent)] [webkit-mask-image:linear-gradient(to_top,transparent,white_20%,white_80%,transparent)] bg-grid-slate-100/70">
					<div className="lg:container mt-14 grow flex flex-col [perspective:1000px] items-start justify-start"></div>
				</div>
			</div>
		</section>
	);
};

export default TarifsPage;
