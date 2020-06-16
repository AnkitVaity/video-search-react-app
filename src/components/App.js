import React from 'react';
import SearchBar from './SearchBar';
import youtube, { baseParams }  from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    // The componentDidMount method will do a initial search before we search for a video on the search bar
    componentDidMount() {
        this.onTermSubmit('netflix best shows');
    }

    // callback method that will be called anytime someone submits form
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                ...baseParams,
                // q in the youtube api documentation represents the query we want to search
                q: term
            }
        });
        
        // the list of videos are contained in response.data.items
        // console.log(response.data.items);
        // We will also set the selected video so that we get new video on display after search
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };
    
    // Defining a callback function which will help select video on click
    onVideoSelect = (video) => {
        // console.log('From the App', video);
        this.setState({ selectedVideo: video});
    };

    render() {
        return (
            <div className="ui container">
                {/* onFormSubmit is a prop that will be sent */}
                <SearchBar onFormSubmit={this.onTermSubmit} />
                    
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;