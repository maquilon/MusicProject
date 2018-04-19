import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notification from '../components/common/notificationSystem';
import Header from './common/Header';
import Footer from './common/Footer';
import Loader from 'react-loader';

class Main extends Component {

    render() {

        let loaderOptions = {
            lines: 13,
            length: 10,
            width: 5,
            radius: 20,
            scale: 1.00,
            corners: 1,
            color: '#fff',
            opacity: 0.25,
            rotate: 0,
            direction: 1,
            speed: 1,
            trail: 60,
            fps: 20,
            zIndex: 2e9,
            top: '50%',
            left: '50%',
            shadow: false,
            hwaccel: false,
            position: 'absolute'
        }

        return (
            <div>
                <Header />
                <div className="container">
                    <Loader loaded={this.props.artists.get('loaded')} options={loaderOptions} >
                        {React.cloneElement({...this.props}.children, {...this.props})}
                    </Loader>
                </div>
                <Footer />
                <Notification />                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        artists: state.artist
    };
}

Main = connect(mapStateToProps)(Main);
export default Main;