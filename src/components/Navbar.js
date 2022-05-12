import React , {useState} from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login';
import { useNavigate } from 'react-router-dom' 



export default function Navbar(props) {

  const [showModel,setshowModel] = useState(false)
  const about2 = useNavigate()
  //console.log(showModel)


  return (
    <>
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">LOGO2</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => about2(`/leaderboard`)} style={{cursor:"pointer"}}>Leaderboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => about2(`/about`)} style={{cursor:"pointer"}}>About</a>
              </li>

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <form className="d-flex">
              <button className="btn btn-outline-success" onClick={(e) => {e.preventDefault(); setshowModel(true)}}>Login</button>
            </form>



          </div>
        </div>
      </nav>



    </div>
    {showModel ? <Login/>:null}
    </>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

// Navbar.defaultProps = {
//     title:"Online Nursery",
// }






