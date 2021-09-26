import React, {useState} from 'react'
import EditQuote from './EditQuote'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-bootstrap/Modal'

const QuotesItem = (props) => {
    const {id, name, body, removeItem, editItem} = props
    const [toggle, setToggle] = useState(false)

    const handleRemove = () => {
        const confirmRemove = window.confirm("Are you sure?")
        if(confirmRemove){
            removeItem(id)
        }
    }

    const handleToggle = (e) => {
        const result = !toggle
        setToggle(result)
    }

    return (
        <div>
            {toggle ? (
                <div className="card-body card hover-shadow-lg">
                    <div className="col-md-10">
                        <EditQuote 
                            id={id}
                            name={name}
                            body={body}
                            editItem={editItem}
                            handleToggle={handleToggle}
                        />
                        <button type="button" className="btn btn-primary" onClick={handleToggle}>
                            <span className="btn-inner--text">Cancel</span>
                        </button>
                    </div>                    
                </div>
            ) : (
                <div>

                <div className="card-body card hover-shadow-lg">
                      <blockquote className="blockquote">
                        <span className="quote"></span>
                        <div className="quote-text">
                          <p className="font-italic lh-170">{body} </p>
                          <footer className="blockquote-footer">
                            <cite>{name}</cite>
                          </footer>
                        </div>
                      </blockquote>
                      <div className="row"> 
                          <button type="button" className="btn btn-primary" onClick={handleToggle}>
                                <span className="btn-inner--text">Edit quote</span>
                          </button>
                          <button type="button" className="btn btn-danger" onClick={handleRemove}>
                            <span className="btn-inner--text">Delete quote</span>
                      </button>
                      </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default QuotesItem