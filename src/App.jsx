 
 
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Pagination from './components/Pagination'
import UserList from './components/UserList'
import UserSearch from './components/UserSearch'
 
import './styles.css'

function App() {
  const [users,setUsers]=useState([])
console.log(users)
  useEffect(()=>{
    fetch('https://hppfprgzvbaxnozyfcxu.supabase.co/rest/v1/users',{
      headers:{
        'APIKEY':'sb_publishable_ypXg8cJQA6hVXmPQ8ZheyQ_Ka2TEnsb'
      }
    })
    .then(res=>res.json())
    .then(data=>setUsers(data))
    .catch(err=>console.error('Error fatching',err))
  },[])
    

  return (
    <>
  {/* <!-- Header component --> */}
    <Header/>

  {/* <!-- Main component  --> */}
  <main className="main">
    <section className="card users-container">
      <UserSearch/>

      {/* <!-- Table component --> */}
     <UserList users={users}/>

      {/* <!-- New user button  --> */}
      <button className="btn-add btn">Add new user</button>

      {/* <!-- Pagination component  --> */}
      <Pagination/>
    </section>

    {/* <!-- User details component  --> */}
     


    {/* <!-- Create/Edit Form component  --> */}
    


    {/* <!-- Delete user component  --> */}
     

  </main>
  {/* <!-- Footer component  --> */}
      <Footer/>
    </>
  )
}

export default App
