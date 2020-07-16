import HomePage from "./pages/home";
import ResumePage from "./pages/resume/ResumePage";
import PortfolioPage from "./pages/portfolio";

const routes = [
    {
        path: "/",
        component: HomePage,
        exact: true
    },
    {
        path: "/resume",
        component: ResumePage,
        exact: true
    }
    ,
    {
        path: "/portfolio",
        component: PortfolioPage,
        exact: true
    }
];

export default routes
