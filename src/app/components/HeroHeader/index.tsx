import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HeroIcon from '../../svgs/HeroIcon';
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
        <Button variant="contained">Read more</Button>
      </StyledHeroText>
      <StyledHeroIcon>
        <HeroIcon />
      </StyledHeroIcon>
    </StyledHeroContainer>
  );
};

export default HeroHeader;
