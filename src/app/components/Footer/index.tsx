import Typography from '@mui/material/Typography';
import { StyledFooterContainer } from './styles';

const Footer = () => {
  return (
    <StyledFooterContainer>
      <Typography className="copyright">
        Copyright © {new Date().getFullYear()} Eleos Digital.
      </Typography>
      <Typography className="all-rights">All rights reserved.</Typography>
    </StyledFooterContainer>
  );
};

export default Footer;
