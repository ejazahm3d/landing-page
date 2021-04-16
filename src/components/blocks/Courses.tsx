import React from "react"
import { Flex, Heading, Box, useBreakpointValue } from "@chakra-ui/react"
import CourseItem from "./CourseItem"

export interface Course {
    imageUrl: string
    imageAlt: string
    title: string
    formattedPrice: string
    rating: number
    reviewCount: number
}

const Courses = () => {
    const flexPadding = useBreakpointValue({
        base: "2rem 1rem",
        sm: "3rem 2rem",
        lg: "3rem 5rem",
    })
    const courseList: Course[] = [
        {
            imageUrl: "/beginner.svg",
            imageAlt: "startup",
            title: "Beginner Intro Course",
            formattedPrice: "$900.00",
            reviewCount: 34,
            rating: 4,
        },
        {
            imageUrl: "/frontend.svg",
            imageAlt: "Frontend developer",
            title: "Frontend Developer",
            formattedPrice: "$1,300.00",
            reviewCount: 30,
            rating: 4,
        },
        {
            imageUrl: "/advanced.svg",
            imageAlt: "Expert Dev",
            title: "Advanced Full Stack Developer",
            formattedPrice: "$1,900.00",
            reviewCount: 24,
            rating: 4,
        },
    ]
    return (
        <Flex id="courses" p={flexPadding} align="center" flexDir="column">
            <Heading
                size="xl"
                textAlign="center"
                mt="1rem"
                color="gray.700"
                mb="2.5rem"
            >
                Courses
            </Heading>
            <Flex wrap="wrap" justify="space-evenly">
                {courseList.map((course) => {
                    return (
                        <Box key={course.title} p="1rem">
                            <CourseItem course={course} />
                        </Box>
                    )
                })}
            </Flex>
        </Flex>
    )
}

export default Courses
