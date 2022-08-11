import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Box, Text, Icon, Flex } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilter from "../components/SearchFilter";
import Property from "../components/Property";
const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();
  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        <Text>Search Properties Around</Text>
        <Icon as={BsFilter} paddingLeft="2" w="7" />
      </Flex>
      {searchFilters && <SearchFilter />}
      <Text fontWeight="bold" fontSize="2xl" p="4">
        properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {[].map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {[].length === 0 && (
        <Flex
          justifyContent="center"
          flexDirection="row"
          alignItems="center"
          marginTop="5"
          marginButtom="5"
        ></Flex>
      )}
    </Box>
  );
};
export default Search;
