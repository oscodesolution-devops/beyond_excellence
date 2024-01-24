import React from 'react'

const Dashboard = () => {
      const logout = () => {
        localStorage.removeItem("token");
        window.open(`http://localhost:4000/logout`,"_self")
  } 
  return (
    <div onClick={logout}>Dashboard</div>
  )
}

export default Dashboard