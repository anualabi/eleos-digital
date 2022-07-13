import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { services } from '../../../utils/constants';
import {
  StyledServicesContainer,
  StyledServicesHeading,
  StyledServicesGrid,
  StyledServicesCard
} from './styles';

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
