import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { services } from '../../../utils/constants';
import {
  StyledServicesContainer,
  StyledServicesHeading,
  StyledServicesList,
  StyledServicesItem
} from './styles';

const Services = () => {
  return (
    <StyledServicesContainer id="services">
      <StyledServicesHeading>
        <Typography variant="h2">Services</Typography>
        <Divider className="divider" />
        <Typography variant="body1">What we offer</Typography>
      </StyledServicesHeading>
      <StyledServicesList container spacing={0}>
        {services.map((service) => (
          <Grid item xs={12} md={6} key={service.id}>
            <StyledServicesItem>
              {service.image}
              <Typography variant="h4" className="title">
                {service.title}
              </Typography>
              <Typography variant="body1" className="text">
                {service.text}
              </Typography>
            </StyledServicesItem>
          </Grid>
        ))}
      </StyledServicesList>
    </StyledServicesContainer>
  );
};

export default Services;
