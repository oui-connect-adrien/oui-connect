/**
 * Script de vérification de la Phase 1 du blog
 * Vérifie que tous les composants sont correctement implémentés
 */

import { getBlogPosts } from '../app/(public)/blog/_queries';
import { isValidSlug, formatDate, calculateReadingTime } from '../app/(public)/blog/_lib';

async function verifyPhase1() {
	console.log('🔍 VÉRIFICATION PHASE 1 - BLOG NEXT.JS 16\n');
	console.log('='.repeat(50) + '\n');

	let totalTests = 0;
	let passedTests = 0;

	// Test 1: lib/blog.ts - getBlogPosts
	console.log('📝 Test 1: Extraction des métadonnées des articles');
	totalTests++;
	try {
		const posts = await getBlogPosts();
		console.log(`   ✓ Articles trouvés: ${posts.length}`);

		if (posts.length > 0) {
			posts.forEach((post, index) => {
				console.log(`   Article ${index + 1}:`);
				console.log(`     - Titre: ${post.title}`);
				console.log(`     - Slug: ${post.slug}`);
				console.log(`     - Date: ${post.date}`);
				console.log(`     - Auteur: ${post.author}`);
				console.log(`     - Description: ${post.description.substring(0, 50)}...`);
			});
			passedTests++;
		} else {
			console.log('   ❌ Aucun article trouvé');
		}
	} catch (error) {
		console.log(`   ❌ Erreur: ${error}`);
	}
	console.log('');

	// Test 2: Validation des slugs
	console.log('🔒 Test 2: Validation de sécurité des slugs');
	totalTests++;
	const slugTests = [
		{ slug: 'premier-article', expected: true, desc: 'Slug valide' },
		{ slug: 'guide-demarrage', expected: true, desc: 'Slug valide avec tirets' },
		{ slug: '../../../etc/passwd', expected: false, desc: 'Path traversal' },
		{ slug: 'article/hack', expected: false, desc: 'Slash dans le slug' },
		{ slug: 'article\\hack', expected: false, desc: 'Backslash dans le slug' },
		{ slug: '', expected: false, desc: 'Slug vide' },
		{ slug: 'Article-123', expected: true, desc: 'Slug avec chiffres' },
	];

	let slugTestsPassed = 0;
	slugTests.forEach((test) => {
		const result = isValidSlug(test.slug);
		if (result === test.expected) {
			console.log(`   ✓ ${test.desc}: "${test.slug}" -> ${result}`);
			slugTestsPassed++;
		} else {
			console.log(`   ❌ ${test.desc}: "${test.slug}" -> ${result} (attendu: ${test.expected})`);
		}
	});

	if (slugTestsPassed === slugTests.length) {
		passedTests++;
		console.log(`   ✓ Tous les tests de validation passés (${slugTestsPassed}/${slugTests.length})`);
	} else {
		console.log(`   ❌ Certains tests ont échoué (${slugTestsPassed}/${slugTests.length})`);
	}
	console.log('');

	// Test 3: Formatage des dates
	console.log('📅 Test 3: Formatage des dates en français');
	totalTests++;
	const dateTests = [
		{ date: '2025-11-07', expected: '7 novembre 2025' },
		{ date: '2024-01-01', expected: '1 janvier 2024' },
	];

	let dateTestsPassed = 0;
	dateTests.forEach((test) => {
		const result = formatDate(test.date);
		if (result === test.expected) {
			console.log(`   ✓ ${test.date} -> ${result}`);
			dateTestsPassed++;
		} else {
			console.log(`   ❌ ${test.date} -> ${result} (attendu: ${test.expected})`);
		}
	});

	if (dateTestsPassed === dateTests.length) {
		passedTests++;
	}
	console.log('');

	// Test 4: Calcul du temps de lecture
	console.log('⏱️  Test 4: Calcul du temps de lecture');
	totalTests++;
	const sampleText = 'Lorem ipsum '.repeat(200); // ~200 mots
	const readingTime = calculateReadingTime(sampleText);
	if (readingTime === 1) {
		console.log(`   ✓ Temps de lecture calculé: ${readingTime} minute`);
		passedTests++;
	} else {
		console.log(`   ❌ Temps de lecture incorrect: ${readingTime} minutes (attendu: 1)`);
	}
	console.log('');

	// Résumé
	console.log('='.repeat(50));
	console.log(`\n📊 RÉSUMÉ: ${passedTests}/${totalTests} tests réussis`);

	if (passedTests === totalTests) {
		console.log('✅ PHASE 1 COMPLÈTEMENT VALIDÉE!\n');
		process.exit(0);
	} else {
		console.log('⚠️  Certains tests ont échoué\n');
		process.exit(1);
	}
}

verifyPhase1().catch((error) => {
	console.error('❌ Erreur lors de la vérification:', error);
	process.exit(1);
});
