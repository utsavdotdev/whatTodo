import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode='system'/>
        <Component {...pageProps}/>
    </ChakraProvider>
  )
}

export default MyApp
