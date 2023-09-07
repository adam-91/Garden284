import { Routes, Route } from "react-router-dom";
import Calendar from "../features/Calendar";


const TopNavBar = () => {
    return (
        <Routes>
            <Route path='/calendar' element={<Calendar/>}> Calendar </Route>
        </Routes>

    );
};

export default TopNavBar;