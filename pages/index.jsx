import React,  { useState } from 'react';

import CoinList from '../components/CoinList';
import SearchBar from '../components/SearchBar';
import Layout from '../components/Layout';


export default function Home({filteredCoins}) {
  const [search, setSearch] = useState('');

  const allCoins = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = e => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };


  return (<>

    <Layout>
    
    <div className='coin_app'>     
      <SearchBar type='text' placeholder='Pesquisar' onChange={handleChange} />
      <div className='flex ml-[302px]'>
      <p className='mr-[90px]'>Preçod:</p>
      <p className='mr-[110px]'>Volume em 24 h:</p>
      <p className='mr-[120px]'>7h:</p>
      <p className='mr-[50px]'>Cap. de Mercado:</p>
      
      </div>
      <CoinList filteredCoins={allCoins} />
    </div>
    </Layout>

    
     </>  
  )
}

export const getServerSideProps = async () =>{
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false')

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins
    }
  };
};
