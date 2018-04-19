import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './artists/searchForm';
import moment from 'moment';
import ReactAudioPlayer from 'react-audio-player';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        {/* 
            Main loop to display the 
            results of the search
        */}
        let results = (this.props.results || []).map((data, i) => {
            // Using Date JavaScript Functions
            let d = new Date(data.get('releaseDate'));
            let songName = data.get('trackName');

            return <div key={i} className="col-md-6 mt-10">
                <div className="bs-component">
                    <div className="card border-dark mb-3" style={{ maxWidth: '40rem' }}>
                        <div className="card-header">
                            <div className="row">
                                <div className="col-md-9 text"> <h3 className="card-title"> {data.get('artistName')} </h3></div>

                                <div className="col-md-3" style={{ textAlign: 'right' }}><span className="badge badge-primary" >{data.get('primaryGenreName')}</span></div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={data.get('artworkUrl100')} alt={data.get('collectionName')} />
                                </div>
                                <div className="col-md-9">
                                    <h5 className="card-text">Album: {data.get('collectionName')}</h5>
                                    <h6 className="card-text">Song: {songName}</h6>
                                    <h6 className="card-text">Year: {d.getFullYear()}</h6>
                                    <ReactAudioPlayer
                                        src={data.get('previewUrl')}
                                        autoPlay={false}
                                        controls
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        });

        return (          
            <div className="row" >
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