import { useState } from 'react';
const Search = ({ search }) => {
    // 组件内数据
    // usesReducer后useState 少很多
    const [searchValue, setSearchValue] = useState('')
    const handleSearchInputChanges = e => {
        setSearchValue(e.target.value.trim())
    }
    const callSearchFunction = (e) => {
        e.preventDefault();
        search(searchValue);
        resetInputField();
    }
    const resetInputField = () => {
        setSearchValue('');
    }
    return (
        <form>
            <input type="text" value={searchValue}
                onChange={handleSearchInputChanges}
            />
            <input type="submit" value="Search" onClick={callSearchFunction} />
        </form>
    )
}
export default Search;