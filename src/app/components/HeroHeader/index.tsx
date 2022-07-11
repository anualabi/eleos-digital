import Typography from '@mui/material/Typography';
import HeroIcon from '../../svgs/HeroIcon';
import { HashLink } from 'react-router-hash-link';
import { StyledHeroContainer, StyledHeroText, StyledHeroIcon } from './styles';

const HeroHeader = () => {
  return (
    <StyledHeroContainer>
      <StyledHeroText>
        <Typography component="h1">We can make your business visible</Typography>
        <Typography component="p">
          We use cutting edge technologies, combined with data-driven analytics to give your
          business the highest possible reach.
        </Typography>
        <HashLink smooth to="/#services">
          Read more
        </HashLink>
      </StyledHeroText>
      <StyledHeroIcon>
        <HeroIcon />
      </StyledHeroIcon>
    </StyledHeroContainer>
  );
};

export default HeroHeader;
