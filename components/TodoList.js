import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa'

function TodoList({todos,dltTodo}) {
  if(!todos.length)
  {
    return(
      <Badge colorScheme='green' p='4' m='4' borderRadius="lg">
        No Todos!
      </Badge>
    );
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderColor='grey.100'
      borderWidth='2px'
      marginTop='4'
      p='4' borderRadius='lg'
      w='100%'
      maxW={{
        base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'
      }}
      alignItems='stretch'
      >
      {todos.map(todo => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer/>
          <IconButton icon={<FaTrash />} isRound='true' onClick={() => dltTodo(todo.id)}/>
        </HStack>
      ))}

    </VStack>
  )
}

export default TodoList;