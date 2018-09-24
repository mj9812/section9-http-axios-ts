import axios from 'axios';

export class PostData
{
    public static getDataFromServer(pid: string, fireBack: (post: any) => void)
    {
        const serverUrl = 'https://jsonplaceholder.typicode.com/posts';

        if (pid) {
            axios.get(serverUrl + '/' + pid).then((response: any) => {
                const tmp = response.data;
                fireBack(new PostData(tmp.id, tmp.title, tmp.body, 'Johnson'));
            }); // return a single post by ID from server
        }
        else {
            axios.get(serverUrl).then((response: any) => {
                const rPost = response.data.slice(0, 6).map((post: any) => {
                    return new PostData(post.id, post.title, post.body, 'Johnson'); });
                fireBack(rPost); // return array of posts from server
            });
        }
    }

    private _pid: string;
    private _title: string;
    private _content: string;
    private _author: string;

    constructor(pid: string, title: string, content: string, author: string)
    {
        this._pid = pid;
        this._title = title;
        this._content = content;
        this._author = author;
    }

    get pid(): string
    {
        return this._pid;
    }
    set pid(id: string)
    {
        this._pid = id;
    }

    get content(): string
    {
        return this._content;
    }
    set content(contnt: string)
    {
        this._content = contnt;
    }

    get author(): string
    {
        return this._author;
    }
    set author(authr: string)
    {
        this._author = authr;
    }

    get title(): string
    {
        return this._title;
    }
    set title(ttle: string)
    {
        this._title = ttle;
    }
}
