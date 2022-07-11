import Container from '@mui/material/Container';
import { styled } from '@mui/system';

export const StyledFooterContainer = styled(Container, {})`
  color: white;
  display: flex;
  padding: 1.75rem 0;

  @media (max-width: 699px) {
    flex-wrap: wrap;
  }

  .copyright,
  .all-rights {
    font-size: 0.9rem;
    font-weight: 300;
    margin: 0.25rem 0;

    @media (max-width: 699px) {
      font-size: 0.8rem;
      text-align: center;
      width: 100%;
    }
  }

  .copyright {
    margin-right: 0.5rem;
  }
`;
