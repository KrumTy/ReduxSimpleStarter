import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import youtubeSearch from 'youtube-api-v3-search';

import SearchBar from './components/common/SearchBar'
import VideoList from './components/layout/video/List'
import VideoDetail from './components/layout/video/Detail'

const API_KEY = 'AIzaSyBkpA7c78KeDuMFIjimjpzX6GcYlPb9Hjo';

// Create a new commponent. This component should produce HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('batman');
  }

  videoSearch(term) {
    youtubeSearch(API_KEY, {
      q: term,
      part: 'snippet',
      type: 'video'
    }).then(({ items }) => {
      this.setState({
        selectedVideo: items[0],
        videos: items
      });
      console.log(items);
    })
  }

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

    return <div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        videos={this.state.videos} />
    </div>;
  }
}

// take this component's generated html and put on the page
ReactDOM.render(<App />, document.getElementById('app'));
