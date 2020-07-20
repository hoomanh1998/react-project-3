import React, { useState, useEffect } from 'react';
import Post from './Post';
import CardColumns from 'react-bootstrap/CardColumns';
import axios from 'axios';
import Aux from '../hoc/Auxiliray';
import Spinner from '../components/UI/Spinner/Spinner';


const Posts = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios('https://jsonplaceholder.typicode.com/posts');
                setData(result.data)
            } catch (error) {
                setIsError(true)
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <Aux>
            <h1 className="text-center mb-5">Welcome!</h1>
            {isError && <h4 className="text-center m-5" style={{ color: "red" }}>Something went wrong ...</h4>}
            {isLoading ?
                <Spinner />
                :
                <CardColumns>
                    {data.map(item => (
                        <Post
                            key={item.id}
                            id={item.id}
                            title={item.title} />
                    ))}
                </CardColumns>}

        </Aux>
    )
}

export default Posts;