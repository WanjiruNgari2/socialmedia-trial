import React from 'react'

export default function Notifications() {

const notifications = ["System updated", "followers voted!", "target reached!"]





  return (
    <div>
      <h2>Your Notifications</h2>
      {notifications.map((message,index) => (
        <p key={index}> {message} </p>
      ))}
    </div>
  );
}
