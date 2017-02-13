import superagent from 'superagent'

export const GET_ARTICALLIST_SUCCESS = 'GET_ARTICALLIST_SUCCESS'
export const GET_ARTICALLIST_FAIL = 'GET_ARTICALLIST_FAIL'

export function fetchAticals (state) {
  return (dispatch) => {
    return superagent.get('/api/getArticalList/')
            .then(res => {
              let data = res.body
              dispatch({
                type: GET_ARTICALLIST_SUCCESS,
                data: data
              })
            })
            .catch(e => {
              console.log(e)
              dispatch({
                type: GET_ARTICALLIST_FAIL,
                data: []
              })
            })
  }
}
