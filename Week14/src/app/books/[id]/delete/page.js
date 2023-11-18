"use client";

import { useEffect, useState } from "react";
import { deleteBook } from "@/fetch/books";
import {
  Container,
  Card,
  CardBody,
  Image,
  Stack,
  HStack,
  Heading,
  Text,
  Box,
  Button,
  Center,
} from "@chakra-ui/react";
import { getBookById } from "@/fetch/books";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function BookDetail({ params }) {
  const { id } = params;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { book } = await getBookById(id);

      setTitle(book.title);
      setAuthor(book.author);
      setPublisher(book.publisher);
      setYear(book.year);
      setImage(book.image);
    }
    fetchData();
  }, [id]);

  const router = useRouter();

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);

      Swal.fire({
        icon: "success",
        title: "Book Deleted Successfully",
        text: "The selected book has been removed from the catalog.",
        showConfirmButton: false,
        timer: 2000,
      });

      router.push("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to Delete Book",
        text: "Oops! Something went wrong while deleting the selected book.",
        showConfirmButton: false,
        showCloseButton: true,
      });
    }
  };

  return (
    <Container
      borderRadius="20px"
      bgColor="green.700"
      boxShadow="xl"
      maxW="5xl"
      px="30px"
      pt="30px"
      pb="25px"
      my="40px"
    >
      <Text
        fontFamily="sans-serif"
        fontSize="3xl"
        fontWeight="bold"
        color="white"
        textAlign="center"
        mb="30px"
      >
        Delete Books
      </Text>
      <Card
        colorScheme="red"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="filled"
      >
        <Image
          objectFit="contain"
          maxW={{ base: "100%", sm: "200px" }}
          ml="5"
          src={`http://localhost:3000/${image}`}
          fallbackSrc="https://via.placeholder.com/200"
        />

        <Stack>
          <CardBody>
            <Heading size="lg">{title}</Heading>

            <Text mt="3">
              <strong>Author:</strong> {author}
            </Text>
            <Text mt="1">
              <strong>Publisher:</strong> {publisher}
            </Text>
            <Text mt="1">
              <strong>Year:</strong> {year}
            </Text>
            <Text mt="1">
              <strong>Synopsis:</strong>
            </Text>
            <Box mt="1" style={{ maxHeight: "160px", overflowY: "auto" }}>
              <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
              <Text mt="3">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </Text>
            </Box>
          </CardBody>
        </Stack>
      </Card>
      <Text fontFamily="sans-serif" fontSize="2xl" textAlign="center" my="15px" color="white">
        Are you sure?
      </Text>
      <Center>
        <HStack>
          <Button
            fontSize="2xl"
            colorScheme="red"
            onClick={() => {
              handleDeleteBook(id);
            }}
          >
            Yes
          </Button>
          <Button
            fontSize="2xl"
            color="white"
            bgColor="gray.500"
            onClick={() => router.push("/")}
          >
            No
          </Button>
        </HStack>
      </Center>
    </Container>
  );
}
