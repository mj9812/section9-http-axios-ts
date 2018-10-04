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
    private selectedIndex: number = 0;

    public render()
    {
        this.nwPost.pid = (this.dummyPosts.length >= 1 ? 
            this.dummyPosts[this.dummyPosts.length-1].pid + 1 : 1);
        return (
        <div>
            <section className='Posts'>
                <PostList posts={ this.dummyPosts } clicked={ this.postClicked } />
            </section>
            <section>
                <FullPost selectedPost={ this.selectedPost } handler={ this.deleteClicked } />
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

    public postListUpdated = (posts: PostData[]) =>
    {
        this.dummyPosts = posts;
        this.setState({});
    }

    public postClicked = (postId: number, indx: number, callBack: () => void) =>
    {
        this.selectedPost.title = 'Loading...';
        this.selectedPost.content = 'Please Wait While Loading Content..';
        this.setState({});
        this.selectedIndex = indx;
        Helper.getPostDetails(postId, this.postDetailsReceived, callBack);
    }

    public postDetailsReceived = (retrievedPost: any) =>
    {
        this.selectedPost = retrievedPost;
        this.setState({});
    }

    public deleteClicked = (event: any) =>
    {
        if(this.selectedIndex)
        {
            const comp = event.target;
            comp.style.cursor = 'wait';
            Helper.deletePost(this.selectedPost.pid, () => 
            {
                this.dummyPosts.splice(this.selectedIndex, 1);
                this.selectedPost = new PostData(0, 'Please select a post!',
                    'Click on a post from above list.', 'n/a');
                this.selectedIndex = 0;
                comp.style.cursor = 'pointer';
                this.setState({});
            });
        }
        else {
            alert('A post must be selected to delete you stupid...');
        }
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
        Helper.getAllPostsFromServer(this.postListUpdated);
    }
}
