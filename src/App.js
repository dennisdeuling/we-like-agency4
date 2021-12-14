import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './ThemeOptions';
import { Route, Switch } from 'react-router-dom';
import Navbar from './sections/Navbar/Navbar';
import HeroSection from './sections/HeroSection/HeroSection';
import WeLikeAgency from './sections/WeLikeAgencySection/WeLikeAgencySection';
import SolutionSection from './sections/SolutionSection/SolutionSection';
import CompanyLogoSection from './sections/CompanyLogoSection/CompanyLogoSection';
import OfferSection from './sections/OfferSection/OfferSection';
import TestimonialSection from './sections/TestimonialSection/TestimonialSection';
import PortfolioSection from './sections/PortfolioSection/PortfolioSection';
import ContactSection from './sections/ContactSection/ContactSection';
import Footer from './sections/Footer/Footer';
import Impressum from './sections/Impressum/Impressum';

import { content } from './content';

function App() {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<Switch>
					<Route exact path="/">
						<Navbar />
						<HeroSection content={content.heroSection} />
						<WeLikeAgency content={content.welikeagencySection} />
						<SolutionSection content={content.solutionSection} />
						<CompanyLogoSection content={content.welikeagencySection} />
						<OfferSection content={content.offerSection} />
						<TestimonialSection content={content.testimonials} />
						<PortfolioSection content={content.portfolio} />
						<ContactSection />
						<Footer />
					</Route>
					<Route path="/impressum">
						<Impressum />
					</Route>
				</Switch>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
