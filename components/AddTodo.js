import { Button, HStack,Input,useToast} from "@chakra-ui/react";
import {useState } from 'react';
import {nanoid} from 'nanoid'
function AddTodo({addTodo}) {
  const toast=useToast();
  function Submit(e){
    e.preventDefault();
    if(!content)
    {
      toast({
        title: 'No Todos to add',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    const todo ={
      id:nanoid(),
      body:content,
    }
    addTodo(todo);
    setContent('');
  }
  const [content,setContent]=useState('');
  return (
    <form onSubmit={Submit}>
     <HStack mt='8'>
       <Input varient="filled" placeholder="Just Add!" value={content} onChange={(e) => setContent(e.target.value)} />
       <Button colorScheme='pink' px="8" type="submit">Add</Button>
     </HStack>
    </form>
  )
}

export default AddTodo;