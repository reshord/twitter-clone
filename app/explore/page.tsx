import ExploreHeader from "../components/exploreHeader";
import TrendsForYou from "../components/trendsForYou";

const ExplorePage = () => {
    return ( 
        <div className="w-2/5">
            <ExploreHeader/>

            <div>
                <TrendsForYou />
            </div>
        </div>
     );
}
 
export default ExplorePage;