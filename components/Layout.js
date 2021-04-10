import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Jumbo from './Jumbo'
import Header from './Header';


export default props => {
  
  return (

  <div>
    
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      
  
  
     <Header/>
     <Jumbo />
      
  

      <div className="container">
      {props.children}
      </div>
      
    
      
     </div> 
      
      
  );
};
