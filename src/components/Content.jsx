import React, { useEffect, useState } from 'react'

const tabs = ['posts', 'comments', 'albums'];

const Content = () => {
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [show, setShow] = useState(false);

    useEffect(() => {{
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => setPosts(posts))
    }}, [type])

    //scroll
    useEffect(() => {
      const onHandleScroll = () => {
        console.log(window.scrollY);
        if(window.scrollY >= 200) {
          setShowScroll(true);
        } else {
          setShow(false);
        }
      }
      window.addEventListener('scroll', onHandleScroll);
    }, [])
  return (
    <div>
      <h1>useEffect hook</h1>
      {tabs.map((item, index) => {
        return <>
            <button 
              key={index}
              onClick={() => setType(item)}
              style={type === item ? {background: '#333', color: '#fff'} : {}}
            >
              {item}
            </button>
        </>
      })}

      <ul>
      {posts.map((post) => {
        return <>
            <li>{post.name || post.title}</li>
        </>
      })}

        {show &&
        <button
          style={{position: 'fixed', right:"20px", bottom: "20px"}}
        >
          go to top
        </button>}
      </ul>
    </div>
  )
}

export default Content
