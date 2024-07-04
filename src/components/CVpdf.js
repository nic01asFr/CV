import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import experienceData from './experienceData.json';

import profileImage from '../ressources/ProfileImage.jpg';

import qrCodeImage from '../ressources/QrCode.png';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica',
  },
  leftColumn: {
    width: '30%',
    backgroundColor: '#a6c4ec',
    padding: 20,
    color: '#FFFFFF',
  },
  rightColumn: {
    width: '70%',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    alignSelf: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'medium',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#a6c4ec',
  },
  leftSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  experienceItem: {
    marginBottom: 15,
  },
  companyName: {
    fontSize: 14,
    fontWeight: 'medium',
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  jobDate: {
    fontSize: 10,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  jobDescription: {
    fontSize: 10,
    marginBottom: 5,
  },
  skillItem: {
    fontSize: 12,
    marginBottom: 5,
  },
  contactItem: {
    fontSize: 10,
    marginBottom: 5,
  },
  qrCode: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
});

const CVPdf = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.leftColumn}>
        <Image
          style={styles.profileImage}
          src={profileImage}
        />
        <Text style={styles.name}>Nicolas LAVAL</Text>
        <Text style={styles.title}>Apprenti développeur Web</Text>
        
        <View style={{marginBottom: 20}}>
          <Text style={styles.leftSectionTitle}>Contact</Text>
          <Text style={styles.contactItem}>06 16 94 00 53</Text>
          <Text style={styles.contactItem}>laval.nicolas13@gmail.com</Text>
          <Text style={styles.contactItem}>5 Bd Camille Flammarion</Text>
          <Text style={styles.contactItem}>13001 MARSEILLE</Text>
        </View>
        
        <View>
          <Text style={styles.leftSectionTitle}>Compétences</Text>
          {['HTML', 'CSS', 'JavaScript', 'Python', 'Git', 'Permis B & A2'].map((skill, index) => (
            <Text key={index} style={styles.skillItem}>• {skill}</Text>
          ))}
        </View>
        
        <Image 
          style={styles.qrCode}
          src={qrCodeImage}
        />
      </View>
      
      <View style={styles.rightColumn}>
        <View style={{marginBottom: 20}}>
          <Text style={styles.sectionTitle}>Profil</Text>
          <Text style={styles.jobDescription}>
            Apprenti développeur, spécialisé dans l'utilisation du bon outil'. 
            Fort d'une expérience variée, je suis à la recherche de nouveaux défis pour développer et mettre en pratique mes compétences.
          </Text>
        </View>
        
        <View>
          <Text style={styles.sectionTitle}>Expérience Professionnelle</Text>
          {experienceData.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.companyName}>{exp.society}</Text>
              {exp.children.map((child, childIndex) => (
                <View key={childIndex}>
                  <Text style={styles.jobTitle}>{child.poste}</Text>
                  <Text style={styles.jobDate}>{`${child.start || ''} - ${child.end || 'Présent'}`}</Text>
                  <Text style={styles.jobDescription}>{child.description}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);


export default CVPdf;