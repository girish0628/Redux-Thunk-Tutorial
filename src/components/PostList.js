import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserList from './UserList';


class PostList extends Component {
  componentDidMount(){
    this.props.fetchPostsAndUsers();
    
  }
  renderList = ()=>{
    // console.log(this.props.posts);
    const {posts} = this.props;    
      return posts.map((post, index)=>{
         return <Card key={index} bg="secondary" text="white" style={{margin:'10px'}}>
            <Card.Header>{post.title}</Card.Header>
            <Card.Body>
            
              <Card.Text>
                 {post.body}
              </Card.Text>
              <Card.Title>
                <UserList userId={post.userId}/>
              </Card.Title>
            </Card.Body>
        </Card>         
      });
    
      
  }
  render() {
  
    return ( 
          <div>
            {this.renderList()}
          </div>
    )
  }
}
const mapStateToProps = state =>{
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);
