 
 
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Pagination from './components/Pagination'
import UserList from './components/UserList'
import UserSearch from './components/UserSearch'
import SaveUserModal from './components/SaveUserModal'
 
import './styles.css'

const URL="https://hppfprgzvbaxnozyfcxu.supabase.co/rest/v1/users"
const APIKEY='sb_publishable_ypXg8cJQA6hVXmPQ8ZheyQ_Ka2TEnsb'
function App() {
  const [users,setUsers]=useState([])
 const [showSaveUserModal,setShowUserModal]=useState(false)
  useEffect(()=>{
    fetch('https://hppfprgzvbaxnozyfcxu.supabase.co/rest/v1/users',{
      headers:{
        'APIKEY':'sb_publishable_ypXg8cJQA6hVXmPQ8ZheyQ_Ka2TEnsb'
      }
    })
    .then(res=>res.json())
    .then(data=>setUsers(data))
    .catch(err=>console.error('Error fetching',err))
  },[])
  const addUserHandler=()=>{
    setShowUserModal(true)
  }
  const addUserCloseHandler=()=>{
    setShowUserModal(false)

  }
  const submitUserHandler=(user)=>{
     fetch(URL,{
      method:'post',
      headers:{
        'Content-Type':'application/json',
        'APIKEY':APIKEY
      },
      body:JSON.stringify(user)
     })
       
      .catch(err=>alert(err.message))
      .finally(()=>setShowUserModal(false))
  }  

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
      <button className="btn-add btn" onClick={addUserHandler}>Add new user</button>

      {showSaveUserModal&&<SaveUserModal onClose={addUserCloseHandler} onSubmit={submitUserHandler}/>}
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
