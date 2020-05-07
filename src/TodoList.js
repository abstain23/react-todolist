import React, { Component } from 'react'
import {Input, Button, List, Card, Popconfirm, message} from 'antd'
import 'antd/dist/antd.css'
// import {v4 as uuid} from 'uuid'
import store from './store/index'
// import {INPUT_CHANGE, ADD_LIST, DEL_ITEM} from './store/actionTypes'
// import axios from 'axios'
import {inputChange, addList, delItem, testThunk, testSaga} from './store/actionCreators'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    store.subscribe(this.storeChange)
  }

  componentDidMount() {
    // const action = testThunk()
    // store.dispatch(action)
    const action = testSaga('payload')
    store.dispatch(action)
    
  }
  state = store.getState()
  
  storeChange = () => {
    this.setState(store.getState())
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    const action = inputChange(e.target.value)
    store.dispatch(action)
  }
  handleAdd = () => {
    if(!this.state.inputVal.trim()) {
      message.warning('请输入内容！')
      return
    }
    const action_add = addList(this.state.inputVal)
    // console.log(this.state.inputVal)
    store.dispatch(action_add)
    // const action_clear = {
    //   type:'INPUT_CLEAR'
    // }
    // store.dispatch(action_clear)
  }
  handleDel = (index) => {
    const action_del = delItem(index)
    store.dispatch(action_del)
  }

  confirm = (index) => {
    this.handleDel(index)
  }
  cancel = () => {
    console.log('取消')
  }
  render() {
    return (
      <div style={{margin:'20px'}}>
        <Card title='TodoList'>
        <Input 
        placeholder='Writing something' 
        value={this.state.inputVal}
        style={{width:'250px',marginRight:'20px'}}
        onInput={this.handleChange}
        />
        <Button type='primary' onClick={this.handleAdd}>增加</Button>
        <List
          style={{marginTop:'20px',width:'300px'}} 
          bordered 
          dataSource={this.state.list}
          renderItem={(item, index)=> (
          <List.Item className='item'>
            {item.content}
            <Popconfirm
              title="您确定要删除吗？"
              onConfirm={() => this.confirm(index)}
              onCancel={this.cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button 
              danger
              >删除</Button>
            </Popconfirm>
          </List.Item>
        )}/>
        </Card>
      </div>
    )
  }
}
