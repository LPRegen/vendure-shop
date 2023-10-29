import { useQuery } from '@apollo/client';
import { styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { GET_PRODUCT_LIST } from '../../graphql/queries';
import { ItemsData } from '../../types';
import { Card } from '../Card/Card';

export const ProductList = () => {
  const { loading, error, data } = useQuery<ItemsData>(GET_PRODUCT_LIST, {});

  const Container = styled(Grid)(({ theme }) => ({
    backgroundColor: '#0D1537',
    [theme.breakpoints.down('md')]: {
      padding: '2rem 1rem',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem 2rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '3rem 4.5rem',
    },
  }));

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  if (!data) {
    return <div>There is no data available</div>;
  }

  return (
    <Container container spacing={2}>
      {data?.products.items.map(
        ({ id, featuredAsset, name, description, variants }) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={id}>
            <Card
              id={id}
              variants={variants}
              name={name}
              description={description}
              featuredAsset={featuredAsset}
            />
          </Grid>
        )
      )}
    </Container>
  );
};
