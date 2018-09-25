import * as React from 'react';
import PostData from '../classes/MyObjects';
import Post from './Post';

interface IProps
{
    posts: PostData[];
    clicked: (pid: number, callBack: () => void) => void;
}

const postList: React.SFC<IProps> = (props) =>
{
    return (
        <React.Fragment> {
            props.posts.map((post: PostData) => { // Array of Post Component
                return <Post key={post.pid} clicked={props.clicked} post={post} />; })
        } </React.Fragment>
    );
}

export default postList;