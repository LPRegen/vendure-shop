import React from 'react';
import { Paper, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

interface LayoutProps {
  children: React.ReactNode;
}

const Item = styled(Paper)({
  backgroundColor: 'grey',
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid container spacing={2}>
      {React.Children.map(children, (child, index) => (
        <Grid xs={12} sm={6} md={4} lg={3}>
          <Item key={index}>{child}</Item>
        </Grid>
      ))}
    </Grid>
  );
};
