import { combineReducers } from 'redux'
import { productLikeReducer } from './productLikeReducer'
import { filterStateReducer } from './filterStateReducer'

export const rootReducer = combineReducers({
    productsLike:productLikeReducer,
    filterState:filterStateReducer
})
