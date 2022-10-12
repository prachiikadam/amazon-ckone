import React from 'react'
import Product from './Product'
import './Home.css'
function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image'
                    src='' alt='' />
                <div className='home__row'>
                    <Product productName={'A lean product info'}
                        price={11}
                        productRatings={3}
                        id={Math.random()}
                        image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg'} 
                        />
                    <Product productName={'Amazon echo'}
                        price={12}
                        productRatings={3}
                        id={Math.random()}
                        image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg'}  />
                </div>
                <div className='home__row'>
                    <Product productName={'A lean product info'}
                        price={15}
                        productRatings={3}
                        id={Math.random()} 
                        image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg'} />
                    <Product productName={'A lean product info'}
                        price={20}
                        productRatings={3}
                        id={Math.random()}
                        image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg'}  />
                    <Product productName={'A lean product info'}
                        price={20}
                        productRatings={3}
                        id={Math.random()} 
                        image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg'} />
                </div>
                <div className='home__row'>
                    <Product productName={'Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)'}
                        price={20}
                        productRatings={3}
                        id={Math.random()} 
                        image={'https://press.aboutamazon.com/static-files/8fea909c-ed22-4a37-9f6d-bb339b3c85a7'} />
                </div>
            </div>
        </div>
    )
}

export default Home