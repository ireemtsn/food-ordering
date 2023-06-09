import { useState } from "react";
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";



const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav>
          <ul className="flex gap-x-2">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Menu</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Book Table</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center ">
          <a href="#">
            <FaUserAlt  className="hover:text-primary transition-all"/>
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary transition-all"  />
          </a>
          <button onClick={()=> setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a href="#">
            <button className="btn-primary ">Order Online</button>
          </a>
        </div>
      </div> 
      
      {/* /* Arama ikonuna tıkladığıktan sonra dışarı tıklarsak kaybolsun */ }
    
      {isSearchModal && (
        <Search  setIsSearchModal={setIsSearchModal}/>
      )}

    </div>
  );
};

export default Header;  








// const Search = ({ setIsSearchModal }) => {
//   const [products, setProducts] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/products`
//         );
//         setProducts(res.data);
//         setFiltered(res.data.slice(0, 5));
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     setTimeout(() => {
//       getProducts();
//     }, 1000);
//   }, []);
// }









