import React from 'react'

const styles = {
    container: {
        width: 240,
        margin: 'auto',
        padding: 16,
        borderStyle: 'solid',
        borderColor: '#cdcdcd',
        borderWidth: 2,
        borderRadius: 16
    }
}

class ContactScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: {
                1: { id: 1, name: 'Jamaludin', phone: '62834-1234-9833', mail: 'jamaludin@jams.io' },
                2: { id: 2, name: 'Natasha', phone: '62834-1234-9327', mail: 'natasha@jams.io' },
                3: { id: 3, name: 'Putri', phone: '62834-3463-1923', mail: 'putri@jams.io' },
                4: { id: 4, name: 'Dewi', phone: '62834-2136-4362', mail: 'dewi@jams.io' },
                5: { id: 5, name: 'Kusumaningtyas', phone: '62834-8324-7843', mail: 'kusumatyas@jams.io' },
            }
        }
    }

    onBackButtonClicked = () => {
        window.location = "/"
    }

    render() {
        const { contacts } = this.state
        const { match: { params } } = this.props
        const contact = contacts[params.id]
        return (
            <div style={styles.container}>
                <h5>Name</h5>
                <span>{contact.name}</span>
                <br />
                <h5>Phone</h5>
                <span>{contact.phone}</span>
                <br />
                <h5>Email</h5>
                <span>{contact.mail}</span>
                <br />
                <button onClick={this.onBackButtonClicked}>
                    Back
                </button>
            </div>
        )
    }
}

export default ContactScreen