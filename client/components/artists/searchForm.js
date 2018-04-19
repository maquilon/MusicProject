import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtistActions from '../../actions/artistActions';

class SearchForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row col-lg-12" style={{ marginTop: 30 }}>
                <form className="form-inline my-4 my-lg-0" >
                    <input 
                        className="form-control mr-sm-3" 
                        style={{ width: 500, topMargin: 20 }} 
                        type="text" 
                        name="search"
                        placeholder="Search by Artist" 
                        onChange = {(e) => this.props.dispatch(ArtistActions.updateSearch('search', e.target.value))}
                        value={this.props.artist.get('search')}
                        />
                    <button
                        className="btn btn-secondary my-2 my-sm-0"
                        type="button"
                        onClick = {() => this.props.dispatch(ArtistActions.searchArtistAsync(this.props.artist.get('search')))}
                    >
                    Search
                    </button>
                </form>
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        artist: state.artist
    };
}

export default connect(mapStateToProps)(SearchForm);