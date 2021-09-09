import { Route } from "react-router-dom";
import Landing from './landing/Landing';

const Index = () => {

    return (
        <>
            <Route
                exact
                path="/"
                render={() => <Landing />}
            />
        </>
    )
}

export default Index;
