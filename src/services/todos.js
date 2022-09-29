import { checkError, client } from './client';

export async function getListTodos() {
  const response = await client.from('todos').select();
  return checkError(response);
}

export async function createListTodo(description) {
  const response = await client.from('todos').insert({ description });
  return checkError(response);
}

export async function toggleComplete({ id, complete }) {
  const response = await client
    .from('todos')
    .update({ complete: !complete })
    .match({ id })
    .single();

  return checkError(response);
}