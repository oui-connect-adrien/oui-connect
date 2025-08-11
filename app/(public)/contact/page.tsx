import { ContactForm } from "@/app/(public)/components/contact-form";

export default function ContactPage() {
	return (
		<div className="mask-[linear-gradient(to_top,transparent,white_10%,white_90%,transparent)] relative min-h-screen bg-grid-slate-100/70 pt-4 pb-32 antialiased overflow-hidden">
			<div className="z-10 relative lg:container pt-24 px-4 flex flex-col items-center">
				<h1 className="text-4xl md:text-6xl font-bold mb-8 mt-12 relative text-center text-zinc-700 max-w-6xl mx-auto">
					Contactez-nous
				</h1>
				<h2 className="relative font-regular text-base md:text-xl text-zinc-500 tracking-wide mb-8 text-center max-w-3xl mx-auto antialiased">
					Vous avez une question ou souhaitez en savoir plus sur nos solutions ?
					N'hésitez pas à nous contacter via le formulaire ci-dessous.
				</h2>
				<div className="w-full lg:max-w-3xl mt-10">
					<ContactForm />
				</div>
			</div>
		</div>
	);
}
