import { Image,Container } from "react-bootstrap"

const Footer=()=>{
    return(
        <>   
            <footer style={{ background: "skyblue", padding: '1rem' }}>
                <Container className="d-flex justify-content-between align-items-center">
                    <h3 style={{ fontSize: '3rem', color: 'white', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>The Generics</h3>
                    <div>
                        <a href="https://www.youtube.com/">
                            <Image src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" thumbnail style={{ width: '40px', height: '40px', background: 'skyblue', border: 'none' }} />
                        </a>
                        <a href="https://open.spotify.com/">
                            <Image src="https://static.vecteezy.com/system/resources/previews/023/986/728/non_2x/spotify-logo-spotify-logo-transparent-spotify-icon-transparent-free-free-png.png" thumbnail style={{ width: '40px', height: '40px', marginRight: '0.5rem', background: 'skyblue', border: 'none' }} />
                        </a>
                        <a href="https://www.facebook.com/">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" thumbnail style={{ width: '40px', height: '40px', marginRight: '0.5rem', background: 'skyblue', border: 'none' }} />
                        </a>
                    </div>
                </Container>
            </footer>
        </>
    )
}
export default Footer;