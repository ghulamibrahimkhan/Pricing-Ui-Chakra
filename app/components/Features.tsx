"use client"
import { HStack, Stack, Box, StackProps, Icon, Text } from "@chakra-ui/react"
import { MoneyBack, SetupFee, MonthlySub } from "./Icon";
import { ElementType } from "react"

interface FeatureProps extends StackProps {
    icon: ElementType
}

function Feature(props: FeatureProps) {
    const { icon, children, ...rest } = props;
    return (
        <HStack {...rest} spacing="24px" mx="9px" justifyContent="center" alignItems="center" pb="10px">
            <Icon as={icon} boxSize={["33px","33px","38","48px"]}/>
            <Text fontSize="18px" fontWeight="700">
                {children}
            </Text>
        </HStack>
    )
}

export function Features() {
    return (
        <Box mt={["280","280px","300px","320px"]}>
            <Stack direction={["column","column","row"]} maxW="906px" mx={["20px","40px","40px","auto"]} bg="white">
                <HStack>
                    <Feature icon={MoneyBack}>
                        30 days money back guaranterr
                    </Feature>
                </HStack>
                <HStack>
                    <Feature icon={SetupFee}>
                        No setup fees 100% hassle-free
                    </Feature>
                </HStack>
                <HStack>
                    <Feature icon={MonthlySub}>
                        No monthly subscription Pay once and for all
                    </Feature>
                </HStack>
            </Stack>
        </Box>
    )
}