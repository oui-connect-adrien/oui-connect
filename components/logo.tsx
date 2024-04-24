"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<Link href="/">
			<div className="relative w-[200px] h-[80px]">
				<Image src="/logo.png" alt="logo" layout="fill" objectFit="contain" />
			</div>
		</Link>
	);
};

export default Logo;
