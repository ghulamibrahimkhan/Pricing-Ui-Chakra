"use client"
import { Box, Button, Flex, Heading, Text, HStack } from "@chakra-ui/react"
import Image from "next/image"

export default function Pricing() {
    return (
        <Box pt={["90px","120px","150px"]} px={["22px", "42px", "62"]}>
            <Box m="-256px" maxW="994px" minW="300px" mx="auto" borderRadius="12px" overflow="hidden" boxShadow="base">
                <Flex direction={["column", "column","column", "row"]}>
                    <Box bg="#F0EAFB" textAlign="center" pt="57px" pb="60px">
                        <Text fontSize="24" fontWeight="800" lineHeight="32px" pb="16x">
                            Premiem Pro
                        </Text>
                        <Heading fontSize={["48px","48px","60px"]} fontWeight="800" letterSpacing="-0.01em" pb="8px">
                            $329
                        </Heading>
                        <Text fontSize="lg" lineHeight="28px" pb="24px" fontWeight="500">
                            billed just once
                        </Text>
                        <Button borderRadius="8px" mx={["22px","48px"]} py="24px" px="75" bg="#805AD5" textColor="white" fontSize="16px" fontWeight="700">Get Started</Button>
                    </Box>

                    {/* second box */}
                    <Box  pt="48px" px={["14px","28px", "48px"]} bg="white">
                        <Text fontSize="18px" fontWeight="500" lineHeight="28px" pb="36px">
                            Access these features when you get this pricing package for your business.
                            </Text>
                        <HStack spacing={["3","4","5"]} pb="16px">
                            <Image src="/substract.svg" alt="Check" width={22} height={22} />
                            <Text fontSize="18px" lineHeight="28px" fontWeight="400">International calling and messaging API</Text>
                        </HStack>
                        <HStack spacing={["3","4","5"]} pb="16px">
                            <Image src="/substract.svg" alt="Check" width={22} height={22} />
                            <Text fontSize="18px" lineHeight="28px" fontWeight="400">Additional phone numbers</Text>
                        </HStack>
                        <HStack spacing={["3","4","5"]} pb="16px">
                            <Image src="/substract.svg" alt="Check" width={22} height={22} />
                            <Text fontSize="18px" lineHeight="28px" fontWeight="400">Automated messages via Zapier</Text>
                        </HStack>
                        <HStack spacing={["3","4","5"]} pb="36px">
                            <Image src="/substract.svg" alt="Check" width={22} height={22} />
                            <Text fontSize="18px" lineHeight="28px" fontWeight="400">24/7 support and consulting</Text>
                        </HStack>
                    </Box>
                </Flex>
            </Box>
        </Box>

    )
}