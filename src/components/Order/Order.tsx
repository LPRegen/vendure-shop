import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import { GET_ACTIVE_ORDER } from '../../graphql/queries';
import { ActiveOrder } from '../../types';
import { formatPrice } from '../../utils/formatPrice';

const Container = styled.div`
  display: grid;
  gap: 0.4rem;
  margin-right: 0.4rem;
  color: white;
  @media screen and (min-width: 600px) {
    margin-right: 1.4rem;
  }
`;

export const Order = () => {
  const { loading, error, data } = useQuery<ActiveOrder>(GET_ACTIVE_ORDER);

  if (loading) {
    return (
      <Container data-testid="order">
        <span>Loading info</span>
      </Container>
    );
  }

  if (error) {
    return (
      <Container data-testid="order">
        <Typography variant="h5">Error loading order</Typography>
      </Container>
    );
  }

  if (!data?.activeOrder) {
    return (
      <Container data-testid="order">
        <Typography variant="h5">No active order available</Typography>
      </Container>
    );
  }

  return (
    <Container data-testid="order">
      <>
        <Typography variant="h5" component="h1">
          Total:
        </Typography>
        <Typography variant="subtitle1">
          {formatPrice(data.activeOrder.total)}
        </Typography>
      </>
    </Container>
  );
};
