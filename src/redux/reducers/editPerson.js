export const editPerson=(state={} , action)=>{
    switch(action.type){
        case "GET_PERSON_EDIT":
            return action.payload
            default:
            return state
    }
}