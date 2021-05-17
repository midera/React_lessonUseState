import Characters from "./component/Person/Characters";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Inventory from "./component/Inventory/Inventory";
import CharactersDetails from "./component/Person/CharactersDetails";



function App() {
    return (
        <Router>
            <div className="App">

                <div><Link to={'/characters'}> Characters</Link></div>
                <div><Link to={'/inventory'}> Inventory</Link></div>

                <Switch>

                    <Route path={'/inventory'} render={(props) => <Inventory {...props}/>}/>
                    <Route exact path={'/characters'} render={(props) => <Characters {...props}/>}/>
                    <Route exact path={'/characters/:id'} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <CharactersDetails characterId={id}
                        />
                    }}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
