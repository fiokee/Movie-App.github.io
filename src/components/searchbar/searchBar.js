import Styles from './search.module.css'

const SearchBar = () =>{
    return(
        <div className={Styles.search_container}>
            <h2>Search</h2>
            <form className={Styles.form} onSubmit={()=>{}}>
                <input type='text'></input>
            </form>
        </div>
    )
}
export default SearchBar;