import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
}from "@heroicons/react/outline"

import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return(
  <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title='HOME' Icon={HomeIcon}/>
          <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
          <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
          <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
          <HeaderItem title='SEARCH' Icon={SearchIcon}/>
          <HeaderItem title='ACCOUNT' Icon={UserIcon}/>

      </div>

     <Image className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150"
       src="/universe.png" 
       width={200}
       height={125}
       />
       
</header>
  );
}

export default Header;
