const Profile =  (props) =>{


    return(
        <div>
            <h1> Profile Page</h1>
            <h3><img className ="avatar" height="20%" width="20%" src= {props.user.data.user.profilepicture}alt="User Profile" /></h3>
            <h3>{props.user.data.user.firstName}</h3>
            <h3>{props.user.data.user.lastName}</h3>
            <h3>{props.user.data.user.email}</h3>

        </div>
    )

}

export default Profile;