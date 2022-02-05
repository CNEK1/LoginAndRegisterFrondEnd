import {Text} from '@chakra-ui/react'
import React from 'react'

export const Copyright = (props) =>(
  <Text fontSize="md" {...props}>
    &copy; {new Date().getFullYear()} FIND:BIT, Inc. All rights reserved.
  </Text>
)
