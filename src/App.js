import Characters from "./component/Person/Characters";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import CharactersDetails from "./component/Person/CharactersDetails";
import Inventory from "./component/Inventory/Inventory";

function App() {
  return (
      <Router>
    <div >
      <div><Link to={'/characters'}>Person</Link></div>
      <div><Link to={'/inventory'}>Inventory</Link></div>
     <Switch>
<Route exact={true} path= {'/characters'} render={(props)=>{

  return <Characters{...props}/>
}}/>
         <Route exact={true} patch={'/characters/:id'} render={
             (props)=>{
                 let {match:{params:{id}}} = props;
                 return <CharactersDetails charactersID={id} />}
         }/>

         <Route path={'/inventory'} render={(props) => <Inventory {...props}/>}/>

     </Switch>

    </div>
      </Router>
  );
}

export default App;
