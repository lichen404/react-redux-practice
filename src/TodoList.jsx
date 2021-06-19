import React, {useEffect, useState} from 'react'
import 'antd/dist/antd.css'
import store from './store'
import TodoListUI from './TodoListUI'
import axios from 'axios';

const getTodoList = ()=>{
    return (dispatch)=> {
        axios.get('http://rap2api.taobao.org/app/mock/data/1810019').then((response) => {
            console.log(response)
            const data = response.data
            dispatch({
                type: 'getList',
                data
            })
        })
    }
}




const TodoList = () => {
    const [, setState] = useState({})
    const storeChange = () => {
        setState({})
    }
    const state = store.getState()
    useEffect(() => {
        store.subscribe(storeChange)
        const action = getTodoList()
        store.dispatch(action)


    }, [])
    const changeInputValue = (e) => {
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        store.dispatch(action)
    }
    const clickBtn = () => {
        store.dispatch({
            type: 'addItem',
            value: state.inputValue
        })
    }
    const deleteItem = (index) => {
        store.dispatch({
            type: 'deleteItem',
            value: index
        }) // 传递到store, reducer
    }
    return (
        <TodoListUI
            inputValue={state.inputValue}
            changeInputValue={changeInputValue}
            clickBtn={clickBtn}
            list={state.list}
            deleteItem={deleteItem}
        />

    )
}

export default TodoList
