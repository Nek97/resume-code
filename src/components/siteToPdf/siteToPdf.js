import React from 'react'
import { Page, Document, StyleSheet, render } from '@react-pdf/renderer'
import Header from '../header/header'
import About from '../about/about'
import Resume from '../resume/resume'
import Portfolio from '../portfolio/portfolio'
import Testimonials from '../testimonials/testimonials'
import Footer from '../footer/footer'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

// Create Document Component
const PdfVersion = (): JSX.Element => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Footer />
    </Page>
  </Document>
)

function createPdf(): void {
  render(<PdfVersion />, './Aniello_Tortora-CsV.pdf')
}

export default createPdf