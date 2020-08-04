import React, { useEffect, useContext } from 'react';
import Post from './Post';
import CardColumns from 'react-bootstrap/CardColumns';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Store } from '../../store/store';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions';

const Posts = () => {

    const { state, dispatch } = useContext(Store)

    useEffect(() => {
        dispatch(actions.fetchPosts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <h1 className="text-center mb-5">Welcome Back!</h1>
            {state.isLoading ?
                <Spinner />
                :
                <CardColumns>
                    {state.posts.map(item => (
                        <Post
                            key={item.id}
                            id={item.id}
                            title={item.title} />
                    ))}
                </CardColumns>}
        </>
    )
}

export default withRouter(Posts);
