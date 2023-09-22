import Statistics from '../../components/Statistics/Statistics';
import css from './Dashboard.module.css';
import Orders from '../../components/Orders/Orders';
const Dashboard = () => {
  return <div className={css.container}>
    <div className={css.dashboard}>
      
      <div className={`${css.dashboardHead} theme-container`}>
        <div className={css.head}>
          <span>Dashboard</span>
        </div>
      </div>
      <Statistics/>
    </div>
    <Orders/>
  </div>
}
export default Dashboard