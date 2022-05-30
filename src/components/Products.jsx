import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import { Button, ButtonGroup, Flex, Grid, Spacer } from '@chakra-ui/react';
import axios from "axios";


const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;


  const [itemdata, setItemdata] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(3);
  const [totalCount, setTotalCount] = React.useState(0)



  const initState= {
      id:"",
      title: "",
      category: "",
      gender: "",
      imageSrc: "https://picsum.photos/seed/picsum6/420/260",
      price: ""
  }

    const [formData, setFormData] = React.useState(initState)

  React.useEffect(() => {
    getTodo(page,limit)
    // console.log(itemdata)
  }, [page,limit])

  const getTodo = async (page,limit) => {
    let r = await axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
    // console.log(r.data)
    setItemdata(r.data)
    let num=Number(r.headers["x-total-count"]);
    setTotalCount(num)
    // console.log(num)
  }


  return (

    <Flex direction="column">
      {/*  AddProduct */}
      <AddProduct getTodo={getTodo} page={page} limit={limit} setFormData={setFormData} formData={formData} />

      
      <Grid w="70%" maxHeight="80vh"
      templateColumns='repeat(3, 1fr)' m="auto" gap={6}>{/* List of Products */}
      <Product itemdata={itemdata}/>
      </Grid>
      {/* Pagination */}
      

      <Pagination  setPage={setPage} setLimit={setLimit} page={page} limit={limit} totalCount={totalCount} />
    </Flex>
  );
};

export default Products;
