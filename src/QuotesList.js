import React from 'react'
import QuotesItem from './QuotesItem'

const QuotesList = (props) => {
    const {quotes, removeItem, editItem} = props
    return (
        <div>
            {
                quotes.length === 0 ? (
                    <div>
                        <h2 >No quotes found</h2>
                        <p>Add your first quote</p>
                    </div>
                ) : (
                    <div>
                        <h2>My Quotes - <b>{quotes.length}</b></h2>
                        {quotes.map((quote) => {
                            return <QuotesItem 
                                        key={quote.id} 
                                        {...quote} 
                                        removeItem={removeItem}
                                        editItem={editItem} 
                                    />
                        })}
                    </div>
                )
            }
        </div>
    )
}

export default QuotesList