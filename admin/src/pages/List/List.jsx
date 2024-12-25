import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  
  const url = 'https://bookish-space-capybara-7v9wjv455w5whrrp7-4001.app.github.dev';
  const [list,setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if(response.data.success){
      setList(response.data.data);
    }else{
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList
  },[])

  return (
    <div>
      
    </div>
  )
}

export default List