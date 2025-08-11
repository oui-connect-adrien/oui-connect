"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { useContactForm } from "@/shared/hooks/use-contact-form";
import { cn } from "@/shared/utils";
import { mergeForm, useForm, useTransform } from "@tanstack/react-form";
import { toast } from "sonner";

export function ContactForm() {
	const { state, dispatch, isPending } = useContactForm({
		onSuccess: (message) => {
			toast.success(message);
			form.reset();
		},
	});

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
		transform: useTransform(
			(baseForm) => mergeForm(baseForm, (state as unknown) ?? {}),
			[state]
		),
	});

	return (
		<form
			action={dispatch}
			onSubmit={form.handleSubmit}
			className="text-left space-y-6 w-full shadow-md p-6 rounded-lg bg-white"
			aria-labelledby="contact-form-title"
			noValidate
		>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-4">
				<form.Field
					name="lastname"
					validators={{
						onChange: ({ value }) => {
							if (!value?.trim()) {
								return "Le nom est requis";
							}
							if (value.trim().length < 2) {
								return "Le nom doit contenir au moins 2 caractères";
							}
							return undefined;
						},
						onBlur: ({ value }) => {
							if (value && !/^[a-zA-ZÀ-ÿ\s-']+$/.test(value)) {
								return "Le nom ne doit contenir que des lettres";
							}
							return undefined;
						},
					}}
				>
					{(field) => (
						<div className="space-y-2">
							<Label htmlFor={field.name} className="text-sm font-medium">
								Nom{" "}
								<span className="text-destructive" aria-label="champ requis">
									*
								</span>
							</Label>
							<Input
								id={field.name}
								name={field.name}
								type="text"
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
								placeholder="Votre nom"
								className={cn(
									"max-w-full",
									!field.state.meta.isValid
										? "border-destructive focus:border-destructive"
										: ""
								)}
								aria-invalid={!field.state.meta.isValid}
								aria-describedby={
									!field.state.meta.isValid ? `${field.name}-error` : undefined
								}
								aria-required="true"
								autoComplete="family-name"
								required
							/>
							{!field.state.meta.isValid &&
								field.state.meta.errors.length > 0 && (
									<p
										id={`${field.name}-error`}
										className="text-sm text-destructive"
										role="alert"
										aria-live="polite"
									>
										{field.state.meta.errors.join(", ")}
									</p>
								)}
						</div>
					)}
				</form.Field>

				<form.Field
					name="firstname"
					validators={{
						onChange: ({ value }) => {
							if (!value?.trim()) {
								return "Le prénom est requis";
							}
							if (value.trim().length < 2) {
								return "Le prénom doit contenir au moins 2 caractères";
							}
							return undefined;
						},
						onBlur: ({ value }) => {
							if (value && !/^[a-zA-ZÀ-ÿ\s-']+$/.test(value)) {
								return "Le prénom ne doit contenir que des lettres";
							}
							return undefined;
						},
					}}
				>
					{(field) => (
						<div className="space-y-2">
							<Label htmlFor={field.name} className="text-sm font-medium">
								Prénom{" "}
								<span className="text-destructive" aria-label="champ requis">
									*
								</span>
							</Label>
							<Input
								id={field.name}
								name={field.name}
								type="text"
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
								placeholder="Votre prénom"
								className={cn(
									"max-w-full",
									!field.state.meta.isValid
										? "border-destructive focus:border-destructive"
										: ""
								)}
								aria-invalid={!field.state.meta.isValid}
								aria-describedby={
									!field.state.meta.isValid ? `${field.name}-error` : undefined
								}
								aria-required="true"
								autoComplete="given-name"
								required
							/>
							{!field.state.meta.isValid &&
								field.state.meta.errors.length > 0 && (
									<p
										id={`${field.name}-error`}
										className="text-sm text-destructive"
										role="alert"
										aria-live="polite"
									>
										{field.state.meta.errors.join(", ")}
									</p>
								)}
						</div>
					)}
				</form.Field>
			</div>

			{/* Email */}
			<form.Field
				name="email"
				validators={{
					onChange: ({ value }) => {
						if (!value?.trim()) {
							return "L'email est requis";
						}
						return undefined;
					},
					onBlur: ({ value }) => {
						if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
							return "Format d'email invalide (exemple: nom@domaine.com)";
						}
						return undefined;
					},
				}}
			>
				{(field) => (
					<div className="space-y-2">
						<Label htmlFor={field.name} className="text-sm font-medium">
							Email{" "}
							<span className="text-destructive" aria-label="champ requis">
								*
							</span>
						</Label>
						<Input
							id={field.name}
							name={field.name}
							type="email"
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
							onBlur={field.handleBlur}
							placeholder="votre.email@exemple.com"
							className={cn(
								"max-w-full",
								!field.state.meta.isValid
									? "border-destructive focus:border-destructive"
									: ""
							)}
							aria-invalid={!field.state.meta.isValid}
							aria-describedby={
								!field.state.meta.isValid
									? `${field.name}-error`
									: `${field.name}-help`
							}
							aria-required="true"
							autoComplete="email"
							inputMode="email"
							required
						/>
						{!field.state.meta.isValid && field.state.meta.errors.length > 0 ? (
							<p
								id={`${field.name}-error`}
								className="text-sm text-destructive"
								role="alert"
								aria-live="polite"
							>
								{field.state.meta.errors.join(", ")}
							</p>
						) : (
							<p
								id={`${field.name}-help`}
								className="text-sm text-muted-foreground"
							>
								Nous utiliserons cet email pour vous recontacter
							</p>
						)}
					</div>
				)}
			</form.Field>

			{/* Numéro de téléphone */}
			<form.Field
				name="phoneNumber"
				validators={{
					onBlur: ({ value }) => {
						if (value && !/^[\d\s\-\+\(\)\.]+$/.test(value)) {
							return "Format de téléphone invalide";
						}
						if (value && value.replace(/\D/g, "").length < 10) {
							return "Le numéro de téléphone doit contenir au moins 10 chiffres";
						}
						return undefined;
					},
				}}
			>
				{(field) => (
					<div className="space-y-2">
						<Label htmlFor={field.name} className="text-sm font-medium">
							Numéro de téléphone
						</Label>
						<Input
							id={field.name}
							name={field.name}
							type="tel"
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
							onBlur={field.handleBlur}
							placeholder="06 12 34 56 78"
							className={cn(
								"max-w-full",
								!field.state.meta.isValid
									? "border-destructive focus:border-destructive"
									: ""
							)}
							aria-invalid={!field.state.meta.isValid}
							aria-describedby={
								!field.state.meta.isValid ? `${field.name}-error` : undefined
							}
							autoComplete="tel"
							inputMode="tel"
						/>
						{!field.state.meta.isValid &&
							field.state.meta.errors.length > 0 && (
								<p
									id={`${field.name}-error`}
									className="text-sm text-destructive"
									role="alert"
									aria-live="polite"
								>
									{field.state.meta.errors.join(", ")}
								</p>
							)}
					</div>
				)}
			</form.Field>

			{/* Nom de l'entreprise */}
			<form.Field
				name="companyName"
				validators={{
					onBlur: ({ value }) => {
						if (value && value.trim().length < 2) {
							return "Le nom de l'entreprise doit contenir au moins 2 caractères";
						}
						return undefined;
					},
				}}
			>
				{(field) => (
					<div className="space-y-2">
						<Label htmlFor={field.name} className="text-sm font-medium">
							Nom de l'entreprise
						</Label>
						<Input
							id={field.name}
							name={field.name}
							type="text"
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
							onBlur={field.handleBlur}
							placeholder="Votre entreprise"
							className={cn(
								"max-w-full",
								!field.state.meta.isValid
									? "border-destructive focus:border-destructive"
									: ""
							)}
							aria-invalid={!field.state.meta.isValid}
							aria-describedby={
								!field.state.meta.isValid ? `${field.name}-error` : undefined
							}
							autoComplete="organization"
						/>
						{!field.state.meta.isValid &&
							field.state.meta.errors.length > 0 && (
								<p
									id={`${field.name}-error`}
									className="text-sm text-destructive"
									role="alert"
									aria-live="polite"
								>
									{field.state.meta.errors.join(", ")}
								</p>
							)}
					</div>
				)}
			</form.Field>

			{/* Objet du message */}
			<form.Field
				name="subject"
				validators={{
					onChange: ({ value }) => {
						if (!value?.trim()) {
							return "L'objet du message est requis";
						}
						if (value.trim().length < 5) {
							return "L'objet doit contenir au moins 5 caractères";
						}
						return undefined;
					},
				}}
			>
				{(field) => (
					<div className="space-y-2">
						<Label htmlFor={field.name} className="text-sm font-medium">
							Objet du message{" "}
							<span className="text-destructive" aria-label="champ requis">
								*
							</span>
						</Label>
						<Input
							id={field.name}
							name={field.name}
							type="text"
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
							onBlur={field.handleBlur}
							placeholder="Objet de votre message"
							className={cn(
								"max-w-full",
								!field.state.meta.isValid
									? "border-destructive focus:border-destructive"
									: ""
							)}
							aria-invalid={!field.state.meta.isValid}
							aria-describedby={
								!field.state.meta.isValid ? `${field.name}-error` : undefined
							}
							aria-required="true"
							required
						/>
						{!field.state.meta.isValid &&
							field.state.meta.errors.length > 0 && (
								<p
									id={`${field.name}-error`}
									className="text-sm text-destructive"
									role="alert"
									aria-live="polite"
								>
									{field.state.meta.errors.join(", ")}
								</p>
							)}
					</div>
				)}
			</form.Field>

			{/* Message */}
			<form.Field
				name="message"
				validators={{
					onChange: ({ value }) => {
						if (!value?.trim()) {
							return "Le message est requis";
						}
						if (value.trim().length < 10) {
							return "Le message doit contenir au moins 10 caractères";
						}
						if (value.trim().length > 1000) {
							return "Le message ne peut pas dépasser 1000 caractères";
						}
						return undefined;
					},
				}}
			>
				{(field) => (
					<div className="space-y-2">
						<Label htmlFor={field.name} className="text-sm font-medium">
							Votre message{" "}
							<span className="text-destructive" aria-label="champ requis">
								*
							</span>
						</Label>
						<Textarea
							id={field.name}
							name={field.name}
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
							onBlur={field.handleBlur}
							placeholder="Décrivez votre demande ou posez votre question..."
							rows={5}
							className={cn(
								"resize-none w-full max-w-full",
								!field.state.meta.isValid
									? "border-destructive focus:border-destructive"
									: ""
							)}
							aria-invalid={!field.state.meta.isValid}
							aria-describedby={
								!field.state.meta.isValid
									? `${field.name}-error`
									: `${field.name}-help`
							}
							aria-required="true"
							maxLength={1000}
							required
						/>
						{!field.state.meta.isValid && field.state.meta.errors.length > 0 ? (
							<p
								id={`${field.name}-error`}
								className="text-sm text-destructive"
								role="alert"
								aria-live="polite"
							>
								{field.state.meta.errors.join(", ")}
							</p>
						) : (
							<p
								id={`${field.name}-help`}
								className="text-sm text-muted-foreground"
								aria-live="polite"
							>
								{field.state.value.length}/1000 caractères
							</p>
						)}
					</div>
				)}
			</form.Field>

			{/* Section des erreurs et bouton */}
			<div className="space-y-4 border-t pt-6">
				<div className="text-sm text-muted-foreground">
					<p>
						<span className="text-destructive" aria-hidden="true">
							*
						</span>
						<span className="ml-1">Champs obligatoires</span>
					</p>
				</div>

				{/* Erreurs globales */}
				<form.Subscribe selector={(state) => [state.errorMap]}>
					{([errorMap]) =>
						errorMap.onSubmit ? (
							<div
								className="p-3 bg-destructive/10 border border-destructive/20 rounded-md"
								role="alert"
								aria-live="assertive"
							>
								<p className="text-sm text-destructive">
									Erreur lors de l'envoi : {errorMap.onSubmit}
								</p>
							</div>
						) : null
					}
				</form.Subscribe>

				{/* Bouton de soumission */}
				<form.Subscribe
					selector={(state) => [state.canSubmit, state.isSubmitting]}
				>
					{([canSubmit]) => (
						<Button
							type="submit"
							disabled={!canSubmit || isPending}
							aria-disabled={!canSubmit || isPending}
							aria-describedby={!canSubmit ? "submit-help" : undefined}
							className="w-full md:w-auto"
						>
							{isPending ? "Envoi en cours..." : "Envoyer"}
						</Button>
					)}
				</form.Subscribe>

				{!form.state.canSubmit &&
					form.state.isTouched &&
					!form.state.isSubmitting && (
						<p id="submit-help" className="text-sm text-muted-foreground">
							Veuillez corriger les erreurs ci-dessus avant d'envoyer le
							formulaire
						</p>
					)}
			</div>
		</form>
	);
}
