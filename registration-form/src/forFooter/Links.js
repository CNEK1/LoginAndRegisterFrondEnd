import { ButtonGroup, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaGithub,FaTelegram, FaYoutube } from 'react-icons/fa'

export const Links = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="https://github.com/" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
    <IconButton as="a" href="https://www.youtube.com/" aria-label="YouTube" icon={<FaYoutube fontSize="20px" />} />
    <IconButton as="a" href="https://web.telegram.org/z/" aria-label="Telegram" icon={<FaTelegram fontSize="20px" />} />
  </ButtonGroup>
)
