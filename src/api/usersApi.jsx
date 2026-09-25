const URL="https://hppfprgzvbaxnozyfcxu.supabase.co/rest/v1/users"
const APIKEY='sb_publishable_ypXg8cJQA6hVXmPQ8ZheyQ_Ka2TEnsb'


export async function fetchUsers (){
    const res=await fetch(URL,{
      headers:{
        'APIKEY': APIKEY
      }
    })
    const data=await res.json()
    return data
  }