import './app-info.css'

const AppInfo = ({employees, employeesForPromotion}) => {
    return (
        <div className="app-info">
            <h1>Employee accounting</h1>
            <h2>Total employees: {employees}</h2>
            <h2>Monthly bonus will be recieved by: {employeesForPromotion}</h2>
        </div>
    );
}

export default AppInfo;