import prisma from "../../config/database.js"

const todoResolvers = {
    Query:{
        todos: async () => {
            return await prisma.todos.findMany({orderBy: {id: "desc"}});
        }
    },

    Mutation: {
        createTodo: async(_,{title}) => {
            const newtodo = await prisma.todos.create({
                data:{
                    title: title,
                    completed: false
                }
            });

            return {message: "Todo Successfuly Created!"};
        },
        deleteTodo: async(_,{id}) => {
            await prisma.todos.delete({
                where: {
                    id: id
                }
            });
            
            return {message: "Todo Successfuly Deleted!"};
        },
        toggleTodo: async(_,{id, completed}) => {
            await prisma.todos.update({
                where: {
                    id: id
                },
                data:{
                    completed: completed
                }
            });

            return {message: "Todo Updated!"};
        },
        titleupdateTodo: async(_,{id, title}) => {
            await prisma.todos.update({
                where: {
                    id: id
                },
                data: {
                    title: title
                }
            });
            return {message: "Title Updated!"};
        }
    }
}

export default todoResolvers;