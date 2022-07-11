import background from '../assets/background.svg';

export const globalStyles = () => ({
  body: {
    background: `url(${background}) no-repeat`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    width: '100vw'
  },
  a: {
    color: 'black',
    textDecoration: 'none'
  }
});
