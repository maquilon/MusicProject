import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
    constructor(props) {
        super(props);
    }







    render() {




        return (
            <h1>test</h1>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    };
}

export default connect(mapStateToProps)(Home);