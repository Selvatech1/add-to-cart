import React from 'react';
import Itemcard from './Itemcard';
import data from './data';


const Home = () => {


    return (
        <>
        <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            
            <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
          </div>
        </div>
      </header>
        
            
           
            <section className="py-4 container">
                <div className="row justify-content-center">
                   {data.productData.map((item,index)=>{
return(
    <Itemcard 
    img={item.img} 
    title={item.title} 
    desc={item.desc} 
    price={item.price} 
    item={item} 
    key={index}
    star={item.star}
    avliable={item.avliable}
    />
)
                   })}
             </div>                      
            </section>
        </>
    );
};

export default Home;
