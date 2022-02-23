import React, { useState, useEffect } from 'react';
import Markdown, { compiler } from 'markdown-to-jsx';
import Card from '../comps/Card';
import { Cards } from '../style/comps';
import sample from '../photos/sample.jpeg';

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

const Home = () => {

    const reqOpt = {
        // method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({ id: 1 })
    }

    const { content, loading } = useFetch('http://localhost:3500/articles/all', reqOpt);


    console.log(content);

    return (<div>
        <Cards>
            {loading ? <div>...loading</div> : content.map((info) => {
                return (<Card title={info.card_title} photo={info.card_image_link} desc={info.card_desc} key={info.id}></Card>)
            })}
        </Cards>

        {/* {compiler(`
# This is Markdown 
#### You can edit me
* You can have lists, like this one
* Make things **bold** or *italic*
* Embed snippets of

# Hello
`)} */}
    </div>);
}

export default Home;