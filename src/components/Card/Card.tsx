import { useMutation } from '@apollo/client';
import {
  CardActions as CardActionsMui,
  CardContent as CardContentMui,
  CardMedia as CardMediaMui,
  Card as CardMui,
  Typography,
  styled,
} from '@mui/material';
import { ADD_PRODUCT_TO_ORDER } from '../../graphql/mutations';
import { GET_ACTIVE_ORDER } from '../../graphql/queries';
import { CardProps } from '../../types';
import { formatPrice } from '../../utils/formatPrice';
import { Button } from '../Button/Button';

const CardMedia = styled(CardMediaMui)({
  height: '200px',
  '> img': {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
  },
});

const CardContent = styled(CardContentMui)({
  display: 'grid',
  gap: '0.4rem',
});

const CardActions = styled(CardActionsMui)({
  display: 'flex',
  justifyContent: 'space-around',
  ':first-child': {
    fontSize: '1.2rem',
    fontWeight: '500',
  },
});

const CardTitle = styled(Typography)({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1,
});

const Description = styled(Typography)({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
});

// NTH: Add link to product's page.

export const Card = ({
  id,
  featuredAsset,
  name,
  description,
  variants,
}: CardProps) => {
  const [addProductToOrder] = useMutation(ADD_PRODUCT_TO_ORDER);

  const handleAddToOrder = () => {
    const productId = id;
    addProductToOrder({
      variables: { productId },
      refetchQueries: [{ query: GET_ACTIVE_ORDER }],
    });
  };

  return (
    <CardMui data-testid="card">
      <CardMedia title={featuredAsset.name}>
        <img src={featuredAsset.source} alt={featuredAsset.name} />
      </CardMedia>

      <CardContent>
        <CardTitle variant="h5" component="h2" title={name}>
          {name}
        </CardTitle>
        <Description>{description}</Description>
      </CardContent>
      <CardActions>
        <Typography>{formatPrice(variants[0].price)}</Typography>
        <Button
          onClick={handleAddToOrder}
          label={`Buy ${name}`}
          title={`Buy ${name}`}
        >
          Buy
        </Button>
      </CardActions>
    </CardMui>
  );
};
