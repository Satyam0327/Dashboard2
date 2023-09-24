import css from './Statistics.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data'
import StatisticsChart from '../StatisticsChart/StatisticsChart'


const Statistics = () => {
    return (    <>
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Overview Statistics</span>
            <div className={`${css.cards} grey-container`}>
                <div>
                    <div className={css.arrowIcon}>
                        <BsArrowUpShort />
                    </div>  

                    <div className={css.card}>
                        <span>Water Depth </span><span>Water Depth Analysis</span>
                    </div>
                </div>

                <div className={css.card}>
                    <span>Water supply</span><span>{groupNumber(455)}</span>
                </div>

                <div className={css.card}>
                    <span>Present supply</span><span>{groupNumber(370000)}</span>
                </div>

                <div className={css.card}>
                    <span> Average Depth analysis</span><span> {groupNumber(2000)}</span>
                </div>
            </div>
            <StatisticsChart/>
        </div>
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Current results </span>
            <div className={`${css.cards} grey-container`}>
                <div className={css.card}>
                    <span >Digging can be done here : </span><span>Yes</span>
                </div>
                <div className={css.card}>
                    <span>Digging Method should be used here:</span><span>Rotary Drilling</span>
                </div>
                <div className={css.card}>
                    <span></span><span></span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Statistics