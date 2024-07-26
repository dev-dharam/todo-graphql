import { useMutation, useQuery } from "@apollo/client";
import { CREATE_TODO, GET_TODOS } from "./queris/todoQuery";
import React, { useState } from "react";


function App() {

  const [title, setTitle] = useState<string>('');

  const {data, loading, error} = useQuery(GET_TODOS);
  const [createTodo, {data: nData, loading: nLoading, error: nError}] = useMutation(CREATE_TODO, {
    onError: (error) => {
      console.log("Error creating todo:-", error)
    },
    onCompleted: (data) => {
      console.log("Todo created", data)
    }
  })
  console.log(data);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(title.trim() === ""){
      alert("Title Cannot be Empty")
      return;
    }
    createTodo({variables: {title: title}});
    if(nError) console.log(nError);
    // setTitle("");
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='md:w-[600px] w-full px-3 mx-auto bg-blue-100 p-5'>
        <form action="" onSubmit={handleSubmit}>
          <div className='flex justify-between w-full'>
            <input type="text" placeholder='Please Enter Your Task!' value={title} onChange={(e) => setTitle(e.target.value)} className='w-[90%] px-4' />
            <button className='bg-blue-500 px-4 py-2 text-white' type='submit'>Add</button>
          </div>
        </form>
        <div className='mt-4'>
          <ul className='flex flex-col gap-5'>
            <li className='flex justify-start w-full items-center gap-3'>
              <div className='w-[90%] flex gap-4 items-center'>
                <input type="checkbox" className='w-4 h-4' />
                <label className={`w-[90%] text-lg font-bold`} htmlFor={`myInput`}>This Is Title</label>
              </div>
              <button className='bg-blue-500 px-4 py-2 flex justify-end'>&#9876;</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
