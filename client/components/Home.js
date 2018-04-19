import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './artists/searchForm';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (<div >

            <SearchForm />



        </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(Home);