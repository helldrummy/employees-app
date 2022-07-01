import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John Baby", salary: 300, forPromotion: false, isLiked: true, id: 1}, 
                {name: "Dave Grave", salary: 3000, forPromotion: true, isLiked: false, id: 2},
                {name: "John Dead", salary: 50900, forPromotion: false, isLiked: false, id: 3},
                {name: "Kirk Mads", salary: 1000, forPromotion: false, isLiked: false, id: 4},
            ],
            term: '',
            filter: 'all',
            maxId: 4
        }
       
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            isLiked: false,
            id: this.state.maxId + 1
        }
        
        this.setState(({data, maxId}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
                maxId: maxId + 1
            }
        });
    }

    onPropToggle = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }));
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onSearchUpdate = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'forPromotion':
                return items.filter(item => item.forPromotion);
            case 'salary': 
                return items.filter(item => item.salary > 1000);
            default: 
                return items;
        }
    }

    onFilterSlsect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const employeesForPromotion = this.state.data.filter(item => item.forPromotion).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees} employeesForPromotion={employeesForPromotion} />
    
                <div className="search-panel">
                    <SearchPanel onSearchUpdate={this.onSearchUpdate}/>
                    <AppFilter 
                    filter={filter}
                    onFilterSlsect={this.onFilterSlsect}/>
                </div>
    
                <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onPropToggle={this.onPropToggle}/>

                <EmployeesAddForm
                onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;