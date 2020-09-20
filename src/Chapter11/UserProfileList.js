import React from 'react'
import UserProfile from './UserProfile'

class UserProfileList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [
                { id: 1, name: 'Jamal', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Software Engineer'},
                { id: 2, name: 'Robert Downey', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Actor'},
                { id: 3, name: 'Jeff Bezos', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'CEO, Amazon'},
                { id: 4, name: 'Jack Dorsey', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'CEO Twitter'},
                { id: 5, name: 'Katrina Kaif', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Actrees'},
                { id: 6, name: 'Deng Xiaoping', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'President'},
            ]
        }
    }

    render() {
        const { users } = this.state

        return (
            <div>
                {users.map((user) => {
                    return (
                        <UserProfile
                            user={user} />
                    )
                })}
            </div>
        )
    }
}

export default UserProfileList