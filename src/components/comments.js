import React from 'react'

export default function Comment() {

const comments = [
    "This is great content", "Great sermon!"
]




  return (
    <div>
      <h2>Comment Section:</h2>
      {comments.map((Comment, index) => (
        <p key={index}>{Comment}</p>
      ))}

    </div>
  );
}
