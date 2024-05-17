import React from 'react'
import "./Aboutus.css"    
import fast from "../../Assets/images/fast.png"
import can from "../../Assets/images/candlil.jpeg"
import hygin from "../../Assets/images/hygin.jpeg"
import infs from "../../Assets/images/infe.jpeg"
const Aboutus = () => {
  return (
    <section>
        <div className='container-fluid'>
            <div className='box'>
                <img className='boximg' src={fast} alt="" />
                <div className='boxcon'>
                <h1>Fastest Food Deliverys</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, officia deserunt ex iusto sed necessitatibus totam fugit nihil esse ipsa unde non tempora, aspernatur, voluptas corporis laboriosam quisquam! Delectus, illo.</p>
                </div>
            </div>

            <div className='box'>
                <img className='boximg' src={can} alt="" />
                <div className='boxcon'>
                <h1>Candile Night</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, officia deserunt ex iusto sed necessitatibus totam fugit nihil esse ipsa unde non tempora, aspernatur, voluptas corporis laboriosam quisquam! Delectus, illo.</p>
                </div>
            </div>


            <div className='box'>
                <img className='boximg' src={hygin} alt="" />
                <div className='boxcon'>
                <h1>Provide Hyginic Food </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, officia deserunt ex iusto sed necessitatibus totam fugit nihil esse ipsa unde non tempora, aspernatur, voluptas corporis laboriosam quisquam! Delectus, illo.</p>
                </div>
            </div>
            <div className='box'>
                <img className='boximg' src={infs} alt="" />
                <div className='boxcon'>
                <h1>good Infrastructure </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, officia deserunt ex iusto sed necessitatibus totam fugit nihil esse ipsa unde non tempora, aspernatur, voluptas corporis laboriosam quisquam! Delectus, illo.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutus