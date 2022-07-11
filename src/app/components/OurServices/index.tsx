import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import DesignDevIcon from '../../svgs/DesignDevIcon';
import DigitalMarketingIcon from '../../svgs/DigitalMarketingIcon';
import MediaBuyingIcon from '../../svgs/MediaBuyingIcon';
import ProgrammaticIcon from '../../svgs/ProgrammaticIcon';
import {
  StyledServicesContainer,
  StyledServicesHeading,
  StyledServicesGrid,
  StyledServicesCard
} from './styles';

const services = [
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

const Services = () => {
  return (
    <StyledServicesContainer id="services">
      <StyledServicesHeading>
        <Typography component="h2">Services</Typography>
        <Divider />
        <Typography component="p">What we offer</Typography>
      </StyledServicesHeading>
      <StyledServicesGrid container spacing={0}>
        {services.map((service) => (
          <Grid item xs={12} md={6} key={service.id}>
            <StyledServicesCard>
              {service.image}
              <Typography component="h3">{service.title}</Typography>
              <Typography component="p">{service.text}</Typography>
            </StyledServicesCard>
          </Grid>
        ))}
      </StyledServicesGrid>
    </StyledServicesContainer>
  );
};

export default Services;
