import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtistActions from '../../actions/artistActions';

class SearchForm extends Component {
    constructor(props) {
        super(props);
    }

    handleKeyDown(event) {
        if (event.keyCode === 13) {
            event.preventDefault(); 
            this.props.dispatch(ArtistActions.loading(false));
            this.props.dispatch(ArtistActions.searchArtistAsync(this.props.artist.get('search')));
        }
    }

    handleOnClick() {

    }

    render() {
        return (
            <div className="row col-lg-12" style={{ marginTop: 30, marginBottom: 30, marginLeft: 3 }}>
                <form className="form-inline my-4 my-lg-0" >
                    <input
                        className="form-control mr-sm-3"
                        style={{ width: 538, topMargin: 20 }}
                        type="text"
                        name="search"
                        placeholder="Search by Artist"
                        onChange={(e) => this.props.dispatch(ArtistActions.updateSearch('search', e.target.value))}
                        value={this.props.artist.get('search')}
                        onKeyDown={(e) => this.handleKeyDown(e)}
                    />
                    <button
                        className="btn btn-secondary ml-3 my-sm-0"
                        type="button"
                        onClick={() => this.props.dispatch(ArtistActions.searchArtistAsync(this.props.artist.get('search')))}
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