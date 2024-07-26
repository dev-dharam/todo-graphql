export interface Root {
    todos: Todo[]
}

export interface Todo {
    __typename: string
    id: number
    title: string
    completed: boolean
    created_at: string
}
