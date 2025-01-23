import React from 'react'

export default function Newsfeed() {

const posts = [
    {id:1, content:"new follower!"}, 
    {id:2, content: "system updates "}
    ];


  return (
    <div>
      <h2>Newsfeed:</h2>
      {posts.map((posts) => (<p key={posts.id}>{posts.content}</p>))}
    </div>
  )
}
