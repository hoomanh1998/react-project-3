import React, { useState, useEffect } from 'react';
import Post from './Post';
import CardColumns from 'react-bootstrap/CardColumns';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Aux from '../hoc/Auxiliray';
import Spinner from '../components/UI/Spinner/Spinner';

const Posts = () => {

    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState(
        'https://hn.algolia.com/api/v1/search?query=news',
    );
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios(url);
                setData(result.data)
            } catch (error) {
                setIsError(true)
            }
            setIsLoading(false);
        };
        fetchData();
    }, [url]);

    return (
        <Aux>
            <h2 style={{ textAlign: "center" }}>News Articles</h2>
            <Form className="justify-content-center m-5" inline onSubmit={event => {
                event.preventDefault();
                setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
            }}>
                <FormControl
                    type="text"
                    value={query}
                    placeholder="Search for something..."
                    onChange={event => setQuery(event.target.value)}
                    className="mr-sm-2" />
                <Button
                    variant="outline-success"
                    type="submit">Search</Button>
            </Form>
            {isError && <h3 style={{ color: "red" }}>Something went wrong ...</h3>}
            {isLoading ?
                <Spinner />
                :
                <CardColumns>
                    {data.hits.map(item => (
                        <Post
                            key={item.objectID}
                            title={item.author}
                            text={item.title} />
                    ))}
                </CardColumns>}

        </Aux>
    )
}

export default Posts;