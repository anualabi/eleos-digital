import Typography from '@mui/material/Typography';
import AboutIcon from '../../svgs/AboutIcon';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { scoreCard } from '../../../utils/constants';
import {
  StyledAboutContainer,
  StyledAboutImage,
  StyledAboutText,
  StyledCardList,
  StyledCardItem
} from './styles';

const AboutUs = () => {
  return (
    <section id="about-us">
      <StyledAboutContainer>
        <StyledAboutImage>
          <AboutIcon />
        </StyledAboutImage>
        <StyledAboutText>
          <Typography variant="h2" className="title">
            About Us
          </Typography>
          <Divider className="divider" />
          <Typography variant="body1" className="subtitle">
            Specialists in the field
          </Typography>
          <Typography variant="body1" className="description">
            We are a creative and talented digital media agency, specializing in targeted marketing
            that produces qualified leads.
          </Typography>
        </StyledAboutText>
      </StyledAboutContainer>
      <StyledCardList>
        <Container>
          <Grid container spacing={4}>
            {scoreCard.map((card) => (
              <Grid item xs={12} md={3} key={card.id}>
                <StyledCardItem>
                  <Typography variant="h3">{card.title}</Typography>
                  <Typography variant="body1">{card.description}</Typography>
                </StyledCardItem>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledCardList>
    </section>
  );
};

export default AboutUs;
