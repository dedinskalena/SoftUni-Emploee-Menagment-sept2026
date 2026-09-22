 
 
import Footer from './components/Footer'
import Header from './components/Header'
import Pagination from './components/Pagination'
import UserList from './components/UserList'
import UserSearch from './components/UserSearch'
 
import './styles.css'

function App() {
  

  return (
    <>
  {/* <!-- Header component --> */}
    <Header/>

  {/* <!-- Main component  --> */}
  <main className="main">
    <section className="card users-container">
      <UserSearch/>

      {/* <!-- Table component --> */}
     <UserList/>

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
