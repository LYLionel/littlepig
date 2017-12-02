const start = () => {
    return {
        type: 'country',
        payload: 'haha'
    }
}
const change = (res) => {
    return {
        type: 'country',
        payload: res
    }
}

export const setCountry = (dispatch,data) => {
    dispatch(start())
    setTimeout(() => {
        dispatch(change(data))
    },3000)
}