import MainContent from "@/app/components/MainContent";
import NavigationSidebar from "@/app/components/NavigationSidebar";
import SearchSidebar from "@/app/components/SearchSidebar";

const HomePage = () => {
    return ( 
        <div className="w-4/5 h-screen m-auto">
           <div className="flex justify-between">
                <NavigationSidebar />
                <MainContent />
                <SearchSidebar />
           </div>
        </div>
     );
}
 
export default HomePage;