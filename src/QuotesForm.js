import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const QuotesForm = (props) => {
    const {formSubmission, id: slNo, name: author, body: quote, handleToggle} = props //alias name
    const [id, setId] = useState(slNo ? slNo : uuidv4())
    const [name, setName] = useState(author ? author : '')
    const [body, setBody] = useState(quote ? quote : '')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: id,
            name: name,
            body: body
        }
        formSubmission(formData)

        // reset form
        if(handleToggle) {
            handleToggle()
        }
        setName('')
        setBody('')
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeBody = (e) => {
        setBody(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="form-control-label">Name</label>
                <input  type="text" value={name} onChange={handleChangeName} className="form-control input-mask"/>
            </div>

            <div className="form-group">
                <label className="form-control-label">Quote</label>
                <textarea className="form-control" value={body} onChange={handleChangeBody} rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-success mb-3">
                <span className="btn-inner--text">Save</span>
            </button>
            </form>
        </div>
    )
}

export default QuotesForm