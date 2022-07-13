import Typography from '@mui/material/Typography';
import AboutIcon from '../../svgs/AboutIcon';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { scoreCard } from '../../../utils/constants';
import {
  StyledAboutContainer,
  StyledAboutIcon,
  StyledAboutText,
  StyledAboutCard,
  StyledScoreCard
} from './styles';

const AboutUs = () => {
  return (
    <section id="about-us">
      <StyledAboutContainer>
        <StyledAboutIcon>
          <AboutIcon />
        </StyledAboutIcon>
        <StyledAboutText>
          <Typography component="h2">About Us</Typography>
          <Divider />
          <Typography component="p">Specialists in the field </Typography>
          <Typography component="p">
            We are a creative and talented digital media agency, specializing in targeted marketing
            that produces qualified leads.
          </Typography>
        </StyledAboutText>
      </StyledAboutContainer>
      <StyledAboutCard>
        <Container>
          <Grid container spacing={4}>
            {scoreCard.map((card) => (
              <Grid item xs={12} md={3} key={card.id}>
                <StyledScoreCard>
                  <Typography component="h3">{card.title}</Typography>
                  <Typography component="p">{card.description}</Typography>
                </StyledScoreCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledAboutCard>
    </section>
  );
};

export default AboutUs;
