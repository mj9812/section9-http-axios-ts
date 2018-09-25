import * as React from 'react';
import Helper from '../../classes/Helper';
import PostData from '../../classes/MyObjects';
import FullPost from '../../components/FullPost';
import NewPost from '../../components/NewPost';
import PostList from '../../components/PostList';
import './Blog.css';

export default class Blog extends React.Component
{
    private dummyPosts: PostData[] = [];
    private nwPost: PostData = new PostData(0, '', '', '' );
    private selectedPost: PostData = new PostData(0, 
        'Please select a post!', 'Click on a post from above list.', 'n/a');

    public render()
    {
        this.nwPost.pid = this.dummyPosts.length + 1;
        return (
        <div>
            <section className='Posts'>
                <PostList posts={ this.dummyPosts } clicked={ this.postClicked } />
            </section>
            <section>
                <FullPost selectedPost={ this.selectedPost } />
            </section>
            <section>
                <NewPost np={this.nwPost} addPostList={ this.newPostAdded } />
            </section>
        </div> );
    }
    
    public componentDidMount()
    {
        this.assignDummyData();
    }

    public postClicked = (postId: number, callBack: () => void) =>
    {
        this.selectedPost.title = 'Loading...';
        this.selectedPost.content = 'Please Wait While Loading Content..';
        this.setState({});
        Helper.getPostDetails(postId, this.myReturnFunc, callBack);
    }

    public myReturnFunc = (retrievedPost: any) =>
    {
        if(Array.isArray(retrievedPost))  {
            this.dummyPosts = retrievedPost;
        } else {
            this.selectedPost = retrievedPost;
        }
        this.setState({});
    }

    public newPostAdded = (nP: PostData) =>
    {
        this.dummyPosts.push(nP);
        this.nwPost.title = '';
        this.nwPost.content = '';
        this.nwPost.author = '';
        this.setState({});
    }

    private assignDummyData()
    {
        Helper.getAllPostsFromServer(this.myReturnFunc);
    }
}
