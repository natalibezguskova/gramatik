// Данные по секциям. Все тексты нужно менять здесь
// The section data. All of it must changed here below

import FirstPoster from "../../images/poster_1.jpg";
import SecondPoster from "../../images/poster_2.jpg";
import ThirdPoster from "../../images/poster_3.jpg";
// Icons for SERVICES section columns
// Иконки для колонок секции SERVICES
import EyeIcon from "../../images/eye_icon.png";
import PenIcon from "../../images/icon_pen.png";
import QuotesIcon from "../../images/icon_quotes.png";
import {links} from "./links";

// Название секций и порядок отображения для окна меню
// Sections names and display order for menu window
export const sections = {
  HOME: "HOME",
  ABOUT: "ABOUT",
  PROJECTS: "PROJECTS",
  SERVICES: "SERVICES",
  THE_TEAM: "THE TEAM",
  CLIENTS: "CLIENTS",
  CONTACT: "CONTACT",
}

export const leftFabButtonText = 'CPA'

export const sectionsData = {
  [sections.HOME]: {
    id: sections.HOME,
    title: 'Gramatik',
    text: 'CPA NETWORK \n ONLY WHITE HIGH YIELD OFFERS FROM \n FIRST CLASS REGULATED FOREX BROKERS',
  },
  [sections.ABOUT]: {
    id: sections.ABOUT,
    title: 'YOU WILL SEE THE RESULT \n ONLY IF YOU KNOW THE PRODUCT \n YOUR HIGH CONVERSION - IN OUR HANDS',
    description: 'Crypto/Forex products and Contracts for Differences (CFDs) are highly speculative and carry significant risk of loss. Choosing higher leverage for these products can result in large losses. Crypto/Forex and CFD products are not suitable for all clients. Before using an offer, advertising funnel, creative, evaluate its compliance with the requirements of FINANCIAL REGULATORS. Seek advice if necessary. Please make sure you fully understand the risks involved.',
    column_1: {
      header: '95%',
      text: 'Ad campaign approval \n rate'
    },
    column_2: {
      header: '120+',
      text: 'Available GEOs'
    },
    column_3: {
      header: '50+',
      subheader: 'REGULATED',
      text: 'Forex/Crypto Brokers'
    },
  },
  [sections.PROJECTS]: {
    id: sections.PROJECTS,
    title_1: 'WHITE FOREX/CRYPTO PRODUCTS',
    title_2: 'THIS IS ALWAYS A HIGHER CONVERSION RATE',
    column_1: {
      header: 'CALL CENTER / \n SUPPORT / KYC',
      text: "Communicate with your leads in a gentle and professional manner.",
      img: FirstPoster,
    },
    column_2: {
      header: 'BRANDS DO NOT DISAPPEAR',
      text: "Customer's funds remain \n Customer's funds",
      img: SecondPoster,
    },
    column_3: {
      header: 'NO FAILURES OF \n PAYMENT SYSTEMS',
      img: ThirdPoster,
    },
  },
  [sections.SERVICES]: {
    id: sections.SERVICES,
    title: 'REMEMBER: \n THERE IS MORE TRAFFIC AT THE MARKET \n THAN THOSE WHO CAN ACCEPT IT!',
    subtitle: 'Generate only what turns into FTD',
    column_1: {
      header: 'TARGETING',
      text: 'Get precise targeting for each GEO for each Broker  from us',
      img: EyeIcon,
    },
    column_2: {
      header: 'HIGH \n POTENTIAL \n FUNNEL',
      text: 'Funnels with proven conversion only -direct assignment from the call centers',
      img: PenIcon,
    },
    column_3: {
      header: 'FINE TUNING',
      text: 'Proper call center feedback will help you set up an advertising campaign down to microns',
      img: QuotesIcon,
    },
  },
  [sections.THE_TEAM]: {
    id: sections.THE_TEAM,
    title: 'IMPORTANT:',
    paragraph1: 'Lead generation is a modern and extremely high-income field. Potentially a high profitability might often be achieved by using anti-moral advertising funnels. We DO NOT ACCEPT traffic, leads generated by fraudulent funnels that have nothing to do with financial products.',
    paragraph2: 'Any used prelander and landing page must fully comply with the requirements imposed by the Financial Commissions, regional Advertising Laws and not be in dissonance with the general human principles of morality.',
    paragraph3: 'Remember, only by understanding the advertised product and working with high-end regulated financial products can you achieve truly amazing financial results.',
 },
  [sections.CLIENTS]: {
    id: sections.CLIENTS,
    title: 'CONTACT US',
    button: 'Submit',
  },
  [sections.CONTACT]: {
    id: sections.CONTACT,
    column_1: {
      header: 'WE WORK FOR YOU',
      text: '24/7',
    },
    column_2: {
      header: 'GET IN TOUCH',
      telegramBefore: `Telegram: `,
      telegramLink: `${links.telegram}`,
      telegramTextLink: 'Join our group',
      email: `${links.email}`,
    },
    header: 'Top-notch marketing solutions \n for top-notched digital marketing professionals',
    text: 'www.gramatikcpa.dao is a trading name of Gramatik Ltd. with registration number 516772829 and address Arik Einstein 3, Herzliya 4659071 Israel',
    privacyPolicy: 'Privacy Policy',
    termsAndConditions: 'Terms and Conditions',
  },
}
