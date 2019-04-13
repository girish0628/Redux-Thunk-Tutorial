import jsonplaceholder from '../apis/jsonplaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState)=>{
   await dispatch(fetchPosts());
   
//    const userId = _.uniq(_.map(getState().posts, 'userId'));
//     userId.forEach(id=>dispatch(fetchUsers(id)));

    _.chain(getState().posts)
     .map('userId')
     .uniq()
     .forEach(id=>dispatch(fetchUsers(id)))
     .value();



}

export const fetchPosts = () => async dispatch=>{
        const response = await jsonplaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
}   

export const fetchUsers = userId => async dispatch =>{
    const response = await jsonplaceholder.get(`/users/${userId}`);
    dispatch({
        type: 'FETCH_USERS',
        payload: response.data
        });
}

// export const fetchUsers = (userId)=> dispatch=>{
//    _fetchUsers(userId, dispatch);
// } 

// const _fetchUsers = _.memoize(async (userId, dispatch)=>{
//     const response = await jsonplaceholder.get(`/users/${userId}`);
//     dispatch({
//         type: 'FETCH_USERS',
//         payload: response.data
//     });
// });