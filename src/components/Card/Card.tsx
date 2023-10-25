import {
  CardActions as CardActionsMui,
  CardContent as CardContentMui,
  CardMedia,
  Card as CardMui,
  Typography,
  styled,
} from '@mui/material';
import { Button } from '../Button/Button';

export interface CardProps {
  img: React.ImgHTMLAttributes<HTMLImageElement>;
  title: string;
  description: string;
  price: number;
}

// FIX: Style or remove
const CardSc = styled(CardMui)({});

// NOTE: Check if I can give styles to img in CardMedia

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

// NOTE: Add link to product's page.

// TODO: Add GQL

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
        {/* FIX: Set max lines for displayed description */}
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Typography>$ {price}</Typography>
        <Button>Buy</Button>
      </CardActions>
    </CardSc>
  );
};
