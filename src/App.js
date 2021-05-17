import './App.css';
import {Component, React} from 'react';
import CardList from './exercise-1/components/card-list/CardList';
import Search from "./exercise-1/components/search/Search";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            monsters: [],
            searchField: "",
        };
    }

    componentDidMount() {
        console.log("mounted component");
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({monsters: users});
                console.log(users)
            });
        console.log("All exported");

    }
    render() {
        const {monsters, searchField} = this.state;
        const filtered = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className='App'>
                <h1>Monsters In Charge !</h1>
                <Search placeholder='search monster'
                        handleChange={ e => this.setState({searchField: e.target.value})}/>
                <CardList monsters={filtered}/>
            </div>
        )
    }

}

export default App;
