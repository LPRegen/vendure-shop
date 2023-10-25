import {
  CardActions,
  CardContent,
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

const CardSc = styled(CardMui)({});

export const Card = ({ img, title, description, price }: CardProps) => {
  return (
    <CardSc>
      <CardMedia sx={{ height: 240 }} title={img.alt}>
        <img src={img.src} alt={img.alt} />
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
