import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './ThemeOptions';
import Navbar from './sections/Navbar/Navbar';
import HeroSection from './sections/HeroSection/HeroSection';
import WeLikeAgency from './sections/WeLikeAgencySection/WeLikeAgencySection';
import SolutionSection from './sections/SolutionSection/SolutionSection';
import CompanyLogoSection from './sections/CompanyLogoSection/CompanyLogoSection';
import OfferSection from './sections/OfferSection/OfferSection';
import TestimonialSection from './sections/TestimonialSection/TestimonialSection';
import PortfolioSection from './sections/PortfolioSection/PortfolioSection';
import ContactSection from './sections/ContactSection/ContactSection';

function App() {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<Navbar />
				<HeroSection />
				<WeLikeAgency />
				<SolutionSection />
				<CompanyLogoSection />
				<OfferSection />
				<TestimonialSection />
				<PortfolioSection />
				<ContactSection />
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
