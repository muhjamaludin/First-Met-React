import React from 'react'
import ContactList from './../Component/ContactList'

const styles = {
    titleText: {
        textAlign: 'center'
    },
    addButton: {
        position: 'absolute',
        right: 16,
        top: 16
    }
}

class MainScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: [
                { id: 1, name: 'Jamaludin', phone: '62834-1234-9833', mail: 'jamaludin@jams.io' },
                { id: 2, name: 'Natasha', phone: '62834-1234-9327', mail: 'natasha@jams.io' },
                { id: 3, name: 'Putri', phone: '62834-3463-1923', mail: 'putri@jams.io' },
                { id: 4, name: 'Dewi', phone: '62834-2136-4362', mail: 'dewi@jams.io' },
                { id: 5, name: 'Kusumaningtyas', phone: '62834-8324-7843', mail: 'kusumatyas@jams.io' },
            ]
        }
    }

    onContactClicked = (contact) => {
        window.location = `/contact/${contact.id}`
    }

    onAddButtonClicked = () => {
        window.location = '/add'
    }

    render() {
        const { contacts } = this.state

        return (
            <div>
                <h1 style={styles.titleText}>Contacts</h1>

                <button 
                    style={styles.addButton}
                    onClick={this.onAddButtonClicked}
                >
                    Add New
                </button>
                <ContactList
                    contacts={contacts}
                    onClick={this.onContactClicked} />
            </div>
        )
    }
}

export default MainScreen