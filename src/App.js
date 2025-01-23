import React from 'react'
import Userprofile from './components/userprofile'
import Newsfeed from './components/newsfeed'
import Comment from './components/comments'
import Notifications from './components/notifications'
import "./App.css"

export default function App() {
  return (
    <div>
      <Userprofile />
      <Newsfeed />
      <Comment />
      <Notifications />
    </div>
  )
}
