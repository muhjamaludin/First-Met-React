import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment'

const commentsFromServer = [
  { id: '1', name: 'Sri Asih', content: 'Bumi Langit' },
  { id: '2', name: 'Pukat', content: 'Kasih Ibu' },
  { id: '3', name: 'Jamaludin', content: 'Kebumen' },
]

var timer;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        comments: []
    }
  }

  componentDidMount() {
    console.log(`${this.props.id} componentDidMount() called.`)
    let comments = this.state.comments
    timer = setInterval(() => {
      if (comments.length < commentsFromServer.length) {
        let index = comments.length
        comments.push(commentsFromServer[index])
        this.setState({
          comments: comments
        })
      } else if (timer) {
        clearInterval(timer)
      }
    }, 2000)
  }
  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate() called.`)
  }
  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUnmount() called.`)
  }

  render() {
    return (
      <div className="App" style={{ padding: 16, backgroundColor: '#282c34' }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        {this.state.comments.map((comment, index) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              name={comment.name}
              content={comment.content}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
