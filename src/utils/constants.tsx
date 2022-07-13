import DesignDevIcon from '../app/svgs/DesignDevIcon';
import DigitalMarketingIcon from '../app/svgs/DigitalMarketingIcon';
import MediaBuyingIcon from '../app/svgs/MediaBuyingIcon';
import ProgrammaticIcon from '../app/svgs/ProgrammaticIcon';

export const menu = [
  { id: 1, link: '/#about-us', text: 'About us' },
  { id: 2, link: '/#services', text: 'Services' },
  { id: 3, link: '/#contact-us', text: 'Contact us' }
];

export const scoreCard = [
  { id: 1, title: 25, description: 'Happy Clients' },
  { id: 2, title: 88, description: 'Coffee With Clients' },
  { id: 3, title: 122, description: 'Projects Completed' },
  { id: 4, title: 7500, description: 'Lines Of Code Daily' }
];

export const services = [
  {
    id: 1,
    image: <DesignDevIcon />,
    title: 'Design & Development',
    text: 'We create stunning user interfaces and experiences using the latest cutting-edge technologies and bring your ideas to life.'
  },
  {
    id: 2,
    image: <DigitalMarketingIcon />,
    title: 'Digital Marketing',
    text: 'We create compelling, customer focused content and run successful campaigns. We also cover PPC, SEM, SEO and so much more.'
  },
  {
    id: 3,
    image: <MediaBuyingIcon />,
    title: 'Media Buying',
    text: 'We take a holistic approach with paid media to execute campaigns to strategically deliver customer acquisition with effective budgeting.'
  },
  {
    id: 4,
    image: <ProgrammaticIcon />,
    title: 'Programmatic Advertising',
    text: 'In the simplest terms, we use an automated software driven way to buy digital space for your advert to be displayed.'
  }
];
