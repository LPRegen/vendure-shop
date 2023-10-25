import {
  CardActions,
  CardContent as CardContentMui,
  CardMedia,
  Card as CardMui,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material';
import { Button } from '../Button/Button';

export interface CardProps {
  img: React.ImgHTMLAttributes<HTMLImageElement>;
  title: string;
  description: string;
  price: number;
}

// FIX: Style or remove
const CardSc = styled(CardMui)({});

const CardContent = styled(CardContentMui)({
  display: 'grid',
  gap: '0.4rem',
});

export const Card = ({ img, title, description, price }: CardProps) => {
  return (
    <CardSc>
      <CardMedia title={img.alt}>
        <img src={img.src} alt={img.alt} height={240} width={'100%'} />
      </CardMedia>

      <CardContent>
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Typography>{price}</Typography>
        <Button>Buy</Button>
      </CardActions>
    </CardSc>
  );
};
