import React from 'react'
import ReactDOM from 'react-dom/client'


class AppUser extends React.Component {
  state = {
    data: null,
    filter: ""
  };
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.results
        });
      });
  }
  render() {
    return (
      <div className="App">

        {this.state.data &&
          this.state.data
            .filter(user => user.email.includes(this.state.filter))
            .map(user => (
              <div
                key={user.email}
              >
                <div> {user.name.title}. {user.name.first} {user.name.last}</div>
              </div>
            ))}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <AppUser />
    </div>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppUser />
	</React.StrictMode>
)