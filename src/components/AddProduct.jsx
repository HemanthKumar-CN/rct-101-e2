import { Button, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Radio, RadioGroup, Select, useDisclosure } from "@chakra-ui/react";
import React from "react";
import axios from "axios";

const AddProduct = ({setFormData,formData,getTodo,page,limit}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;

    const handleChange=(e)=> {
      // console.log("yes",e)

      let {name,value}=e.target || e;

      
      
      setFormData((prev)=>({...prev,[name]:value || e}))
    }
    

    const handleclick=()=> {
      axios.post(`http://localhost:8080/products`, formData)
      .then(res=> {
        // console.log(res.data)
        getTodo(page,limit)
      })
    }
  
  
    const { isOpen, onOpen,onClose}=useDisclosure()
  
    const {title,category,gender,price}=formData;
  return (
    <>
      <Button onClick={onOpen} w="20%" m="auto" my={4} data-cy="add-product-button">Add New Product</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>

      <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />

        <ModalBody pb={6}>
        <FormLabel> Title</FormLabel>

          <Input onChange={handleChange} name="title" value={title} data-cy="add-product-title" />
          <FormLabel>Category</FormLabel>
          <Select onChange={handleChange} name="category" value={category} data-cy="add-product-category">
            <option value="shirt" data-cy="add-product-category-shirt">Shirt</option>
            <option value="pant" data-cy="add-product-category-pant">Pant</option>
            <option value="jeans" data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <FormLabel>Gender</FormLabel>

          <RadioGroup  data-cy="add-product-gender">
            <Radio onChange={handleChange} name="gender" value="Male" data-cy="add-product-gender-male" >Male</Radio>
            <Radio onChange={handleChange} name="gender" value="Female" data-cy="add-product-gender-female">Female</Radio>
            <Radio onChange={handleChange} name="gender" value="Unisex" data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <FormLabel>Price</FormLabel>

          <Input onChange={handleChange} name="price" value={price} data-cy="add-product-price" placeholder="Price" />
          <Button onClick={handleclick} data-cy="add-product-submit-button">Create</Button>
        </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
