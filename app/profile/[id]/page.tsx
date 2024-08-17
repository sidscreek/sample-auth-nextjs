import React from 'react'

const UserProfile = ({params} : any) => {
  return (
    <div>
      <h2>Profile</h2>
      <hr />
      <p>profile page {params.id}</p>
    </div>
  )
}

export default UserProfile
