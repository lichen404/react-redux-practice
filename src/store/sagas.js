import {takeEvery,put} from 'redux-saga/effects'
import axios from 'axios'

function* mySaga(){
    yield takeEvery('getMyList', getList)
}

function* getList(){
    const res = yield axios.get('http://rap2api.taobao.org/app/mock/data/1810019')
    const action = {
        type:'getList',
        data:res.data
    }
    yield put(action)
}
export  default mySaga;
