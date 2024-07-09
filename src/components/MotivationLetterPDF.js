import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import signatureImage from '../ressources/signature.png';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  contact: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 1,
  },
  recipient: {
    marginTop: 15,
    marginBottom: 15,
  },
  recipientText: {
    fontSize: 11,
  },
  subject: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 11,
    lineHeight: 1.5,
  },
  paragraph: {
    marginBottom: 8,
  },
  signatureContainer: {
    marginTop: 15,
    position: 'relative',
    height: 40,
    alignSelf: 'flex-end',
    transform: 'translateX(-100%)'
  },
  signatureImage: {
    position: 'absolute',
    width: 100,
    height: 'auto',
  },
  signatureText: {
    position: 'absolute',
    bottom: 0,
    fontSize: 11,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 10,
    color: '#666666',
    paddingTop: 15,
    marginTop: 15,
    marginBottom: 5,
  },
  bulletPoint: {
    width: 8,
    fontSize: 11,
    marginBottom: 4,

  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  bulletText: {
    flex: 1,
    fontSize: 11,
  },
});

const MotivationLetterPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>Nicolas LAVAL</Text>
        <Text style={styles.contact}>5 Bd Camille Flammarion, 13001 MARSEILLE</Text>
        <Text style={styles.contact}>laval.nicolas13@gmail.com - 06 16 94 00 53</Text>
      </View>

      <Text style={styles.date}>Le {new Date().toLocaleDateString('fr-FR')},</Text>

      <Text style={styles.subject}>Objet : Candidature pour le poste en alternance - INGÉNIEUR MÉTHODES DE MAINTENANCE</Text>

      <View style={styles.recipient}>
        <Text style={styles.recipientText}>Madame, Monsieur,</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Votre recherche d'un alternant alliant expertise technique et vision territoriale a immédiatement retenu mon attention. C'est avec un vif intérêt que je vous soumets ma candidature pour le poste en alternance au sein de la Direction du Matériel Roulant du groupe RTM.
        </Text>

        <Text style={styles.paragraph}>
          Aménageur de formation, je comprends pleinement l'importance de la thématique transports pour le territoire métropolitain et l'importance cruciale de la mission de service public que vous assurez au quotidien. Le poste que vous proposez en alternance me permet, du fait de mon âge, de bénéficier d'une formation diplômante tout en apportant mes connaissances et mon savoir-faire en termes d'organisation et de gestion de la maintenance, mais aussi mon expérience du fonctionnement des institutions territoriales.
        </Text>

        <Text style={styles.paragraph}>
          Mes compétences en traitement de la donnée et en méthodes de maintenance seront des atouts précieux pour mener à bien les missions variées que vous proposez, notamment :
        </Text>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletPoint}>• </Text>
          <Text style={styles.bulletText}>L'établissement et l'optimisation des plans de maintenance préventive</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletPoint}>• </Text>
          <Text style={styles.bulletText}>La mise en place d'un projet de maintenance prédictive</Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bulletPoint}>• </Text>
          <Text style={styles.bulletText}>L'analyse de données et la création d'indicateurs pertinents</Text>
        </View>

        <Text style={styles.paragraph}>
          Ma capacité à travailler en équipe et mes aptitudes relationnelles me permettront de m'intégrer rapidement au sein de votre service support Assistance Technique et de collaborer efficacement avec les différents intervenants. Mes compétences rédactionnelles et ma maîtrise de l'anglais technique seront également des atouts pour la rédaction de rapports et la communication avec les constructeurs et fournisseurs.
        </Text>

        <Text style={styles.paragraph}>
          Je suis particulièrement motivé à l'idée de contribuer au développement des transports de la Ville en participant à la maintenance des nouveaux matériels roulants et en m'adaptant aux nouvelles méthodes de maintenance. Mon expérience en aménagement du territoire m'offre une perspective unique sur les enjeux de mobilité urbaine, que je serais ravi de mettre au service de votre équipe.
        </Text>

        <Text style={styles.paragraph}>
          Je serais enchanté de pouvoir échanger avec vous sur la façon dont mon profil peut apporter une valeur ajoutée à votre Direction. Je vous remercie de l'attention que vous porterez à ma candidature et reste à votre disposition pour un entretien.
        </Text>

        <Text style={styles.paragraph}>
          Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.
        </Text>
      </View>

      <View style={styles.signatureContainer}>
        <Image style={styles.signatureImage} src={signatureImage} />
        <Text style={styles.signatureText}>Nicolas LAVAL</Text>
      </View>
    </Page>
  </Document>
);

export default MotivationLetterPDF;