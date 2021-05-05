export const filterStateReducer = (state={
   
}, action) => {
    switch(action.type) {
        case "FILTER":
            return {
                
                filterMenuOpen:true
            }
        case "NOFILTER":
            return {
                filterMenuOpen:false
            }
        
        default:
            return state  
    }
}