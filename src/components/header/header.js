import Styles from './header.module.css';
import Hero from '../../assets/Hero.png'
import { Fragment } from 'react';
import SearchBar from '../searchbar/searchBar';
const Header = ()=>{
    return(
        <Fragment>

        <div className={Styles.container}>
            <p className={Styles.logo}>MyTestApp</p>
            <div className={Styles.hero}>
                <img src={Hero} alt=""></img>
            </div>
        </div>
        </Fragment>
    )
}
export default Header;