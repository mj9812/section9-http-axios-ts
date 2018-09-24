import * as React from 'react';
import * as MyObjs from '../classes/MyObjects';
import './Post.css';

interface IProps
{
    post: MyObjs.PostData;
    clicked: (pid: string) => void;
}

export default class Post extends React.Component<IProps>
{
    public render()
    {
        return (
            <article className='Post' onClick={this.onClicke} >
                <h1> {this.props.post.title} </h1>
                <div className="Author" > {this.props.post.author} </div>
            </article>
        );
    }
    private onClicke = () =>
    {
        this.props.clicked(this.props.post.pid);
    }
}
