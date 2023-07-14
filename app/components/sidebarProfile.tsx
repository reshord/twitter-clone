import Image from "next/image";

const SidebarProfile = () => {
    return ( 
        <div className="flex">
            <div className="mr-4">
                image
                <Image src={""} alt="" />
            </div>
            <div className="flex flex-col">
                <span>userName</span>
                <span>name</span>
            </div>
        </div>
     );
}
 
export default SidebarProfile;