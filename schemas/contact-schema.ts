import { z } from "zod";

export const contactSchema = z.object({
	firstname: z
		.string()
		.min(2, "Le prénom doit contenir au moins 2 caractères")
		.max(50, "Le prénom ne peut pas dépasser 50 caractères")
		.regex(/^[a-zA-ZÀ-ÿ\s-']+$/, "Le prénom ne doit contenir que des lettres"),
	lastname: z
		.string()
		.min(2, "Le nom doit contenir au moins 2 caractères")
		.max(50, "Le nom ne peut pas dépasser 50 caractères")
		.regex(/^[a-zA-ZÀ-ÿ\s-']+$/, "Le nom ne doit contenir que des lettres"),
	email: z
		.string()
		.email("Format d'email invalide")
		.min(1, "L'email est requis"),
	phoneNumber: z
		.string()
		.optional()
		.refine(
			(value) => !value || /^[\d\s\-\+\(\)\.]+$/.test(value),
			"Format de téléphone invalide"
		)
		.refine(
			(value) => !value || value.replace(/\D/g, "").length >= 10,
			"Le numéro de téléphone doit contenir au moins 10 chiffres"
		),
	companyName: z
		.string()
		.optional()
		.refine(
			(value) => !value || value.trim().length >= 2,
			"Le nom de l'entreprise doit contenir au moins 2 caractères"
		),
	subject: z
		.string()
		.min(5, "L'objet doit contenir au moins 5 caractères")
		.max(100, "L'objet ne peut pas dépasser 100 caractères"),
	message: z
		.string()
		.min(10, "Le message doit contenir au moins 10 caractères")
		.max(1000, "Le message ne peut pas dépasser 1000 caractères"),
});
