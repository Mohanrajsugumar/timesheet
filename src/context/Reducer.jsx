export default(state,action)=>{
    switch(action.type){
      case  'ADD_TIMESHEET':
        return{
            users:[action.payload,...state.users]
        }

        default:
            return state
    }
}