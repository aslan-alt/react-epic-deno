import AV, { Query, User } from 'leancloud-storage'
import resolve from 'resolve';

AV.init({
    appId: "Jr7LBbNHLpBY60OvhovIFh0p-gzGzoHsz",
    appKey: "BcwFPCVuXi671OfOkY5AaC2m",
    serverURL: "https://jr7lbbnh.lc-cn-n1-shared.com"
});
console.log('start...')
let user = new User()

const Auth = {
    register(username, password) {
        user.setUsername(username)
        user.setPassword(password)

        return new Promise((resolve, reject) => {
            user.signUp().then(loginedUser => {
                resolve(loginedUser)
            }, error => {
                reject(error)
            })
        })
    },
    login(username, password) {
        return new Promise((resolve, reject) => {
            user.logIn({ username, password }).then(data => {
                resolve(data)
            }, error => {
                reject(error)
            })
        })
    },
    logout() {
        User.logOut()
    },
    getCurrentUser() {
        return User.current()
    }
}

export {
    Auth
}