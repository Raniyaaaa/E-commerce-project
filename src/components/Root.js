import MainNavigation from "./MainNavigation/MainNavigation";
import { Outlet } from "react-router-dom";
import { Image,Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const RootLayout=()=>{
    const location=useLocation();
    return(
        <>
            <MainNavigation/>
            <Outlet/>
            <footer style={{ background: "#56CCF2", padding: '1rem' }}>
                <Container className="d-flex justify-content-between align-items-center">
                    <h3 style={{ fontSize: '3rem',color:'white', fontWeight: 'bold', fontFamily: 'Times New Roman'}}>The Generics</h3>
                    {location.pathname!=='/'&&(<div>
                        <a href="https://www.youtube.com/"><Image src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" thumbnail style={{ width: '35px', height: '35px' , marginRight: '0.5rem', background:'#56CCF2',border:'none'}} /></a>
                        <a href="https://open.spotify.com/"><Image  src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png" thumbnail style={{ width: '35px', height: '35px', marginRight: '0.5rem',background:'#56CCF2',border:'none' }} /></a>
                        <a href="https://www.facebook.com/"><Image  src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png" thumbnail style={{ width: '35px', height: '35px' ,background:'#56CCF2',border:'none' }} /></a>
                    </div>)}
                </Container>
            </footer>
        </>
    )
}
export default RootLayout;