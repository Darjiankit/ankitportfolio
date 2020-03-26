import React from "react";
import Searchbar from "./component/Searchbar";
import youtube from "./apis/youtube";
import Videolist from "./component/Videolist";
import Videodetails from "./component/Videodetails";

class App extends React.Component {
  state = {
    videos: [],
    selectedvideo: null
  };
  componentDidMount() {
    this.onTermsubmit("latest hindi songs");
  }
  onTermsubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedvideo: response.data.items[0]
    });
  };
  onVideoSelect = video => {
    this.setState({
      selectedvideo: video
    });
  };

  render() {
    return (
      <div className="ui container">
        <Searchbar onFormSubmit={this.onTermsubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <Videodetails video={this.state.selectedvideo} />
            </div>
            <div className="five wide column">
              <Videolist
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
