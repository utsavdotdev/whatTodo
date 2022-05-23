import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  // const initTodo = [
  //   {
  //     id: 1,
  //     body: "H3llo",
  //   },
  // ];

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function dltTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>WhatTodo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <VStack p={4}>
        <IconButton
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound="true"
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
        <Heading
          mb="8"
          fontWeight="extrabold"
          size="xl"
          bgGradient="linear(to-r,pink.500,pink.400,blue.500)"
          bgClip="text"
        >
          What To Do
        </Heading>
        <TodoList todos={todos} dltTodo={dltTodo} />
        <AddTodo addTodo={addTodo} />
      </VStack>
    </>
  );
}
