import { observable, action } from 'mobx'

class AuthStore {
    @observable isLogin = 'xxx'
    @observable isLoading = 'xxx'
    @observable values = {
        username: '',
        password: ''
    }
}