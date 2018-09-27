import * as React from 'react';
import PostData from '../classes/MyObjects';
import './FullPost.css';

interface IProps
{
    selectedPost: PostData;
    handler: (event: any) => void;
}

const fullPost: React.SFC<IProps> = (props) => {
    return (
        <div className="FullPost" >
            <h2> {props.selectedPost.title} </h2>
            <p> {props.selectedPost.content} </p>
            <div className="Edit">
                <button className="Delete" onClick={props.handler} >Delete</button>
            </div>
        </div>
    );
}

export default fullPost;