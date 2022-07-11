import Typography from '@mui/material/Typography';
import AboutIcon from '../../svgs/AboutIcon';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {
  StyledAboutContainer,
  StyledAboutIcon,
  StyledAboutText,
  StyledAboutCard,
  StyledScoreCard
} from './styles';

export const scoreCard = [
  { id: 1, title: 25, description: 'Happy Clients' },
  { id: 2, title: 88, description: 'Coffee With Clients' },
  { id: 3, title: 122, description: 'Projects Completed' },
  { id: 4, title: 7500, description: 'Lines Of Code Daily' }
];

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
