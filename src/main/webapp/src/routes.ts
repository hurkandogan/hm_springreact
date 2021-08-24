import Dashboard from "./components/content/Dashboard";
import Artwork from "./components/artwork/Artwork";
import Location from "./components/location/Location";
import Register from "./components/auth/Register";


const routeConfig = [
    {
        path: '/',
        Component: Dashboard
    },
    {
        path: '/artwork',
        Component: Artwork
    },
    {
        path: '/location/:locationId',
        Component: Dashboard
    },
    {
        path: '/versicherungen',
        Component: Dashboard
    },
    {
        path: '/versicherungen',
        Component: Dashboard
    }, 
    {
        path: '/register',
        Component: Register
    },
    {
        path: '/locations',
        Component: Location
    },
]

export default routeConfig;