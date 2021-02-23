import React, { Component } from 'react';
import contactsJson from "../contacts.json";
import ContactDetails from "./ContactDetails"

class Actors extends Component {
    state = {
        contacts: contactsJson.slice(0,5)
    }

    handleAdd = () => {
        let randomIndex = Math.floor(Math.random() * contactsJson.length)
        let randomContact = contactsJson[randomIndex]

        this.setState({
            contacts: [...this.state.contacts, randomContact]
        })
    }

    handleSortByName = () => {
        let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))
        clonedContacts.sort((first, second) => {
            if(first.name > second.name){
                return 1
            }
            else if(first.name < second.name){
                return -1
            }
            else {
                return 0
            }
            
        })
        this.setState({
            contacts: clonedContacts
        })
    }

    handleSortByPopularity = () => {
        let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))
        clonedContacts.sort((first, second) => {
            if(first.popularity < second.popularity){
                return 1
            }
            else if(first.name > second.name){
                return -1
            }
            else {
                return 0
            }
            
        })
        this.setState({
            contacts: clonedContacts
        })
    }

    handleDelete = (contactId) => {
        let filteredContacts = this.state.contacts.filter((singleContact) => {
            return singleContact.id !== contactId
        })

        this.setState({
            contacts: filteredContacts
        })
    }

    render() {
        return (
            <div>
            <h1>IronContacts</h1>
            <button onClick={this.handleAdd}>Add Random Contact</button>
            <button onClick={this.handleSortByName}>Sort by name</button>
            <button onClick={this.handleSortByPopularity}>Sort by popularity</button>

            {
                this.state.contacts.map((singleContact, index) => {
                    return <ContactDetails
                key={index}
                name={singleContact.name}
                image={singleContact.pictureUrl}
                popularity={singleContact.popularity}
                id={singleContact.id}
                onDelete={this.handleDelete}
                />
                })
            }
                
            </div>
        )
    }
}

export default Actors