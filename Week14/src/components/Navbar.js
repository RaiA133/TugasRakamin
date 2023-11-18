import { Box, Flex, Link } from "@chakra-ui/react";
import { cookies } from "next/headers";
import Logout from "./Logout";

function Navbar() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  return (
    <Flex
      as="header"
      position="sticky"
      bg="green.700"  
      color="white" 
      top={0}
      zIndex={999}
      w="100%"
      p={{ base: 2, md: 4 }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box fontWeight="bold" color="white">
        <Link href="/" _hover={{ textDecoration: 'underline' }}>Home</Link>
      </Box>

      <Box display={{ base: 'none', md: 'block' }}>
        {!accessToken ? (
          <Box fontWeight="bold" color="white" ml={{ md: 4 }}>
            <Link href="/register" _hover={{ textDecoration: 'underline' }}>Sign Up</Link>
          </Box>
        ) : (
          <Logout />
        )}
      </Box>
    </Flex>
  );
}

export default Navbar;
