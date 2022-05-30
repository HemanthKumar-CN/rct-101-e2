import { Button, ButtonGroup, Select } from "@chakra-ui/react";
import React from "react";

const Pagination = ({setPage,setLimit,page,limit,totalCount}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  return (
    <ButtonGroup mt="200px" w="30%" alignSelf="center">
      <Button p="20px" disabled={page==1} data-cy="pagination-first-button" onClick={()=> {setPage(1)}}>First</Button>
      <Button p="20px" disabled={page==1} data-cy="pagination-previous-button" onClick={()=> {setPage(page-1)}}>Previous</Button>
      <Select data-cy="pagination-limit-select" onChange={(e)=> {
        let numLimit=Number(e.target.value);
        
        setLimit(numLimit)
        // console.log("limit",numLimit)
      }} >
        <option data-cy="pagination-limit-3" value="3">3</option>
        <option data-cy="pagination-limit-6" value="6">6</option>
        <option data-cy="pagination-limit-9" value="9">9</option>
      </Select>
      <Button p="20px" disabled={page>=Math.ceil(totalCount/limit)  }   data-cy="pagination-next-button" onClick={()=> {
        setPage(page+1)
      }}>Next</Button>
      <Button p="20px" disabled={page>=Math.ceil(totalCount/limit)  } data-cy="pagination-last-button" onClick={()=> {
        let s=Math.ceil(totalCount/limit);
        setPage(s)
    }} >Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
