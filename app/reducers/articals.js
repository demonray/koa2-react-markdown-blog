import { GET_ARTICALLIST_SUCCESS, GET_ARTICALLIST_FAIL } from '../actions/articalActions'

const initState = {
    articals: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_ARTICALLIST_SUCCESS':
            let data = { articals: action.data.articals, loaded: true }
            return {...state, ...data }
        default:
            return state
    }
}
