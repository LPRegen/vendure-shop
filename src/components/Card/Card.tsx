import {
  CardActions as CardActionsMui,
  CardContent as CardContentMui,
  CardMedia,
  Card as CardMui,
  Typography,
  styled,
} from '@mui/material';
import { CardProps } from '../../types';
import { Button } from '../Button/Button';

// FIX: Style or remove
const CardSc = styled(CardMui)({});

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

// NOTE: Add link to product's page.

export const Card = ({ img, title, description, price }: CardProps) => {
  return (
    <CardSc>
      <CardMedia title={img.alt}>
        <img src={img.src} alt={img.alt} width={'100%'} />
      </CardMedia>

      <CardContent>
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
        <Description>{description}</Description>
      </CardContent>
      <CardActions>
        <Typography>$ {price}</Typography>
        <Button>Buy</Button>
      </CardActions>
    </CardSc>
  );
};
