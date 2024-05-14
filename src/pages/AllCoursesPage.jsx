import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Center,
} from "@chakra-ui/react";

export const AllCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);

  const getAllInstructors = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5051/api/v1/instructor/get-instructors"
      );
      // console.log(res.data);
      setInstructors(res.data);
    } catch (error) {
      console.log("cant fetch Instructors \n Error :", error);
    }
  };

  const getAllCourses = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5051/api/v1/user/get-courses"
      );
      //   console.log("Get all courses : ", res.data);
      setCourses(res.data);
    } catch (error) {
      console.log("Cant get courses \n error : ", error);
    }
  };

  useEffect(() => {
    getAllInstructors();
    getAllCourses();
  }, []);
  console.log(instructors);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl	font-semibold text-center">All Courses</h1>
      
      <Stack
        direction={"row"}
        spacing={"20px"}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"space-around"}
        margin = {"40px 0"}
      >
        {courses.map((course, index) => (
          <Card key={index} width = {"350px"} height = {"450px"}>
            <CardBody>
              <Image
                src={course.image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                alignItems={'center'}
                justifyContent={'center'}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{course.title}</Heading>
                <Text>{course.description}</Text>
                <Text>
                  {/* {
                  course.instructor ? instructors.find(i=> i._id === course.instructor).name : 'No instructor assigned yet.'
                } */}
                </Text>
                <Stack direction={"row"} alignItems={"baseline"}>
                  <Text color="red.600" fontSize="2xl">
                    ${course.offPrice}
                  </Text>
                  <Text as="s" color="black.600" fontSize="1xl ">
                    ${course.price}
                  </Text>
                </Stack>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Stack>
    </div>
  );
};
