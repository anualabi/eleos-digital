import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

export const StyledNavDrawer = styled(Box, {})``;

export const StyledMenuIcon = styled(Button, {})`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    width: 40px;

    @media (max-width: 399px) {
      width: 35px;
    }
  }
`;
