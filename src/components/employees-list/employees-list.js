import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.scss'

const EmployeesList = ({data, onDelete, onPropToggle}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
            key={id} {...itemProps}
            onDelete={() => onDelete(id)}
            onPropToggle={(e) => onPropToggle(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;