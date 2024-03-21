import React, { Component } from 'react'
import MessagersUI from '../widgets/messagers/MessagersUI'

export default class ChapterOne extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center ">
           Chapter One: The Beginning
        </h1>
        <MessagersUI/>
      </div>
    )
  }
}