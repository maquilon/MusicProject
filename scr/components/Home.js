import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeActions from '../actions/employeeActions';


class Home extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
       
    }




    render() {

        }

}

function mapStateToProps(state) {
    return {
        
    };
}

export default connect(mapStateToProps)(Home);