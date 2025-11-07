# Architecture du Blog

Ce document explique l'organisation du code du blog Next.js avec MDX.

## Structure des dossiers

```
app/(public)/blog/
├── _content/          # Articles MDX
│   ├── premier-article.mdx
│   └── guide-demarrage.mdx
├── _types/            # Types et interfaces TypeScript
│   └── index.ts
├── _constants/        # Constantes de configuration
│   └── index.ts
├── _queries/          # Fonctions de récupération des données
│   ├── index.ts
│   ├── get-blog-posts.ts
│   └── get-related-posts.ts
├── _lib/              # Fonctions utilitaires
│   ├── index.ts
│   └── utils.ts
├── [slug]/            # Page article dynamique
│   └── page.tsx
├── page.tsx           # Page liste des articles
└── README.md          # Ce fichier
```

## Conventions

### Dossiers préfixés par underscore

Les dossiers `_content`, `_types`, `_constants`, `_queries` et `_lib` sont préfixés par un underscore pour indiquer qu'ils ne sont **pas** des routes Next.js. Cela évite toute confusion avec le routing de Next.js.

### Organisation par responsabilité

- **`_content/`** : Contient les articles MDX
- **`_types/`** : Définit les interfaces et types TypeScript
- **`_constants/`** : Centralise les constantes (configuration, messages d'erreur)
- **`_queries/`** : Fonctions de récupération des données (Server Actions)
- **`_lib/`** : Fonctions utilitaires pures

## Types (`_types/`)

### `BlogPostMetadata`
Interface pour les métadonnées d'un article de blog.

```typescript
interface BlogPostMetadata {
  title: string;
  date: string;
  author: string;
  description: string;
  slug: string;
}
```

### `BlogMetadata`
Interface pour les métadonnées dans les fichiers MDX.

```typescript
interface BlogMetadata {
  title: string;
  date: string;
  author: string;
  description: string;
}
```

## Constantes (`_constants/`)

### `BLOG_CONFIG`
Configuration principale du blog :
- `WORDS_PER_MINUTE` : 200 (calcul temps de lecture)
- `RELATED_POSTS_LIMIT` : 3 (nombre d'articles relatés)
- `CONTENT_PATH` : Chemin vers les articles MDX
- `ERRORS` : Messages d'erreur

### `METADATA_FIELDS`
Définit les champs requis et optionnels des métadonnées.

## Queries (`_queries/`)

Toutes les queries utilisent la directive `"use server"` pour être exécutées côté serveur.

### `getBlogPosts()`
Récupère tous les articles du blog avec leurs métadonnées, triés par date décroissante.

**Retour :** `Promise<BlogPostMetadata[]>`

**Exemple :**
```typescript
import { getBlogPosts } from '@/app/(public)/blog/_queries';

const posts = await getBlogPosts();
```

### `getRelatedPosts(currentSlug, limit)`
Récupère les articles relatés pour un article donné.

**Paramètres :**
- `currentSlug` : Slug de l'article actuel
- `limit` : Nombre max d'articles (défaut: 3)

**Retour :** `Promise<BlogPostMetadata[]>`

**Exemple :**
```typescript
import { getRelatedPosts } from '@/app/(public)/blog/_queries';

const related = await getRelatedPosts('mon-article', 3);
```

## Utilitaires (`_lib/`)

### `isValidSlug(slug)`
Valide qu'un slug est sécurisé (protection contre path traversal).

**Paramètres :** `slug: string`
**Retour :** `boolean`

### `formatDate(dateString)`
Formate une date au format français.

**Paramètres :** `dateString: string` (ISO format)
**Retour :** `string` (ex: "7 novembre 2025")

### `calculateReadingTime(content)`
Calcule le temps de lecture estimé.

**Paramètres :** `content: string`
**Retour :** `number` (minutes)

## Compatibilité

Pour maintenir la compatibilité avec le code existant, le fichier `lib/blog.ts` à la racine ré-exporte tous les types et fonctions depuis la nouvelle architecture :

```typescript
// Ancien import (toujours fonctionnel)
import { getBlogPosts } from '@/lib/blog';

// Nouvel import (recommandé)
import { getBlogPosts } from '@/app/(public)/blog/_queries';
```

## Ajout d'un nouvel article

1. Créer un fichier `.mdx` dans `_content/`
2. Ajouter les métadonnées obligatoires :
```mdx
export const metadata = {
  title: "Titre de l'article",
  date: "2025-11-07",
  author: "Auteur",
  description: "Description de l'article"
}

# Titre de l'article

Contenu...
```

3. L'article sera automatiquement :
   - Inclus dans la liste des articles
   - Ajouté au sitemap.xml
   - Ajouté au RSS feed
   - Généré en SSG au build

## Composants disponibles dans MDX

Grâce aux composants MDX personnalisés (`mdx-components.tsx`), vous pouvez utiliser :

- **Images** : Automatiquement optimisées avec Next.js Image
- **Liens externes** : Icône et `target="_blank"` automatiques
- **Code** : Blocs et inline stylisés
- **Callout** : Alertes colorées (info, warning, success, error)
- **Tableaux** : Responsifs avec overflow
- **Citations** : Bordure colorée

## Server Actions

Les queries utilisent `"use server"` pour être exécutées uniquement côté serveur, garantissant :
- Sécurité (pas d'accès filesystem côté client)
- Performance (cache Next.js)
- SEO (contenu rendu côté serveur)

## Roadmap

### Phase 2 ✅
- [x] Composants MDX personnalisés
- [x] Breadcrumbs
- [x] Articles relatés
- [x] RSS Feed

### Phase 3 (À venir)
- [ ] Système de catégories/tags
- [ ] Recherche full-text
- [ ] Table des matières
- [ ] Boutons de partage social
- [ ] Commentaires (Giscus)
- [ ] Analytics de lecture
