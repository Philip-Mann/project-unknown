import { Switch } from 'react-router-dom';
import Index from '../../routes/Index';
// import './main.css';

function Main({ userData }) {

    return(
        <div className="main-container">
            <Switch>
                <Index />
            </Switch>
        </div>
    )
}

export default Main;