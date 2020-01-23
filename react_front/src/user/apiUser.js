export const list=()=>{
    return fetch(`http://localhost:5000/users`,{
        method:"GET"
        // headers:{
        //     Accept:"application/json",
        //     // "Content-Type":"application/json",
        //     // Authorization:`Bearer ${token}`
        // }
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
}

export const remove=(userId,token)=>{
    return fetch(`http://localhost:5000/user/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        }
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err))
}

export const read = (userId, token) => {
    return fetch(`http://localhost:5000/user/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const update = (userId, token, user) => {
    console.log("USER DATA UPDATE: ", user);
    return fetch(`http://localhost:5000/user/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: user
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const updateUser = (user, next) => {
    if (typeof window !== "undefined") {
        if (localStorage.getItem("jwt")) {
            let auth = JSON.parse(localStorage.getItem("jwt"));
            auth.user = user;
            localStorage.setItem("jwt", JSON.stringify(auth));
            next();
        }
    }
};