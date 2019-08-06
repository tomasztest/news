import React, { Component } from "react";
import "./App.css";

const data = [
  { id: 1, title: "wiadomosc numer 1", body: "zawartosc widomosci nr 1" },
  { id: 2, title: "wiadomosc numer 2", body: "zawartosc widomosci nr 2" },
  { id: 3, title: "wiadomosc numer 3", body: "zawartosc widomosci nr 3" }
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `wiadomosc numer ${index}`,
    body: `zawartosc widomosci nr ${index}`
  });
  // console.log(data);
}, 5000);

class App extends Component {
  state = {
    comments: [...data]
  };

  getData = () => {
    if (this.state.comments.length !== data.length) {
      console.log("aktualizacja");
      this.setState({
        comments: [...data]
      });
    } else {
      console.log("dane takie same");
    }
  };

  componentDidMount() {
    this.idI = setInterval(this.getData, 1000);
  }

  componentWillMount() {
    clearInterval(this.idI);
  }

  render() {
    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ));
    // console.log(comments);
    return <div className="App">{comments.reverse()}</div>;
  }
}

export default App;
