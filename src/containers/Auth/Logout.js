import React, { useEffect, useContext } from 'react';
import { Store } from '../../store/store';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions';

const Logout = (props) => {

    const { dispatch } = useContext(Store)

    useEffect(() => {
        dispatch(actions.logout())
    })

    return (
        <Redirect to="/login" />
    )
}

export default Logout;