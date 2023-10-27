import styled from 'styled-components';
import { OrderProps } from '../../types';
import { Typography } from '@mui/material';

const Container = styled.div`
  display: grid;
  gap: 0.4rem;
  margin-right: 0.4rem;
  color: white;
  @media screen and (min-width: 600px) {
    margin-right: 1.4rem;
  }
`;

// TODO: Improve how info is displayed

export const Order = ({ customer, total }: OrderProps) => {
  return (
    <Container data-testid="order">
      <Typography variant="h4" component="h1">
        {customer}
      </Typography>
      <Typography variant="subtitle1">$ {total}</Typography>
    </Container>
  );
};
