import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'




export const GlobalFilter = ({ filter, setFilter }) => {

    const [value, setValue] = useState()
    const onChange = useAsyncDebounce(value => {
        setFilter(value)
    }, 1000)
    return (
        <span>
            Search:{' '}
            <input value={value || ''}
                onChange={e => {setValue(e.target.value)
                onChange(e.target.value)
                
                }} />
        </span>
    )
}


