import * as React from 'react'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text
} from "@react-email/components"

export default function MagicLinkEmail({name,email,text}:{name:string,email:string,text:string}) {
  return (
    <Html>
      <Head />
      <Preview>You have a new message</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New message from {name} - {email}</Heading>
        
          <Text
            style={{
              ...textStyle,
              color: 'black',
              marginTop: '14px',
              marginBottom: '16px'
            }}
          >
            {text}
          </Text>

        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#ffffff'
}

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto'
}

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
}

const textStyle = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0'
}