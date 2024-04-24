import { Tabs } from "@/components/ui/tabs";

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
				<div className="mb-14 border-b lg:container border-4">
					<h1 className="text-3xl md:text-6xl font-bold mb-8 mt-20 relative text-center text-zinc-700 max-w-6xl mx-auto">
						Formules d'abonnement
					</h1>
					<h2 className="font-regular text-base md:text-xl text-zinc-500 tracking-wide mb-8 text-center max-w-3xl mx-auto antialiased">
						Choisissez la formule qui vous convient le mieux
					</h2>
				</div>
				<div className="[perspective:1000px] min-h-screen relative flex flex-col mx-auto w-full items-start justify-start">
					<Tabs
						contentClassName="bg-white border-4"
						activeTabClassName="bg-gradient-to-r from-primary to-transparent"
						tabClassName="bg-gradient-to-r from-transparent to-primary/10"
						tabs={tabs}
					/>
				</div>
			</div>
		</section>
	);
};

export default TarifsPage;
