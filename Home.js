import React from 'react'
import './home.css';
import Banner from './Banner';
import Card from './Card';
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className='home__section'>
        <Card
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthephilbiznews.com%2Fwp-content%2Fuploads%2F2021%2F04%2FAirBNB.jpg&f=1&nofb=1&ipt=3a32c4463a98e88fba368dfaf0a7b61e3b4e58d546c11133100a4ce044fca7cf&ipo=images"
          title="Online Experience"
          description="Unique activity we can do together led by the world of hosts"
        />
        {/* <Card
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.LMajOUYxs6fUOcqJK1zpnAHaE8%26pid%3DApi&f=1&ipt=7992859cc32aba1c2b15a26f57ce7850c51cbecdc8d291ab6e8596419cf79356&ipo=images"
          title="Unique Stays"
          description="Places that are more than just a place
          to sleep"
        /> */}
        <Card
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.optionstheedge.com%2Fsites%2Fdefault%2Ffiles%2Ffield%2Ffeatured-image%2F2020%2Fairbnb_unique_home.jpg&f=1&nofb=1&ipt=c237fd6c246b075bd04fee940fbb12573cf77032015bfef6d199b77e29409e99&ipo=images"
        title = "Entire Homes"
        description="Comfortable private places with room for friends and family"
        
        />
      </div>
      <div className='home__section'>
        <Card
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.fOlc5frIrldNYO09OE-gXgHaE8%26pid%3DApi&f=1&ipt=a7f74abc69695752efb03e560a38a6a07907770738b8e23884faf1fc639772fe&ipo=images"
          title="Pnethouse in London"
          description="Enjoy the amazing sites of London
          with this stunning penthouse"
          price="$350/night"
        />
        <Card
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.rC7KukiUSUAME-mXBUd5awHaE8%26pid%3DApi&f=1&ipt=00a3179280984375b455a5c82e38f8ff2b28b6bab002ed5d1794a4f189aa66fb&ipo=images"
          title="3 Bedroom Flat in Bournmouth"
          description="Superhost with a stunnig view of
           becahside in sunny Bournmouth"
          price="$200/night"
        />
        <Card
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.4NTDpyDK-qKuQ6E7c7UVhwHaE8%26pid%3DApi&f=1&ipt=6e88a6a49df74c2f525a174202c3789c0765bf2d6afa1db63de2cb0a0e5791c1&ipo=images"
          title="1 Bedroom apartment"
          description="Superhost with a gorgeous 
          and fabulous shopping complex nearby"
          price="$150/night"
        
        
        />
      </div>
    </div>
  )
}

export default Home;
