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

  '&:focus-visible': {
    outline: '2px solid #1046ea',
  },
});

export const Button = ({ children, onClick }: ButtonProps) => {
  return <ButtonSc onClick={onClick}>{children}</ButtonSc>;
};
