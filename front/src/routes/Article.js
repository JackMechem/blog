import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleBody } from '../style/comps';
import Markdown, { compiler } from 'markdown-to-jsx';

const useFetch = (url, reqOpt) => {

    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const response = await fetch(url, reqOpt);
        const data = await response.json();
        setContent(data);
        setLoading(false);
    }, []);

    return { content, loading }
}

const Article = () => {

    let { id } = useParams();

    console.log(id);

    const reqOpt = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id })
    }

    const { content, loading } = useFetch('http://localhost:3500/articles/find', reqOpt);

    console.log(content);

    return (<div>{loading ? <div>loading...</div>  : <ArticleBody>{compiler(content[0].article_body_markdown)}</ArticleBody>} </div>);
}

export default Article;