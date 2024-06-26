import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


function Landingpage() {
  return (
    <>
    <div className="row mt-5 w-100 justify-content-center align-items-center">
      <div className="col-md-1"></div>
      <div className="col-md-5 p-5">
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis voluptas perferendis et! Harum, consequuntur ab porro, provident nostrum ad perspiciatis vitae earum debitis distinctio impedit tenetur nesciunt dolores Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat ipsa sint doloremque cum deserunt at, neque provident, doloribus possimus voluptatibus nostrum pariatur labore nesciunt adipisci. Harum corrupti molestiae magnam!</p>
        <button className='btn btn-warning mt-5'><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Get Started</Link></button>
      </div>
      <div className="col-md-1"></div>

      <div className="col-md-5 d-flex justify-content-center align-items-center p-5">
      <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif"alt="no image" className='w-75'/>
      </div>
      
    </div>


    <div className="row w-100 mt-5">
      <h3 className='mt-5 text-center mb-5 '>Features</h3>
      <div className="col-md-1 me-md-5"></div>
      <div className="col-md-3 px-5  px-md-4 mt-4">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://www.icegif.com/wp-content/uploads/2022/10/icegif-751.gif"className='w-100'height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

      </div>
      <div className="col-md-3 px-5 px-md-4 mt-4 ">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/60/04/30/600430c1d22c731b94cf4e7dae6b398a.gif" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-3 px-5 px-md-4 mt-4 ">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.gifer.com/LONa.gif"className='w-100'height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-1"></div>
    </div>


    <div className="row w-100 mt-5 ms-1 ms-md-0 p-4 p-md-0">
      <div className="col-md-1"></div>
      <div className="col-md-9 border p-5 rounded m-md-5">
        <div className='row w-100 '>
          <div className="col-md-6">
            <h3 className='text-warning mt-3'>simple fast and powerful</h3>
            <p className='mt-4'> <span className='fs-4' >Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate esse consequuntur optio excepturi repellat possimus modi, veniam a corporis unde repudiandae nam magnam itaque repellendus earum dolores dolore quibusdam.</p>

            <p className='mt-4'><span className='fs-4' >Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate esse consequuntur optio excepturi repellat possimus modi, veniam a corporis unde repudiandae nam magnam itaque repellendus earum dolores dolore quibusdam.</p>

            <p className='mt-4'><span className='fs-4' >Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate esse consequuntur optio excepturi repellat possimus modi, veniam a corporis unde repudiandae nam magnam itaque repellendus earum dolores dolore quibusdam.</p>
          </div>
          <div className="col-md-6">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/eECs3R6fr-s" title="Mulla Poovithalo Video Song | Abrahaminte Santhathikal  | Serin Francis | Haricharan  | Anson Paul" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

      </div>
      <div className="col-md-2"></div>
    </div>
    
    
    </>
  )
}

export default Landingpage