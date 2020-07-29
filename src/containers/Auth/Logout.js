import React, { useEffect } from 'react';
import { connect } from '../../store/store';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {

    useEffect(() => {
        props.onLogout()
    })

    return (
        <Redirect to="/login" />
    )
}

const mapStateToProps = state => ({
    message: state
})

const mapDispatchToProps = dispatch => ({
    onLogout: () => dispatch({
        type: 'LOGOUT', payload: null
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout);