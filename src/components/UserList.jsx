import { useState } from "react";
import UserDetails from "./UserDetails";
import UserListItem from "./UserListItem";
import UserDeleteModal from "./UserDeleteModal"
import Spinner from "./Spinner"
import SaveUserModal from "./SaveUserModal";

const URL="https://hppfprgzvbaxnozyfcxu.supabase.co/rest/v1/users"
const APIKEY='sb_publishable_ypXg8cJQA6hVXmPQ8ZheyQ_Ka2TEnsb'

export default function UserList({
  users,
  onUsersUpdate
}) {
  const [showUserDetails,setShowUserDetails]=useState(false)
  const [selectedUserId,setSelectedUserId]=useState(null)
  const [showUserDelete,setShowUserDelete]=useState(false)
  const [showUserEdit,setShowUserEdit]=useState(false)
 

  const showUserDetailsHandler=(userId)=>{
    setSelectedUserId(userId)
    setShowUserDetails(true)
  }
  const showUserDeleteHandler=(userId)=>{
    setSelectedUserId(userId)
    setShowUserDelete(true)
  }
  const hideUserModalHandler=()=>{
    setShowUserDetails(false)
    setShowUserDelete(false)
    setShowUserEdit(false)

    setSelectedUserId(null)
  }

  const deleteUserHandler=async ()=>{
    try{

      await fetch(`${URL}?id=eq.${selectedUserId}`,{
        method:'DELETE',
        headers:{
            'APIKEY':APIKEY
        }
      })
     onUsersUpdate()


    }catch(err){
      console.error('Failed to delete user:',err)
    }finally{
      hideUserModalHandler()
      
    } 
  }
  const showUserEditHandler=(userId)=>{
      setSelectedUserId(userId)
      setShowUserEdit(true)
  }
   return(
          <div className="table-wrapper">
          {users.length===0&&<Spinner/>}

        <table className="table">
          <thead>
            <tr>
              <th>
                Image
              </th>
              <th>
                First name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Email<svg className="icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                    role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Created
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          
            {/* <!-- Table row component --> */}
           { users.map(user =>
             (<UserListItem 
             key= {user.id} 
             {...user} 
             onInfo={showUserDetailsHandler}
             onDelete={showUserDeleteHandler}
             onEdit={showUserEditHandler}
            />
              ))}
          </tbody>
        </table>
        {showUserDetails&&<UserDetails userId={selectedUserId} onClose={hideUserModalHandler}/>}
        {showUserDelete&&<UserDeleteModal userId={selectedUserId} onClose={hideUserModalHandler} onDelete={deleteUserHandler}/>}
        {showUserEdit&&<SaveUserModal userEdit={showUserEdit} userId={selectedUserId} onClose={hideUserModalHandler}  />}
        
      </div>
   );
} 