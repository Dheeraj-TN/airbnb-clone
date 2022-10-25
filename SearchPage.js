import React from 'react'
import './SearchPage.css';
import { Button } from '@mui/material';
import SearchResult from './SearchResult';
function SearchPage() {
  return (
    <div className='searchPage'>
          <div className='searchPage__info'>
              <p>60 stays · 20 october to 25 october · 2 guests</p>
              <h1>Stays Nearby</h1>
              <Button variant="outlined">
                  Cancellation Flexibility
              </Button>
              <Button variant="outlined">
                  Type Of Place
              </Button>
              <Button variant='outlined'>
                  Price
              </Button>
              <Button variant='outlined'>
                  Rooms and Beds
              </Button>
              <Button variant='outlined'>
                  More Filters
              </Button>
              <SearchResult
                  img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.GsE3OOuxP_ccSW-8cL08lgHaE8%26pid%3DApi&f=1&ipt=600656be8dbda953c1f0a31011bafe48299077644e15b6fc4e6824ab87df6bb6&ipo=images"
                  location="Private Room in center of London"
                  title="Stay at this spacious Edwardian
                  House"
                  description="1 guest · 1 bedroom · 1 bed ·
                  1.5 shared bathroom · wifi · kitchen · free parking
                  · washing machine"
                  star={4.73}
                  price="$100 / night"
                  total= "$117 total"
              />
              <SearchResult
                  img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IoZlGQroKJdyGEk3Z16XIwHaE8%26pid%3DApi&f=1&ipt=f6839b808a65bdb2bc64a26a7997a7a5bd8bdb6e1e28a6078e09bf3409bea2e1&ipo=images"
                  location="Private Room in center of London"
                  title="Independent luxury studio
                  apartment"
                  description="2 guest · 3 bedroom · 1 bed ·
                  1.5 shared bathroom · wifi · kitchen · free parking
                  · washing machine"
                  star={4.3}
                  price="$200 / night"
                  total= "$217 total"
              />
              <SearchResult
                  img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XqZbPJCy7oSKuDm2Rruf_wHaE8%26pid%3DApi&f=1&ipt=533c4abe1bd627a04b2468222d9fa19f86baf95a39aa672ad6971357a9ce6833&ipo=images"
                  location="Private Room in center of London"
                  title="The Blue Room in London"
                  description="2 guest · 1 bedroom · 1 bed ·
                  1.5 shared bathroom · wifi · kitchen · free parking
                  · washing machine"
                  star={4.5}
                  price="$190 / night"
                  total= "$207 total"
              />
              <SearchResult
                  img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.DzVJUzfAeQGF2cc0TNvwzgEsCo%26pid%3DApi&f=1&ipt=bc06bbf53198c8136a2931c9c3cf63c240443c5fe821977ef91d10bb397097e6&ipo=images"
                  location="Private Room in center of London"
                  title="5 Star Luxury Apartment"
                  description="3 guest · 1 bedroom · 1 bed ·
                  1.5 shared bathroom · wifi · kitchen · free parking
                  · washing machine"
                  star={4.7}
                  price="$300 / night"
                  total= "$307 total"
              />
      </div>
    </div>
  )
}

export default SearchPage;
