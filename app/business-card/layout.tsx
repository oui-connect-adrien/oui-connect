import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex flex-col">
			<Navbar />
			{children}
			<Footer />
		</main>
	);
};

export default PublicLayout;
