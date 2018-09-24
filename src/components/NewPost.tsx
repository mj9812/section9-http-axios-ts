import axios from 'axios';
import * as React from 'react';
import * as MyObjs from '../classes/MyObjects';
import './NewPost.css';

interface IProps
{
    newPid: number;
    handler: (nPost: MyObjs.PostData) => void;
}

export default class NewPost extends React.Component<IProps>
{
    private nwPost: MyObjs.PostData;

    public constructor(props: IProps)
    {
        super(props);
        this.nwPost = new MyObjs.PostData(this.props.newPid+'', '', '', '');
    }

    public render()
    {
        if(this.nwPost.pid !== (this.props.newPid+'')) {
            this.nwPost.pid = this.props.newPid+'';
        }
        return (
            <div className="NewPost">
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

    private postDataHandler = () =>
    {
        if(this.nwPost.title && this.nwPost.content && this.nwPost.author)
        {
            const addedPost = new MyObjs.PostData(this.nwPost.pid, 
                this.nwPost.title, this.nwPost.content, this.nwPost.author);
            axios.post('https://jsonplaceholder.typicode.com/posts', addedPost)
            .then(response => {
                if(response.status === 201)
                {
                    this.props.handler(addedPost);
                    this.nwPost.title = '';
                    this.nwPost.content = '';
                    this.nwPost.author = '';
                    this.setState({});
                }
            });
        }
        else {
            alert('Please fill values in the TextBox(s) to Add a Post.');
        }
    }
}