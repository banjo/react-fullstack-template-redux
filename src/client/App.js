import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { initUsers } from './reducers/usersReducer';

import './app.css';

const App = (props) => {
    console.log('Setup');

    return (<h1 id="startup">hello</h1>);
};

// Redux setup
const mapStateToProps = state => ({
    users: state.users
});

const mapDispatchToProps = dispatch => ({
    initUsers: () => dispatch(initUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
