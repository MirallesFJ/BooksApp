import axios from "axios";
import Card from "./Card";
import { useState } from "react";

export default function GoogleBooks(){
        const [search,setSearch]=useState("");
        const [bookData,setData]=useState([]);
        const searchBook=()=>{
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAFeoKJviwitXqRmNO7bAR4zNX49xB_CIU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            // .then(res=>console.log(res.data.items))

            .catch(err=>console.log(err))
        }
        return(

        <div className="bg-gray-50 p-6 rounded-lg shadow-lg mt-28"> 
            <h2 className="text-2xl font-bold text-gray-600 mb-4">Find Your Book</h2>
            <div className="flex items-center gap-2">
                <input
                type="text"
                placeholder="Enter Your Book Name"
                className="border border-gray-300 rounded-lg p-2 w-full text-black"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                
                <button
                onClick={searchBook}
                className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition-colors"
                >
                    Search
                </button>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg mt-10"> 
                <Card book={bookData}/>  
            </div>
        </div>

        )
    }