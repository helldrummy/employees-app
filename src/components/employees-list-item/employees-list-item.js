import './employees-list-item.css';

const EmployeesListItem = (props) => {
        const {name, salary, onDelete, onPropToggle, forPromotion, isLiked} = props;

        let classNames = 'list-group-item d-flex justify-content-between';
        if (forPromotion) {
            classNames += " increase"
        }
        if (isLiked) {
            classNames += " like"
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onPropToggle} data-toggle="isLiked">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onPropToggle} 
                        data-toggle="forPromotion">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
}

export default EmployeesListItem; 