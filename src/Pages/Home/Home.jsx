import EstatesCard from "../EstatesCard/EstatesCard";
import Banner from "./Banner/Banner";
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const estates = useLoaderData();
    console.log(estates);
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-8 my-12">
                {
                    estates.map(estate => <EstatesCard key={estate.id} estates={estate}></EstatesCard>)
                }
            </div>
        </div>
    );
};


Home.propTypes = {

};


export default Home;
