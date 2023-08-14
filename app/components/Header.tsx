"use client"
import { Box, Heading, Text, Container } from '@chakra-ui/react'

export default function Header() {
    return (
        <>
            <Box minW="320px" bg="#6B46C1" h="397px" textColor="white" textAlign={["left","left","center","center"]} px={["22","12","1"]}>
                    <Heading pt={["56px","66px","89px"]} as="h1" fontSize={["2xl","3xl","4xl","5xl"]} fontWeight="700" lineHeight={["32px","42px","62px"]}>
                        Simple Pricing Ui For Your Buisness
                    </Heading>
                    <Text  fontSize={["lg","lg","xl","2xl"]} fontWeight="400" lineHeight="32px" letterSpacing="0em" textColor="gray.50" pt={["10px","16.08px"]} pb="198px">Plans that are carefully crafted to suit your business.</Text>
            </Box>
        </>
    )
}
//styleName: 2xl;
// font-family: Inter;
// font-size: 24px;
// font-weight: 500;
// line-height: 32px;
// letter-spacing: 0em;
// text-align: center;
