import React, { Component } from "react";
import SearchParams from "./SearchParams";

export class PostRequest extends Component {
  
    state = {
      postId: null,
    };
  

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(SearchParams()),
    };
    fetch(
      "https://www.pathofexile.com/api/trade/search/Delirium",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
  }

  render() {
    const { postId } = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">POE REST API TEST</h5>
        <div className="card-body">Returned Id: {postId}</div>
      </div>
    );
  }
}

export default PostRequest;
