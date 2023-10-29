import {
  CardActions as CardActionsMui,
  CardContent as CardContentMui,
  CardMedia as CardMediaMui,
  Card as CardMui,
  Typography,
  styled,
} from '@mui/material';
import { CardProps } from '../../types';
import { Button } from '../Button/Button';

// FIX: Style or remove
const CardSc = styled(CardMui)({});

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
  return (
    <CardSc data-testid="card">
      <CardMedia title={featuredAsset.name}>
        <img src={featuredAsset.source} alt={featuredAsset.name} />
      </CardMedia>

      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Description>{description}</Description>
      </CardContent>
      <CardActions>
        <Typography>$ {variants[0].price}</Typography>
        <Button
          onClick={handleAddToOrder}
          label={`Buy ${name}`}
          title={`Buy ${name}`}
        >
          Buy
        </Button>
      </CardActions>
    </CardSc>
  );
};
