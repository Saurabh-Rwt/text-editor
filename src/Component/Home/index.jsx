import React, { useEffect, useState, useContext, createContext } from 'react';

// const myContext = createContext('');

const Index = () => {
    // const Index = (props) => {

    const [resourceType, setResourceType] = useState('posts');

    const [items, setItem] =  useState([]);


    // const {data, setData}=useContext(myContext);
   

    
    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error=> console.error(error))
    }, [resourceType])

    // props.getData("saurabh");

    return (
        <>
            <button onClick={()=> setResourceType('posts')}>Post</button>
            <button onClick={()=> setResourceType('users')}>User</button>
            <button onClick={()=> setResourceType('comments')}>Comments</button>

            <h1>{resourceType}</h1>
            {items.map((item, index) =>(
                <div className="post-card" key={index}>
                    {resourceType === 'posts' && <h2 className="title">{item.title}</h2>}
                    {resourceType === 'users' && <h2 className="title">{item.name}</h2>}
                    {resourceType === 'comments' && <h2 className="title">{item.email}</h2>}
                    <p>{item.body}</p>
                </div>
            ))}
        </>
    );
}

export default Index;