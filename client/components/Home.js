import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './artists/searchForm';

class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let results = (this.props.results || []).map((data, i) => {
            return <div key={i} className="col-md-6">
                <div className="bs-component">
                    <div className="card border-dark mb-3" style={{ maxWidth: '40rem' }}>
                        <div className="card-header">
                            <h3 className="card-title"> {data.get('artistName')}  </h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={data.get('artworkUrl100')} alt={data.get('collectionName')} />
                                </div>
                                <div className="col-md-8">
                                    <h5 className="card-text">{data.get('collectionName')}</h5>
                                    <h6 className="card-text">{data.get('releaseDate')}</h6>
                                    {/* <h6 className="card-text">{data.get('address').get('city')}, {data.get('address').get('state')} </h6> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        });


        return (
            <div className="row">

                <SearchForm />

                {results}
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        results: state.artist.get('results')
    };
}


export default connect(mapStateToProps)(Home);