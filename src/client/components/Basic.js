import React from 'react';
import { connect } from 'react-redux';

const Basic = (props) => {
    console.log('Basic component');
    return (<div>Hello from basic</div>);
};

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps)(Basic);
