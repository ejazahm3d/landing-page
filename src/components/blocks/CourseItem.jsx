import React from "react"
import { Box, Image, Badge } from "@chakra-ui/core"

const CourseItem = (props) => {
    const property = props.course
    return (
        <Box
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            overflow="hidden"
            shadow="lg"
        >
            <Image
                minHeight="18rem"
                objectFit="contain"
                src={property.imageUrl}
                alt={property.imageAlt}
            />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge rounded="full" px="2" variantColor="teal">
                        New
                    </Badge>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {property.title}
                </Box>

                <Box>{property.formattedPrice}</Box>

                <Box d="flex" mt="2" alignItems="center">
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {property.reviewCount} reviews
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default CourseItem
