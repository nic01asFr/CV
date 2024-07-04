import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import signatureImage from '../ressources/signature.png';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 50,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contact: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 2,
  },
  recipient: {
    marginTop: 30,
    marginBottom: 20,
  },
  recipientText: {
    fontSize: 11,
  },
  subject: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 20,

  },
  content: {
    fontSize: 11,
    lineHeight: 1.5,
  },
  paragraph: {
    marginBottom: 10,
  },
  signatureContainer: {
    marginTop: 30,
    position: 'relative',
    height: 60,
    alignSelf: 'flex-end',
    transform: 'translateX(-150%)'

  },
  signatureImage: {
    position: 'absolute',
    width: 150,
    height: 'auto',
  },
  signatureText: {
    position: 'absolute',
    bottom: 0,
    fontSize: 11,
    fontWeight: 'bold',
    
  },
  date: {
    fontSize: 11,
    marginTop: 30,
    marginBottom: 20,
  },
});

const MotivationLetterPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>Nicolas LAVAL</Text>
        <Text style={styles.contact}>5 Bd Camilla FLammarion</Text>
        <Text style={styles.contact}>13001 MARSEILLE</Text>
        <Text style={styles.contact}>laval.nicolas13@gmail.com</Text>
        <Text style={styles.contact}>06 16 94 00 53</Text>

      </View>

      <Text style={styles.date}>Le {new Date().toLocaleDateString('fr-FR')}</Text>

      <Text style={styles.subject}>Objet : Candidature pour une alternance en développement informatique</Text>

      <View style={styles.recipient}>
        <Text style={styles.recipientText}>Madame, Monsieur,</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.paragraph}>
          À 30 ans, je me présente à vous avec un parcours atypique, fait d'expériences variées qui tiennent à un fil conducteur : la résolution de problèmes techniques par la recherche de l'outil adapté.
        </Text>

        <Text style={styles.paragraph}>
          Tout au long de mon cheminement professionnel, j'ai constamment fait appel aux outils informatiques pour relever les défis qui m'étaient présentés. Cette approche m'a non seulement permis de résoudre efficacement diverses problématiques, mais a aussi révélé ma passion pour l'utilisation créative et pragmatique des technologies à disposition.
        </Text>

        <Text style={styles.paragraph}>
          Aujourd'hui, je souhaite franchir une nouvelle étape en me professionnalisant dans ce domaine. Mon objectif est d'acquérir les compétences nécessaires pour apporter des solutions robustes et innovantes aux enjeux techniques rencontrés par les entreprises.
        </Text>

        <Text style={styles.paragraph}>
          Ma capacité d'adaptation, ma curiosité naturelle et ma détermination à résoudre des problèmes complexes sont des atouts que je souhaite mettre au service de votre entreprise. Je suis prêt à m'investir pleinement dans cette nouvelle orientation professionnelle, avec l'enthousiasme et la maturité que mon parcours m'a apportés.
        </Text>

        <Text style={styles.paragraph}>
          Je serais ravi de pouvoir échanger avec vous sur l'opportunité de mettre ma motivation et mon potentiel au profit de vos projets.
        </Text>

        <Text style={styles.paragraph}>
          Je vous remercie de l'attention que vous porterez à ma candidature et reste à votre disposition pour un entretien.
        </Text>

        <Text style={styles.paragraph}>
          Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.
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