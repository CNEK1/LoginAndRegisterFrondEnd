import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import {Copyright} from './forFooter/Copyright';
import {Links} from './forFooter/Links';

export const Footer = () =>  (
    <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
      <Stack >
        <Stack direction={{ base: 'column-reverse', md: 'row' }} alignItems="center"  justify="space-between">
          <Links />
        </Stack>
        <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
      </Stack>
    </Box>
)

