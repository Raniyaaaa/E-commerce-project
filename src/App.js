import { Button, Container, Navbar,Badge,Row,Col,Image} from 'react-bootstrap';
import './App.css';
import Product from './components/Products/Product';

const App=()=> {


  return (
    <>
      <Navbar bg="black" expand="sm" variant="dark" style={{paddingRight:'1rem' ,fontFamily: 'Times New Roman'}}>
        <Container className="justify-content-center">
          <Navbar.Brand href="#home" >HOME</Navbar.Brand>{' '}
          <Navbar.Brand href="#store">STORE</Navbar.Brand>{' '}
          <Navbar.Brand href="#about">ABOUT</Navbar.Brand>{' '}
        </Container>
        <Button variant='outline-info'>Cart</Button>{' '}
        <Badge
            bg="none"
            style={{
              color:'skyblue',
              position: 'absolute',
              top: '-6px',      // Adjust the positioning as needed
              right: '-1px',    // Align to the top-right corner
              fontSize: '1.2rem',
              padding: '0.4rem',
            }}>
            {0}
          </Badge>
      </Navbar>
      <header className="mt-1" style={{background:"grey"}}>
        <Container className="justify-content-center" style={{paddingBottom:'3rem'}}>
          <h1 style={{ fontSize: '5rem', color: 'white', fontWeight:'bold' ,textAlign: 'center' ,fontFamily: 'Times New Roman'}}>The Generics</h1>
        </Container>
      </header>
      <Product/>
      <footer style={{ background: "skyblue", padding: '1rem' }}>
        <Container className="d-flex justify-content-between align-items-center">
          <h3 style={{ fontSize: '3rem',color:'white', fontWeight: 'bold', fontFamily: 'Times New Roman'}}>The Generics</h3>
          <div>
            <a href="https://www.youtube.com/"><Image src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" thumbnail style={{ width: '40px', height: '40px' ,background:'skyblue',border:'none' }} /></a>
            <a href="https://open.spotify.com/"><Image  src="https://static.vecteezy.com/system/resources/previews/023/986/728/non_2x/spotify-logo-spotify-logo-transparent-spotify-icon-transparent-free-free-png.png" thumbnail style={{ width: '40px', height: '40px', marginRight: '0.5rem',background:'skyblue',border:'none' }} /></a>
            <a href="https://www.facebook.com/"><Image  src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" thumbnail style={{ width: '40px', height: '40px', marginRight: '0.5rem' ,background:'skyblue',border:'none' }} /></a>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default App;
