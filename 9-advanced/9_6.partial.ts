{
  type ToDo = {
    title: string
    desc: string
    label: string
    priority: 'high' | 'low'
  }

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>) {
    return { ...todo, ...fieldsToUpdate }
  }
  const todo: ToDo = {
    title: 'learn TypeScript',
    desc: 'study hard',
    label: 'study',
    priority: 'high',
  }
  const updated = updateTodo(todo, { priority: 'low' })
  console.log(updated)
}
