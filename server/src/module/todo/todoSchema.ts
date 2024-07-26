export const todoSchema = `#graphql

    scalar Date

    type ResponseMessage{
        message: String!
    }

    type Todo{
        id: Int
        title: String!
        completed: Boolean
        created_at: Date
    }

    type Query{
        todos: [Todo]
    }

    type Mutation{
        createTodo(title: String): ResponseMessage
        deleteTodo(id: Int): ResponseMessage
        toggleTodo(id: Int, completed: Boolean): ResponseMessage
        titleupdateTodo(id: Int, title: String): ResponseMessage
    }
`