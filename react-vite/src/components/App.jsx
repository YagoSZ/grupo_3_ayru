import '../assets/css/styles.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import UsersList from './UsersList';
import Products from './Products';
import UltimoUsuario from './UltimoUsuario';


function App(){
return (
    <>
       <Header />
        <Products />
       <UsersList />
       <UltimoUsuario />
       <Footer />
    </>

)

}

export default App;
