import React ,{ useState } from "react"
import { Button,Container } from "react-bootstrap";

const ContactUs=()=>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const submitDetailshandler=async (event)=>{
        event.preventDefault();
        const contactData={
            name,
            email,
            number
        }
        const response = await fetch('https://e-commerce-d3e7a-default-rtdb.firebaseio.com/contacts.json', {
            method: 'POST',
            body: JSON.stringify(contactData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        setName('');
        setEmail('');
        setNumber('');
    }

    return(
        <Container style={{paddingBottom:'2rem'}}>
            <h1 style={{textAlign:'center',marginTop:'1rem',fontFamily: 'fantasy',padding:'1rem'}}>CONTACT US</h1>
            <form style={{paddingTop:'2rem',paddingLeft:'10rem',paddingRight:'10rem',display:'flex',flexDirection:'column'}} onSubmit={submitDetailshandler}>
                <label>Name 
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} style={{borderRadius:'3rem',width:'100%',marginBottom:'1rem',marginTop:'0.5rem'}} required></input>
                </label>
                <label>E Mail 
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderRadius:'3rem',width:'100%',marginBottom:'1rem',marginTop:'0.5rem'}} required></input>
                </label>
                <label>Phone Number 
                    <input type="tel" value={number} onChange={(e)=>setNumber(e.target.value)} style={{borderRadius:'3rem',width:'100%',marginBottom:'1rem',marginTop:'0.5rem'}} required></input>
                </label>
                <div className="mt-4" style={{ display: 'flex', justifyContent: 'center'}}>
                    <Button variant='info' type='submit' style={{color:'white'}}>Submit</Button>
                </div>
            </form>
        </Container>
    )
}

export default ContactUs;