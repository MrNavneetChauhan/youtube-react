export const setToLocalStorage = (key,value)=>{
    if(key && value){
        return localStorage.setItem(key,value)
    }
    return null
}

export const getFromLocalStorage = (key)=>{
    if(key){
        return localStorage.getItem(key)
    }
    return null
}

export const removeItemFromLocalStorage = (key)=>{
    if(key){
        localStorage.removeItem(key)
    }
}