export async function login(credentials){
  // stub: replace with real auth
  if (credentials.email) return {ok:true, user:{email:credentials.email}}
  return {ok:false}
}

export async function logout(){
  return Promise.resolve()
}
