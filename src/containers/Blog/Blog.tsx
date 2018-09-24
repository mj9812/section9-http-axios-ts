import * as React from 'react';
import * as MyObjs from '../../classes/MyObjects';
import FullPost from '../../components/FullPost';
import NewPost from '../../components/NewPost';
import PostList from '../../components/PostList';
import './Blog.css';

export default class Blog extends React.Component
{
    private dummyPosts: MyObjs.PostData[] = [];
    private selectedPost: MyObjs.PostData = new MyObjs.PostData(
        '0', 'Please select a post!', 'Click on a post from above list.', 'n/a');

    public render()
    {
        return (
        <div>
            <section className='Posts'>
                <PostList posts={ this.dummyPosts } clicked={ this.postClicked } />
            </section>
            <section>
                <FullPost selectedPost={ this.selectedPost } />
            </section>
            <section>
                <NewPost newPid={(this.dummyPosts.length+1)} handler={ this.newPostAdded } />
            </section>
        </div> );
    }
    
    public componentDidMount()
    {
        this.assignDummyData();
    }

    public postClicked = (postId: string) =>
    {
        this.selectedPost.title = 'Loading...';
        this.selectedPost.content = 'Please Wait While Loading Content..';
        this.setState({});
        MyObjs.PostData.getDataFromServer(postId, this.myReturnFunc);
    }

    public myReturnFunc = (retrievedPost: any) =>
    {
        if( Array.isArray(retrievedPost))  {
            this.dummyPosts = retrievedPost;
        } else {
            this.selectedPost = retrievedPost;
        }
        this.setState({});
    }

    public newPostAdded = (nPost: MyObjs.PostData) =>
    {
        this.dummyPosts.push(nPost);
        this.setState({});
    }

    private assignDummyData()
    {
        MyObjs.PostData.getDataFromServer('', this.myReturnFunc);
    }
}
