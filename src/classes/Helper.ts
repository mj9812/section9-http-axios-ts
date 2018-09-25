import axios from 'axios';
import PostData from './MyObjects';

export default class Helper
{
    public static serverUrl = 'https://jsonplaceholder.typicode.com/posts';

    public static getAllPostsFromServer(fireBack: (post: any) => void)
    {
        axios.get(this.serverUrl).then((response: any) => 
            {
                const rPost = response.data.slice(0, 6).map((post: any) => {
                    return new PostData(post.id, post.title, post.body, 'Johnson'); });
                fireBack(rPost); // return array of posts from server
            });
    }
    
    public static getPostDetails(pid: number, call1: (p: any) => void, call2: () => void)
    {
        axios.get(this.serverUrl + '/' + pid).then((response: any) => 
            {
                const tmp = response.data;
                call2();
                call1(new PostData(tmp.id, tmp.title, tmp.body, 'Johnson'));
            }); // return a single post by ID from server
    }

    public static postToServer(nPost: PostData, add: (nP: PostData) => void, callBack: () => void)
    {
        axios.post(this.serverUrl, nPost).then((response: any) => 
        {
            if(response.status === 201) { add(nPost); }
            callBack();
        }); // create a new post in the server
    }
}