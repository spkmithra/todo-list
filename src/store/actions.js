import {DEF,GHI} from './actiontype'

export function def(task){
   return { type:'DEF',payload:task}
}

export function ghi(index){
    return {type:'GHI', payload:index}
}





