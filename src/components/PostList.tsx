import * as React from 'react';
import * as MyObjs from '../classes/MyObjects';
import Post from './Post';

interface IProps
{
    posts: MyObjs.PostData[];
    clicked: (pid: string) => void;
}

const postList: React.SFC<IProps> = (props) =>
{
    return (
        <React.Fragment> {
            props.posts.map((post: MyObjs.PostData) => { // Array of Post Stateless Component
                return <Post key={post.pid} clicked={props.clicked} post={post} />; })
        } </React.Fragment>
    );
}

export default postList;