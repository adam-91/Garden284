import { Routes, Route } from "react-router-dom";
import Calendar from "../features/Calendar";


const TopNavBar = () => {
    return (
        <div>
            <Routes>
                <Route path='/calendar' element={<Calendar/>}> Calendar </Route>
            </Routes>
        </div>

    );
};

export default TopNavBar;