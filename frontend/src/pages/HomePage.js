
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then(res => setProducts(res.data));
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>All Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HomePage;
