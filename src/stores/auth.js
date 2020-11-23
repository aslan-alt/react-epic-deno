import { observable, action, makeObservable } from 'mobx'
import Module from '../modules'

class AuthStore {
    constructor() {
        makeObservable(this)
    }
    @observable isLogin = 'xxx'
    @observable isLoading = 'xxx'
    @observable values = {
        username: '',
        password: ''
    }
    @action setIsLogin(isLogin) {
        this.isLogin = isLogin
    }
    @action setUsername(username) {
        this.values.username = username
    }
    @action setPassword(password) {
        this.values.password = password
    }
    @action login() {
        console.log('登陆中...')
        this.isLoading = true
        setTimeout(() => {
            console.log('登陆成功')
            this.isLoading = true
            this.isLogin = true
        }, 1000)
    }
    @action register() {
        console.log('注册中...')
        this.isLoading = true
        setTimeout(() => {
            console.log('注册成功')
            this.isLoading = true
            this.isLogin = true
        }, 1000)
    }
    @action logout() {
        console.log('已注销')
    }
}

export { AuthStore }