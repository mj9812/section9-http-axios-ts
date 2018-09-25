
export default class PostData
{
    public static newPostObj(nPost: PostData) : PostData
    {
        return new PostData(nPost.pid, nPost.title, nPost.content, nPost.author);
    }

    private _pid: number;
    private _title: string;
    private _content: string;
    private _author: string;

    constructor(pid: number, title: string, content: string, author: string)
    {
        this._pid = pid;
        this._title = title;
        this._content = content;
        this._author = author;
    }

    get pid(): number
    {
        return this._pid;
    }
    set pid(id: number)
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
