import React from 'react'
import { Table,Button, Container } from 'react-bootstrap';

const Home=()=>{

    const tourDates = [
        { date: 'JUL 16', city: 'DETROIT, MI', venue: 'DTE ENERGY MUSIC THEATRE' },
        { date: 'JUL 19', city: 'TORONTO, ON', venue: 'BUDWEISER STAGE' },
        { date: 'JUL 22', city: 'BRISTOW, VA', venue: 'JIGGY LUBE LIVE' },
        { date: 'JUL 29', city: 'PHOENIX, AZ', venue: 'AK-CHIN PAVILION' },
        { date: 'AUG 2', city: 'LAS VEGAS, NV', venue: 'T-MOBILE ARENA' },
        { date: 'AUG 7', city: 'CONCORD, CA', venue: 'CONCORD PAVILION' }
    ];

    return(
        <Container style={{paddingRight:'15rem',paddingLeft:'15rem',paddingBottom:'2rem'}}>
            <h1 style={{textAlign:'center',padding:'2rem'}}>TOURS</h1>
            <Table bordered-bottom>
                <tbody>
                    {tourDates.map((event, index) => (
                        <tr key={index}  style={{fontFamily:'Times new roman',fontSize:13}}>
                            <td>{event.date}</td>
                            <td style={{color:'grey'}}>{event.city}</td>
                            <td style={{color:'grey'}}>{event.venue}</td>
                            <td >
                                <Button variant="info" size="sm" padding='irem' style={{ borderRadius: '5px',color:'white',fontFamily:'none'}}>BUY TICKETS</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}
export default Home;