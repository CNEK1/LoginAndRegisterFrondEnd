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
  PhoneIcon,
  EmailIcon,
} from '@chakra-ui/icons';

function RegistrationForm() {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAdr, setEmailAdr] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationOfPass, setConfPass] = useState('');
  const IsInvalid = password === '' || emailAdr === '' || phoneNumber === '' || confirmationOfPass !== password;

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <ChakraProvider theme={theme}>
      <Flex minHeight='100vh' width='full' align = 'center' justifyContent='center'>
      <Container p={12} rounded={6}>
        <Stack spacing={2}>
          <Text fontSize="xl" align="center">Create your FIND:BIT Account</Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<PhoneIcon color='gray.300' />} />
            <Input
              isRequired
              id='phone'
              type='phone'
              placeholder='Phone number'
              value={phoneNumber}
              onChange={({ target }) => setPhoneNumber(target.value)} />
          </InputGroup>

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

          <Input
            onPaste={(e) => { e.preventDefault(); return false; } }
            onCopy={(e) => { e.preventDefault(); return false; } }
            pr='4.5rem'
            type='password'
            placeholder='Confirm Password'
            value={confirmationOfPass}
            onChange={({ target }) => setConfPass(target.value)} />
          <Button colorScheme='orange' disabled={IsInvalid} >Create :D</Button>
          <Text fontSize="md" align="center">Already have an account?</Text>
          <Text fontSize="xs" align="center">
            <Link color="orange" href = '/log'>
              Log In
            </Link>
          </Text>
      </Stack>
    </Container>
    </Flex>
    </ChakraProvider>
  )
}
export default RegistrationForm;