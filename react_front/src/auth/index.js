export const isAuthenticated=()=>{
    if(typeof window == "undefined"){
      return false
    }
    if(localStorage.getItem('jwt')){
      return JSON.parse(localStorage.getItem('jwt'))
    }
    else{
      return false
    }
  }

  export const signup = user => {
    return fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const signout = next => {
  if (typeof window !== 'undefined') localStorage.removeItem('jwt');
  next();
  return fetch('http://localhost:5000/signout', {
      method: 'GET'
  })
      .then(response => {
          console.log('signout', response);
          return response.json();
      })
      .catch(err => console.log(err));
};

export const update=(userId,token,user)=>{
  return fetch(`http://localhost:5000/user/${userId}`,{
      method:"PUT",
      headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${token}`},
      body:JSON.stringify(user)
  })
  .then(response=>{
      return response.json()
  })
  .catch(err=>console.log(err))
}