'use client'
import { useState } from "react";
import Header from "./header";
import ForMeContent from "./forMeContent";
import FollowinContent from "./followingContent";

const MainContent = () => {

  const [currentMethod, setCurrentMethod] = useState<number>(0)
  const [methods, setMethods] = useState<string[]>(['For you', 'Following'])

    return ( 
        <div>
            <Header
                onClickMethod={(index) => setCurrentMethod(index)} 
                currentMethod={currentMethod} 
                methods={methods} title="Home" 
            />
          <div className="h-screen">
            {currentMethod === 0 ? (
              <div>
                <ForMeContent />
              </div>
            ) : (
              <div>
                <FollowinContent />
              </div>
            )}
          </div>
        </div>
     );
}
 
export default MainContent;