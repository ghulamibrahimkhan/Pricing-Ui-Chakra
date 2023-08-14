'use client'


import { ChakraProvider } from "@chakra-ui/react";

export default function Chakra({children,}: {children: React.ReactNode}) {
    return (
        <ChakraProvider>
        <ChakraProvider>
            {children}
        </ChakraProvider>
        </ChakraProvider>
    )

}