import React from 'react'

const Search = () => {
    return (
<React.Fragment>   

<div id="search">
  <form>
    <input id="text_search" type="text" placeholder="Search" />
    <input type="submit" defaultValue="Search" />
  </form>
</div>

<div>
  <p>This will be a list of all restaurants from db.json. I will fetch later.</p>
</div>


</React.Fragment> 

  )
}

export default Search
