"use client";
import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Hero() {

  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        backgroundImage:
          `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 36%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 33 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontSize: {xs: '2rem', sm: 'clamp(3.5rem, 10vw, 4rem)'},
            }}
          >
            One Cheer Makes a Huge&nbsp;
            <Typography 
              variant="h2" 
              component="span" 
              sx={{
                textAlign: 'center',
                fontSize: {xs: '2rem', sm: 'clamp(3.5rem, 10vw, 4rem)'},
                color: 'secondary.main', 
              }}
              >
              Difference
            </Typography>
              </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' }, fontSize: {xs: '.8rem', sm: '1.25rem'} }}
          >
            A cheer from you means a lot, giving me that extra motivation to chase my&nbsp;
            <Typography
              variant='h6'
              component='span'
              sx={{
                textDecoration: 'underline',
                fontSize: {xs: '.8rem', sm: '1.25rem'},
              }}
            >
              dreams
            </Typography>
            .
          </Typography>
          
        </Stack>
        
      </Container>
    </Box>
  );
}