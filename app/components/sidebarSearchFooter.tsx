import Link from "next/link";

const SidebarSearchFooter = () => {

    const footerLinks = [
        {name: 'Terms of Service', url: 'https://twitter.com/ru/tos'},
        {name: 'Privacy Policy', url: 'https://twitter.com/ru/privacy'},
        {name: 'Cookie Policy', url: 'https://help.twitter.com/ru/rules-and-policies/twitter-cookies'},
        {name: 'Accessibility', url: 'https://help.twitter.com/ru/resources/accessibility'},
        {name: 'Ads info', url: 'https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo'},
    ]

    return ( 
        <div className="flex flex-wrap mt-5 mb-14">
            {footerLinks.map(link => (
                <Link className="hover:underline opacity-60 mr-2 text-sm" href={link.url}>{link.name}</Link>     
            ))}
        </div>
     );
}
 
export default SidebarSearchFooter;