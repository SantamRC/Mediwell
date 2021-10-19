function Auth(data) {
    return{
        type:"AUTH",
        access: data.access,
        refresh: data.refresh
    }
}
