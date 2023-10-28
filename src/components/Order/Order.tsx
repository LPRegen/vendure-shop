import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import { GET_ACTIVE_ORDER } from '../../graphql/queries';

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

export const Order = () => {
  const { loading, error, data } = useQuery(GET_ACTIVE_ORDER);

  return (
    <Container data-testid="order">
      {loading ? (
        <span>Loading info</span>
      ) : (
        <>
          <Typography variant="h5" component="h1">
            Total:
          </Typography>
          <Typography variant="subtitle1">
            $ {data.activeOrder.total}
          </Typography>
        </>
      )}
    </Container>
  );
};
