import React from 'react'
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'
import css from './Orders.module.css'

const Orders = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.orderChart}>
                <span>Water Availability chart:</span>
                <OrdersPieChart/>
            </div>
        </div>
    )
}

export default Orders