"use client";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";

const ContactForm = () => {
	const form = useForm({
		defaultValues: {
			firstname: "",
			lastname: "",
			email: "",
			phoneNumber: "",
			companyName: "",
			subject: "",
			message: "",
		},
	});

	const onSubmit = async (values: any) => {
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});

			const data = await response.json();
			if (response.ok) {
				alert(data.message);
			} else {
				alert(data.message);
			}
		} catch (error) {
			alert("Une erreur s'est produite lors de l'envoi du formulaire.");
			console.error(error);
		}
	};
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="text-left space-y-6 w-full shadow-md p-6 rounded-lg bg-white"
			>
				<div className="grid md:grid-cols-2 grid-cols-1 gap-4">
					<FormField
						name="lastname"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nom</FormLabel>
								<Input {...field} />
							</FormItem>
						)}
					/>
					<FormField
						name="firstname"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Prénom</FormLabel>
								<Input {...field} />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					name="phoneNumber"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Numéro de téléphone</FormLabel>
							<Input {...field} />
						</FormItem>
					)}
				/>
				<FormField
					name="companyName"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nom de l'entreprise</FormLabel>
							<Input {...field} />
						</FormItem>
					)}
				/>

				<FormField
					name="subject"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Objet du message</FormLabel>
							<Input {...field} />
						</FormItem>
					)}
				/>

				<FormField
					name="message"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Votre message</FormLabel>
							<Textarea
								rows={5}
								placeholder="Saisir votre message"
								{...field}
							/>
						</FormItem>
					)}
				/>

				<Button className="" type="submit">
					Envoyer
				</Button>
			</form>
		</Form>
	);
};

export default ContactForm;
