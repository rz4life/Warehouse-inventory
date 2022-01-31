import "./profile.css"
const Profile = (props) => {


    return (

        <div>
            <div class="profile">
                <div class="backgroundpicV">
                    <div class="profile-card">
                        <h1 class="profile-grey"> Profile Page</h1>
                        <img className="avatar" height="20%" width="20%" src={props.user.data.user.profilepicture} alt="User Profile" />
                        <h3 class="profile-grey">{props.user.data.user.firstName}</h3>
                        <h3>{props.user.data.user.lastName}</h3>
                        <h3>{props.user.data.user.email}</h3>
                    </div>
                </div>

            </div>


        </div>



    )

}

export default Profile;