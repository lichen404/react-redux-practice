import React, {useEffect} from 'react'
import 'antd/dist/antd.css'
import store from './store'
import TodoListUI from './TodoListUI'
import {connect} from 'react-redux'


const TodoList = (props) => {
    useEffect(() => {
        props.getMyList()
    }, [])
    return (
        <TodoListUI
            inputValue={props.inputValue}
            changeInputValue={props.changeInputValue}
            clickBtn={props.clickBtn}
            list={props.list}
            deleteItem={props.deleteItem}
        />
    )
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const dispatchToProps = (dispatch) => {
    const changeInputValue = (e) => {
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        dispatch(action)
    }
    const clickBtn = () => {
        store.dispatch({
            type: 'addItem',
        })
    }
    const deleteItem = (index) => {
        store.dispatch({
            type: 'deleteItem',
            value: index
        }) // 传递到store, reducer
    }
    const getMyList = () => {
        store.dispatch({
            type: 'getMyList'
        })
    }
    return {
        changeInputValue,
        clickBtn,
        deleteItem,
        getMyList
    }
}
export default connect(stateToProps, dispatchToProps)(TodoList)
