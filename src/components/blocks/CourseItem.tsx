import React from "react"
import { Box, Image, Badge } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa"
import { Course } from "./Courses"

const MotionBox = motion(Box)

const CourseItem = (props: { course: Course }) => {
    const property = props.course
    return (
        <MotionBox
            whileHover={{ scale: 1.1 }}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            overflow="hidden"
            shadow="lg"
            cursor="pointer"
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
                    {Array(5)
                        .fill("")
                        .map((_, i) => (
                            <Box
                                as={FaStar}
                                key={i}
                                color={
                                    i < property.rating
                                        ? "teal.500"
                                        : "gray.300"
                                }
                            />
                        ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {property.reviewCount} reviews
                    </Box>
                </Box>
            </Box>
        </MotionBox>
    )
}

export default CourseItem
