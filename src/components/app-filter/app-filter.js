import './app-filter.css' 

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'forPromotion', label: 'For promotion'},
        {name: 'salary', label: 'Salary more than 1k$'},
    ]

    const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button 
                className={`btn ${clazz}`}
                type='button'
                key={name}
                onClick={() => props.onFilterSlsect(name)}>
                {label}
            </button>
        )
    })
    
    
    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
    
}

export default AppFilter;