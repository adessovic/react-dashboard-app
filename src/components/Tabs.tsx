import { Outlet } from 'react-router-dom';
import TabNav from './TabNav';

const Tabs = () => {
    return(
        <div className='tabs'>
            <h1>Tabs Page</h1>
            {/* Tab navigation component */}
            <TabNav/>
            {/* Tab inner component */}
            <Outlet/>
        </div>
    )
}
export default Tabs;