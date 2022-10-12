import React,{useContext} from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { Link } from 'react-router-dom'
import BasketContext from './BasketContext'
import { auth } from './FirebaseConfig'
function Header() {
    const basketCtx=useContext(BasketContext)
    const handleAuthentication=()=>{
        if(basketCtx.user){
            auth.signOut()
        }
    }
    return (
        <BasketContext.Consumer>
            {
                context => (
                    <div className='header'>
                        <Link to='/'>
                            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                                alt="amazon logo" />
                        </Link>
                        <div className='header__search'>
                            <input className='header__searchInput' type='text' />
                            <SearchIcon className='header__searchIcon' />
                        </div>
                        <div className='header__nav'>
                            <Link to={!basketCtx.user && '/login'}>
                            <div className='header__option' onClick={handleAuthentication}>
                                <span className='header__optionLineOne'>
                                    Hello,user
                                </span>
                                <span className='header__optionLineTwo'>
                                   {basketCtx.user?'Sign Out':'Sign In'}
                                </span>
                            </div>
                            </Link>
                            <div className='header__option'>
                                <span className='header__optionLineOne'>
                                    Returns
                                </span>
                                <span className='header__optionLineTwo'>
                                    Orders
                                </span>
                            </div>
                            <div className='header__option'>
                                <span className='header__optionLineOne'>
                                    Your
                                </span>
                                <span className='header__optionLineTwo'>
                                    Prime
                                </span>
                            </div>
                        </div>
                        <Link to='/checkout'>
                            <div className='header__shoppingBasketIcon'>
                                <ShoppingBasketIcon />
                                <div className='header__optionLineTwo header__optionBasketCount'>{context.items.length}</div>
                            </div>
                        </Link>
                    </div>
                )
            }
        </BasketContext.Consumer>

    )
}

export default Header