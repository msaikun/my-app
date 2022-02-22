import axios                                         from 'axios'
import { all, call, put, takeLatest }                from 'redux-saga/effects'
import { IUserState }                                from '../../app/shared/interfaces';
import { FETCH_USER }                                from '../actions/types';
import { loginFailure, loginSuccesfully, login }    from '../actions/userActions';

function* fetchUserSaga(action: ReturnType<typeof login>): any {
  try {
    const requestData = action.payload;
    const response: { data: IUserState } = yield call(axios.post, '/api/v1/login', requestData);
    yield put(
      loginSuccesfully(response.data)
    );
  } catch (event: any) {
    yield put(
      loginFailure(event.message)
    )
  }
}

export function* userSaga() {
  yield all([takeLatest(FETCH_USER, fetchUserSaga)])
}
