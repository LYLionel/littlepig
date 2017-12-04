export const country = (dispath,data) =>{
   const action = {
        type: 'country',
        payload: data
    }
    dispath(action)
}
export const city = (dispath,data) => {
    console.log(data)
    const action = {
        type: 'city',
        payload: data
    }
    dispath(action)
}
// const start = () => {
//     return {
//         type: 'country',
//         payload: 'haha'
//     }
// }
// const change = (res) => {
//     return {
//         type: 'country',
//         payload: res
//     }
// }

// export const setCountry = (dispatch,data) => {
//     dispatch(start())
//     setTimeout(() => {
//         dispatch(change(data))
//     },3000)
// }