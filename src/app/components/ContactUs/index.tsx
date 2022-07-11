import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import EmailIcon from '../../svgs/EmailIcon';
import FacebookIcon from '../../svgs/FacebookIcon';
import TwitterIcon from '../../svgs/TwitterIcon';
import InstagramIcon from '../../svgs/InstagramIcon';
import { StyledContactContainer } from './styles';

const ContactUs = () => {
  return (
    <StyledContactContainer id="contact-us">
      <Container>
        <Typography component="h2">Contact Us</Typography>
        <Divider />
        <Typography component="p">Let's help build your next project</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box></Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography component="p">Follow our socials</Typography>
              <Link href="#/" aria-label="Facebook">
                <FacebookIcon />
              </Link>
              <Link href="#/" aria-label="Twitter">
                <TwitterIcon />
              </Link>
              <Link href="#/" aria-label="Instagram">
                <InstagramIcon />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography component="p">Monday - Friday : 8am - 6pm (WAT)</Typography>
            <Link href="mailto:hello@eleosdigital.com">
              <Box className="email-wrapper">
                <EmailIcon />
                Email Us.
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </StyledContactContainer>
  );
};

export default ContactUs;
