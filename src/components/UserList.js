import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserList extends Component {
    // componentDidMount(){
    //     this.props.fetchUsers(this.props.userId)
    // }
  render() {
      // console.log(this.props.users);
      const {users} = this.props;
      if(!users){
        return null;
      }
    return (
      <div>
        {users.name}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) =>{
    return {
        users: state.users.find(user=> user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps)(UserList);
