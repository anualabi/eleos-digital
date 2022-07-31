import Typography from '@mui/material/Typography';
import HeroImage from '../../svgs/HeroImage';
import { HashLink } from 'react-router-hash-link';
import { StyledHeroContainer, StyledHeroText, StyledHeroImage } from './styles';

const HeroHeader = () => {
  return (
    <StyledHeroContainer maxWidth="xl">
      <StyledHeroText>
        <Typography variant="h1" className="heading">
          We can make your business visible
        </Typography>
        <Typography variant="body1" className="subheading">
          We use cutting edge technologies, combined with data-driven analytics to give your
          business the highest possible reach.
        </Typography>
        <HashLink smooth to="/#services" className="cta-btn">
          Read more
        </HashLink>
      </StyledHeroText>
      <StyledHeroImage>
        <HeroImage />
      </StyledHeroImage>
    </StyledHeroContainer>
  );
};

export default HeroHeader;
