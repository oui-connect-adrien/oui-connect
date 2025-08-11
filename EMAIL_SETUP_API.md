# Configuration Email - API Externe

## 📧 Nouveau système d'envoi d'email

Le système d'envoi d'email a été refactorisé pour utiliser une API externe au lieu de nodemailer. Cette approche simplifie la configuration et améliore la fiabilité.

## 🔧 Configuration requise

### Variables d'environnement (optionnelles)

Aucune variable d'environnement n'est strictement requise pour le fonctionnement de base.

### API utilisée

L'envoi d'email utilise l'API externe conforme à la documentation Swagger :

```
POST https://www.sms.scan.oui-connect.fr/email_management/send_email
Content-Type: multipart/form-data
```

### Champs API (selon Swagger)

- `subject` (string) - Sujet de l'email
- `text` (string) - Contenu texte de l'email
- `email` (string) - Adresse email du destinataire
- `attachment` (binary, optionnel) - Fichier joint

## 📋 Destinataires configurés

Les emails sont automatiquement envoyés aux destinataires suivants :

- `support@oui-connect.fr`
- `b.warion@oui-connect.fr`
- `g.capitaine@cometi.fr`

## 🚀 Avantages de cette approche

1. **Simplicité** : Plus besoin de configurer SMTP, mots de passe d'application Gmail, etc.
2. **Fiabilité** : L'API externe gère la livraison des emails
3. **Maintenance** : Moins de configuration côté application
4. **Sécurité** : Pas de stockage d'identifiants email sensibles

## 🔍 Fonctionnement

1. Le formulaire de contact collecte les données utilisateur (nom, prénom, email, téléphone, entreprise, sujet, message)
2. Les données sont validées avec Zod
3. Un email formaté est créé avec toutes les informations dans le champ `text`
4. Pour chaque destinataire, un appel API est fait avec :
   - `subject`: Sujet formaté avec les infos du contact
   - `text`: Corps de l'email avec toutes les données formatées
   - `email`: Adresse du destinataire
5. La réponse JSON est parsée selon la spec Swagger : `{"data_type": "message", "message": "Email envoyé avec succès à..."}`
6. Les résultats sont loggés pour le debugging

## 🛠️ Debugging

En cas de problème, consultez les logs de la console qui incluent :

- Status des réponses API pour chaque destinataire
- Headers de réponse
- Réponses JSON parsées selon la spec Swagger
- Validation des champs `data_type` et `message`
- Erreurs détaillées en cas d'échec (réseau, API, parsing)

### Format de réponse attendu (Swagger)

```json
{
	"data_type": "message",
	"message": "Email envoyé avec succès à destinataire@example.com"
}
```

**Note** : L'API peut retourner une réponse vide (content-length: 0) avec un status 201, ce qui est géré automatiquement par le système.

## ⚠️ Points d'attention

- L'API externe doit être accessible depuis votre serveur
- Les timeouts réseau sont gérés automatiquement par fetch()
- En cas d'échec pour un destinataire, les autres tentatives continuent
