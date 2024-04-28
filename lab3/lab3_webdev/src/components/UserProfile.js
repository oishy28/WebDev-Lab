import React, { Component } from 'react';
import ReloadBtn from './RealoadBtn';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [
        { name: 'John Doe', email: 'john@example.com', gender: 'Male' }
      ],
      loading: true,
      reloadCounter: 0
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    setTimeout(() => {
      const randomUserData = [
        { name: 'Jane Smith', email: 'jane@example.com', gender: 'Female' },
        { name: 'Oishy', email: 'oishy@gmail.com', gender: 'Female' },
        { name: 'Mahadi', email: 'Mahadi@gmail.com', gender: 'Male' },
        { name: 'Ohi', email: 'Ohi@gmail.com', gender: 'Male' },
        { name: 'Lipy', email: 'Lipy@gmail.com', gender: 'Female' },
        { name: 'Shadman', email: 'Shadman@gmail.com', gender: 'Male' },
        { name: 'Mohona', email: 'Mohona@gmail.com', gender: 'Female' },
        { name: 'Maliha', email: 'maliha@gmail.com', gender: 'Female' },
        { name: 'Sami', email: 'Sami@gmail.com', gender: 'Male' },
        { name: 'Tohfa', email: 'tohfa@gmail.com', gender: 'female' },
      ];
      this.setState({ userData: randomUserData, loading: false });
    }, 2000); 
  };

  handleReload = () => {
    this.setState(prevState => ({
      reloadCounter: prevState.reloadCounter + 1,
      loading: true
    }), this.fetchData);
  };

  render() {
    const { userData, loading } = this.state;
    const randomIndex = Math.floor(Math.random() * userData.length);

    const userInfo = loading ? (
      <p>Loading user data...</p>
    ) : (
      <div>
        <h2>User Info</h2>
        <p>Name: {userData[randomIndex].name}</p>
        <p>Email: {userData[randomIndex].email}</p>
        <p>Gender: {userData[randomIndex].gender}</p>
      </div>
    );

    return (
      <div>
        {userInfo}
        {!loading && <ReloadBtn onClick={this.handleReload} />}
      </div>
    );
  }
}

export default UserProfile;
