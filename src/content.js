import weLikeAgencyImage from './assets/images/tamara-fritsch.jpeg';
import heroImage from './assets/images/hero-image.jpg';
import contentMarketing from './assets/images/content-marketing.jpg';
import coaching from './assets/images/coaching.jpg';
import kampagnen from './assets/images/kampagnen.jpg';
import socialMedia from './assets/images/social-media.jpg';

import {
	faBusinessTime,
	faEye,
	faChartLine,
	faCoins,
	faUsers,
	faMousePointer
} from '@fortawesome/free-solid-svg-icons';

export const content = {
	heroSection: {
		title: 'Lorem ipsum dolor sit amet.',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et.',
		image: heroImage
	},
	welikeagencySection: {
		title: 'WeLike Agency',
		text: 'Tamara Fritsch ist Bloggerin, Content Creator für Social Media, Gründerin und CEO der WeLike Agency<br /><br />Seit 2021 Gründerin eines Start ups<br /><br /> <strong>3+ Jahre Content Creator</strong> für Brands, Unternehmen und Personalities <br /><br /> <strong>4+ Jahre</strong> als <strong>Freelancerin in den Bereichen PR, Event- und Social Media Management</strong> <br /><br /> <strong>11+ Jahre</strong> Erfahrung in den <strong>Bereichen Fashion, Management und Leadership</strong><br /><br />',
		image: weLikeAgencyImage
	},
	solutionSection: {
		title: 'Die Lösung die ich Ihnen biete:',
		icons: [
			{
				icon: faCoins,
				text: 'Mehr Umsatz durch eine klare Strategie'
			},
			{
				icon: faEye,
				text: 'Mehr Sichtbarkeit durch visuelles Branding'
			},
			{
				icon: faChartLine,
				text: 'Mehr Traffic durch relevante Inhalte'
			},
			{
				icon: faMousePointer,
				text: 'Mehr Interaktion durch kreative Formate'
			},
			{
				icon: faUsers,
				text: 'Mehr Neukunden durch gezielte und kreative Werbung'
			},
			{
				icon: faBusinessTime,
				text: 'Sie erhalten mehr Zeit für Ihr Business'
			}
		]
	},
	offerSection: {
		title: 'Meine Leistungen im Detail:',
		offers: [
			{
				image: contentMarketing,
				title: 'Content',
				text: 'Wir legen großen Wert, alle Social Media Aktivitäten mit deinen Unternehmenszielen zu verbinden. Der Aufbau von loyalen und tragenden Kundenbeziehungen im Social Media steht hier im Mittelpunkt:<br /><ul><li>Statusanalyse & Benchmarking</li><li>Content Strategie/Formate</li><li>Zielgruppenanalyse</li></ul>'
			},
			{
				image: socialMedia,
				title: 'Social Media',
				text: 'Nach gemeinsamer Strategie-Besprechung, abgestimmt auf die Zielgruppe und das Unternehmensziel, erstellen wir einen individuellen Redaktionsplan. Obwohl wir uns auf Instagram spezialisiert haben, betreuen wir auch andere Social Media Accounts wie Facebook, LinkedIn oder Tiktok. Wir entwickeln Beiträge und übernehmen das Veröffentlichen mit den richtigen Social-Media-Planungstools.<br /><br />Wir kümmern uns nach individueller Absprache und Recherche um die schriftliche Kommunikation deiner Marke. Wir verfassen Blogbeiträge oder gestalten ansprechende Feedbeiträge.'
			},
			{
				image: kampagnen,
				title: 'Kampagnen',
				text: 'Da jedes Unternehmen einzigartig ist, zählt für uns die <strong>Entwicklung einer individuellen Lösung,</strong> strong> egal ob mit Werbekampagnen, Storytelling oder durch Bilder. <br /><br />Mit unseren Kampagnen und Inhalten verfolgen wir die Mission, positiv mit anderen Menschen über Brands zu sprechen. Unser Motto lautet dabei: “Make a change.”<br /><br /><ul><li>Planung</li><li>Erstellung und Veröffentlichung von Beiträgen</li><li>Reporting</li><li>Facebook-Anzeigen</li></ul>'
			},
			{
				image: coaching,
				title: 'Coaching',
				text: 'Social Media verändert sich täglich und bietet seinen Nutzern immer wieder neue Funktionen. Damit Sie neben Ihrer Haupttätigkeit immer auf dem neuesten Stand sind, bieten wir Social Media Coaching und Workshops an. In regelmäßigen Zeitabständen treffen wir uns und schauen uns Ihre Arbeit in den sozialen Medien gemeinsam an.<br /><br /><ul><li>Review der vergangenen Beiträge</li><li>Überprüfung der Statistiken</li><li>Schulung von neuen Funktionen</li></ul>'
			}
		]
	},
	testimonials: {
		title: '',
		testimonials: [
			{
				image: '',
				text: 'Wir von Buschek Payroll Team, waren lange auf der Suche nach einer Lösung im Bereich<strong> Content Marketing</strong>. Hier wurden wir auf die junge hippe Berlinerin Tamara Fritsch aufmerksam, die eine Social Media Agentur betreibt. Sie zeichnet sich aufgrund Ihres Eifers und <strong>professionelle Erfahrung</strong> in der digitalen Welt, als <strong>Gewinn</strong> und <strong>positiven Mehrwert.</strong> Durch Ihre hervorragende Arbeit, hat sich das Unternehmen Buschek Payroll zu einem professionellen <strong>positioniert.</strong> Wir danken Ihr für diese Zusammenarbeit und können Tamara wärmstens<strong> empfehlen.</strong></p>',
				name: 'Björn Buschek',
				position: 'Lohn & Projektbüro'
			},
			{
				image: '',
				text: '<p>Durch die Zusammenarbeit hat sich die Eventreihe Sober Sensation international positioniert. Wir danken Tamara für die gemeinsame Zeit.</p>',
				name: 'Gideon Bellin',
				position: 'CEO, Sober Sensation'
			},
			{
				image: '',
				text: '<p>Tamara ist nicht nur ein sehr <strong>talentierter &amp; erfolgsorientierter Content Creator,</strong> sondern auch ein unglaublich <strong>positiver Mensch</strong>. Ihre <strong>Kreativität</strong> und die Ausarbeitung der <strong>Live Cooking Sessions</strong> haben uns sehr viel Spaß gemacht und das gesamte Event Team von GAIETY Private Events ist Tamara unendlich dankbar für das Ergebnis. Wir empfehlen Tamara sehr gerne weiter.</p>',
				name: 'Luiz Luz',
				position: 'Event & Live Cooking Agency'
			}
		]
	},
	portfolio: [
		{
			image: '',
			title: 'Leistung 1',
			text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
		},
		{
			image: '',
			title: 'Leistung 2',
			text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
		},
		{
			image: '',
			title: 'Leistung 3',
			text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
		}
	]
};