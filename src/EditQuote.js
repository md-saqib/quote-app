import React from 'react'
import QuotesForm from './QuotesForm'

const EditQuote = (props) => {
    const {id, name, body, editItem, handleToggle} = props
    const formSubmission = (formData) => {
        editItem(formData)
    }
    return (
        <div>
            <h2>Edit Quote</h2>
            <QuotesForm 
                id={id}
                name={name}
                body={body}
                formSubmission={formSubmission}
                handleToggle={handleToggle}
            />
        </div>
    )
}

export default EditQuote