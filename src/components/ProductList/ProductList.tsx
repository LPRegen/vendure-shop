import { useQuery } from '@apollo/client';
import { GET_PRODUCT_LIST } from '../../graphql/queries';
import { Card } from '../Card/Card';
import { ItemsData } from '../../types';

export const ProducList = () => {
  const { loading, error, data } = useQuery<ItemsData>(GET_PRODUCT_LIST, {});

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
    <>
      {data?.products.items.map(
        ({ id, featuredAsset, name, description, variants }) => (
          <Card
            id={id}
            variants={variants}
            key={id}
            name={name}
            description={description}
            featuredAsset={featuredAsset}
          />
        )
      )}
    </>
  );
};
