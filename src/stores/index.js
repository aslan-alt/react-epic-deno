import { createContext, useContext } from 'react'
import { AuthStore } from './auth'


let a = new AuthStore()
const context = createContext({
    AuthStore: a
})
console.log(a)
console.log('a')
export const useStores = () => useContext(context)