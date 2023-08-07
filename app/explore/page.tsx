import ExploreHeader from "../components/exploreHeader";
import TrendsForYou from "../components/trendsForYou";

const ExplorePage = async () => {


    return ( 
        <div className="w-2/4">
                <ExploreHeader/>

            <div>
                <TrendsForYou />
            </div>
        </div>
     );
}
 
export default ExplorePage;