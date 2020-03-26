import React from "react";

class Searchbar extends React.Component {
  state = { term: "" };

  onInputchange = e => {
    this.setState({
      term: e.target.value
    });
  };
  onFormSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label className="text-center">Youtube Video Search</label>
            <input
              className=""
              type="text"
              placeholder="Search"
              value={this.state.term}
              onChange={this.onInputchange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
