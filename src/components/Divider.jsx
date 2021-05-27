// Import dependencies
import React from 'react'

// Import CSS
import '../css/components/Divider.css'

export default function DividerComponent(data) {
    return <div className="divider">

        {/* Only add the top div, if the top argument is given */}
        {data.top ? <div className="divider-top" />:''}

        <div className="divider-middle" />

        {/* Only add the bottom div, if the bottom argument is given */}
        {data.bottom ? <div className="divider-bottom" />:''}
    </div>
}
