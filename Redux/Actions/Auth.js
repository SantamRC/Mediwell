function Auth(data) {
    return{
        type:"AUTH",
        payload: {
            access: data.access,
            refresh: data.refresh
        }
    }
}
