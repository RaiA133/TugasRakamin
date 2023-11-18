"use client";

// import styles from './page.module.css'
import { useEffect, useState } from "react";
import { getAllBooks } from "@/fetch/books";
import {
  Table,
  Thead,
  Flex,
  Tr,
  Th,
  Stack,
  TableContainer,
  Td,
  Text,
  Tbody,
  Button,
  Link,
  Image,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // CSR / CLIENT SIDE RENDERING //

  const fetchBooks = async () => {
    try {
      const response = await getAllBooks();

      setBooks(response.books);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchBooks();
  }, []);

  if (loading) {
    return (
      <Flex
      height="100vh" 
      justifyContent="center" 
      alignItems="center"
    >
      <Center>
        <Text fontSize="2xl" mr="2">Loading...</Text>
        <Spinner size="lg" />
      </Center>
    </Flex>
    );
  }

  return (
    <>
      <TableContainer p="20px">
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th fontSize="15px" color="black">
                No
              </Th>
              <Th fontSize="15px" color="black">
                Image
              </Th>
              <Th fontSize="15px" color="black">
                Title
              </Th>
              <Th fontSize="15px" color="black">
                Author
              </Th>
              <Th fontSize="15px" color="black">
                Publisher
              </Th>
              <Th fontSize="15px" color="black">
                Year
              </Th>
              <Th fontSize="15px" color="black">
                Pages
              </Th>
              <Th fontSize="15px" color="black">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {books.map((book, index) => {
              return (
                <Tr key={index}>
                  <Td fontWeight="bold" fontSize="20px">{index + 1}</Td>
                  <Td>
                    <Image
                      width="150px"
                      objectFit="contain"
                      src={`http://localhost:3000/${book.image}`}
                      fallbackSrc="https://via.placeholder.com/150"
                    />
                  </Td>
                  <Td>
                    <Link
                      color="blue.400"
                      href={`http://localhost:3000/books/${book.id}`}
                    >
                      {book.title}
                    </Link>
                  </Td>
                  <Td>{book.author}</Td>
                  <Td>{book.publisher}</Td>
                  <Td>{book.year}</Td>
                  <Td>{book.pages}</Td>
                  <Td>
                    <Stack>
                      <Button
                        color="white"
                        bgColor="gray.500"
                        onClick={() => router.push(`/books/${book.id}/edit`)}
                      >
                        Edit
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          router.push(`/books/${book.id}/delete`);
                        }}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <Button
        ms="20px"
        bg="green.700"
        boxShadow="sm"
        color="white"
        onClick={() => router.push("/books/create")}
        mb="100px"
      >
        Add New Book
      </Button>

    </>
  );
}