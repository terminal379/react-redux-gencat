import React from 'react'

const Erto = ({
    comarca,
    afectats
}) => (
        <div class="flex-grid-item">
            <div class="top-side">
                <h2>{comarca}</h2>
            </div>
            <hr></hr>
            <div class="bottom-side">{afectats}</div>
    
        </div>
)

export default Erto;