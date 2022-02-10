import React, { useState } from 'react';
import {
  ChakraProvider,
  Text,
  Link,
  theme,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Button,
  Flex
} from '@chakra-ui/react';
import {
  EmailIcon,
} from '@chakra-ui/icons';
 function LoginIn() {
  const [emailAdr, setEmailAdr] = useState('');
  const [password, setPassword] = useState('');
  const IsInvalid = password === '' || emailAdr === '';

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <ChakraProvider theme={theme}>
      <Flex minHeight='100vh' width='full' align = 'center' justifyContent='center'>
      <Container p={12} rounded={6}>
        <Stack spacing={2}>
          <Text fontSize="xl" align="center">FIND:BIT</Text>

          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<EmailIcon color='gray.300' />} />
            <Input
              id='email'
              type='email'
              placeholder='Email'
              value={emailAdr}
              onChange={({ target }) => setEmailAdr(target.value)} />
          </InputGroup>

          <InputGroup size='md'>
            <Input
              isRequired
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              value={password}
              onChange={({ target }) => setPassword(target.value)} />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme='orange' disabled={IsInvalid} >Log In :D</Button>
          <Text fontSize="xs" align="center">
            <Link color="orange" href = "/">
              Create an account
            </Link>
          </Text>
      </Stack>
    </Container>
    </Flex>
    </ChakraProvider>
  )
  
}
export default LoginIn;