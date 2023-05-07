import React from 'react'
import Title from "../ui/Title";
import OutsideClickHandler from 'react-outside-click-handler';
const Search = ({setIsSearchModal}) => {
  return (
    <div>
      <OutsideClickHandler onOutsideClick={
          ()=> setIsSearchModal(false) }>
        <div className="">
          <Title addClass="">
              iremm
          </Title>
        </div>
        </OutsideClickHandler>
    </div>
  )
}

export default Search
