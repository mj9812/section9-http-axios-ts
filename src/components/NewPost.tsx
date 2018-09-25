import * as React from 'react';
import Helper from '../classes/Helper';
import PostData from '../classes/MyObjects';
import './NewPost.css';

interface IProps
{
    np: PostData;
    addPostList: (nPost: PostData) => void;
}

export default class NewPost extends React.Component<IProps>
{
    private nwPost: PostData;

    public constructor(props: IProps)
    {
        super(props);
        this.nwPost = this.props.np;
    }

    public render()
    {
        return (
            <div className="NewPost" id="NewPostDiv">
            <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.nwPost.title} onChange={ this.setTitle } />
                <label>Content</label>
                <textarea rows={4} value={this.nwPost.content} onChange={ this.setContent } />
                <label>Author</label>
                <select value={this.nwPost.author} onChange={ this.setAuthor }>
                    <option value="" disabled={true} defaultValue="">Select an Author</option>
                    <option value="Sanooj">Sanooj PS</option>
                    <option value="Johnson">Johnson MA</option>
                    <option value="Cruise">Tom Cruise</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }

    private setTitle = (event: any) =>
    {
        this.nwPost.title = event.target.value;
        this.setState({});
    }
    private setContent = (event: any) =>
    {
        this.nwPost.content = event.target.value;
        this.setState({});
    }
    private setAuthor = (event: any) =>
    {
        this.nwPost.author = event.target.value;
        this.setState({});
    }

    private postDataHandler = (event: any) =>
    {
        if(this.nwPost.title && this.nwPost.content && this.nwPost.author)
        {
            const comp = event.target;
            this.setStyle(comp, 'cursor', 'wait');
            Helper.postToServer(PostData.newPostObj(this.nwPost),
            this.props.addPostList, this.setStyle.bind(this, comp, 'cursor', 'pointer'));
        }
        else {
            alert('Please fill values in the TextBox(s) to Add a Post.');
        }
    }

    private setStyle(comp: any, stKey: string, styl: string)
    {
        comp.style[stKey] = styl;
    }
}