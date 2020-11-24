import { observable, action, makeObservable } from 'mobx'
import { Auth } from '../modules'

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
        const { username, password } = this.values
        this.isLoading = true
        return new Promise((resolve, reject) => {
            Auth.login({ username, password }).then(res => {
                console.log('登陆成功')
                this.isLoading = true
                this.isLogin = true
                resolve(res)
            }).catch(err => {
                console.log('登陆失败')
                reject(err)
            })
        })

    }
    @action register() {
        const { username, password } = this.values
        this.isLoading = true
        return new Promise((resolve, reject) => {
            Auth.register({ username, password }).then(res => {
                console.log('注册成功')
                this.isLoading = true
                this.isLogin = true
                resolve(res)
            }).catch(err => {
                console.log('注册失败')
                reject(err)
            })
        })
    }
    @action logout() {
        return Auth.logout()
    }
}

export { AuthStore }