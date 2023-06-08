import React from 'react'
import Title from "../ui/Title";
import OutsideClickHandler from 'react-outside-click-handler';
const Search = ({setIsSearchModal}) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-red-900 after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
      <OutsideClickHandler onOutsideClick={
          ()=> setIsSearchModal(false) }>
        <div className="w w-full  h-full grid place-content-center">
          <div className='relative z-50 w-[400px] h-[400px] bg-white border-2'>
          <Title addClass="">
              iremm
          </Title>
        </div>
        </div>
        </OutsideClickHandler>
    </div>
  )
}

export default Search;
