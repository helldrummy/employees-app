import './app-filter.scss' 

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All employees', isColored: false},
        {name: 'forPromotion', label: 'For promotion', isColored: false},
        {name: 'salary', label: 'Salary more than 1k$', isColored: true},
    ]

    const buttons = buttonsData.map(({name, label, isColored}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    const buttonStyle = isColored ? {color: 'pink'} : null;

        return (
            <button 
                className={`btn ${clazz}`}
                type='button'
                key={name}
                onClick={() => props.onFilterSlsect(name)}
                style={buttonStyle}>
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