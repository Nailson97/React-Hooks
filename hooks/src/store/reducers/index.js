 export default function reducer (state, action) {
    switch(action.type) {
     case 'add2ToNumber':
            return {...state, number: state.number  + 2} 
     case 'NumberMulti7':
            return {...state, number: state.number * 7} 
     case 'NumberDiv25':
            return {...state, number: state.number / 25}         
     case 'NumberInt':
            return {...state, number: parseInt(state.number)}    
     case 'NumberAddN':
             return {...state, number: state.number + action.payload}                                
     case 'login':
             return {...state, user: {name: action.payload}}    
     default:
            return state    
    }
}