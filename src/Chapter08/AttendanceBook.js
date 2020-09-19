import React from 'react'

class AttendanceBook extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            students: [
                { name: 'Mike' },
                { name: 'Jane' },
                { name: 'Susan' },
                { name: 'Steve' },
                { name: 'Brad' },
                { name: 'Leo' },
                { name: 'John' },
                { name: 'Same' },
                { name: 'Kate' }
            ]
        }
    }

    render() {
        var { students } = this.state
        const studentList = students.map((student, index) => 
            <li key={index}>{student.name}</li>
        )

        return(
            <ul>
                {studentList}
            </ul>
        )
    }
}

export default AttendanceBook