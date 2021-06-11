import React, {useEffect, useState} from 'react'
import 'antd/dist/antd.css'
import store from './store'
import TodoListUI from './TodoListUI'



const TodoList = () => {
    const [, setState] = useState({})
    const storeChange = () => {
        setState({})
    }
   const state = store.getState()
    useEffect(() => {
        store.subscribe(storeChange)

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
