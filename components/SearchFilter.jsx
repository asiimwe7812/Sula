import { useEffect, useState } from "react";
import {
  Flex,
  Icon,
  Spinner,
  Box,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import Router from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/filtersData";
const setProperty = (filterValues) => {
  const path = Router.pathname;
  const { query } = Router;
  const values = getFilterValues(filterValues);
  values.forEach((item) => {
    query[item.name] = item.value;
  });
  Router.push({ pathname: path, query });
};
const SearchFilter = () => {
  const [filters, setFilters] = useState(filterData);
  return (
    <Flex bg="gray.100" justifyContent="center" p="4" flexWrap="wrap">
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            w="fit-content"
            p="2"
            placeholder={filter.placeholder}
            onChange={(e) =>
              setProperty({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};
export default SearchFilter;
