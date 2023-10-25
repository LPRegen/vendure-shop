import { ButtonBase, styled } from '@mui/material';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const ButtonSc = styled(ButtonBase)({
  backgroundColor: '#90caf9',
  padding: '0.5rem 1rem',
  margin: '0.2rem 0.4rem',
  borderRadius: '4px',
  fontSize: '1.2rem',
  fontWeight: '600',
  transition: 'background-color 0.6s',
  '&:hover': {
    backgroundColor: '#42a5f5',
  },

  // TODO: add styles for kb
});

export const Button = ({ children }: ButtonProps) => {
  return <ButtonSc>{children}</ButtonSc>;
};
