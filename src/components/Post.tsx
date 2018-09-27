import * as React from 'react';
import PostData from '../classes/MyObjects';
import './Post.css';

interface IProps
{
    post: PostData;
    indx: number;
    clicked: (pid: number, indx: number, callBack: () => void) => void;
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
    private onClicke = (event: any) =>
    {
        const comp = event.target;
        this.setStyle(comp, 'cursor', 'wait');
        this.props.clicked(this.props.post.pid, this.props.indx,
            this.setStyle.bind(this, comp,  'cursor', 'pointer'));
    }
    private setStyle(comp: any, stKey: string, styl: string)
    {
        comp.style[stKey] = styl;
    }
}
