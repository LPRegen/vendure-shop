import { ButtonBase, styled } from '@mui/material';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  label: string;
}

const ButtonSc = styled(ButtonBase)({
  backgroundColor: '#90caf9',
  padding: '0.5rem 1.4rem',
  margin: '0.2rem 0.4rem',
  borderRadius: '4px',
  fontSize: '1.2rem',
  fontWeight: '500',
  transition: 'background-color 0.6s',
  '&:hover': {
    backgroundColor: '#42a5f5',
  },

  '&:focus-visible': {
    outline: '2px solid #1046ea',
  },
});

export const Button = ({ children, onClick, label, title }: ButtonProps) => {
  // NTH: Add icons
  return (
    <ButtonSc onClick={onClick} aria-label={label} title={title}>
      {children}
    </ButtonSc>
  );
};
