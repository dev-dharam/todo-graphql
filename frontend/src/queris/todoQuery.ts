import { gql } from "@apollo/client";

export const GET_TODOS = gql`
#graphql
    query GET_TODOS{
        todos{
            id
            title
            completed
            created_at
        }
    }
`


export const CREATE_TODO = gql`
#graphql
    mutation CREATE_TODO($title: String!){
        createTodo(title: $title){
            message
        }
    }
`