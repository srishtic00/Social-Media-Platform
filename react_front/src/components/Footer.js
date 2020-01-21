import React,{Component} from 'react'
import { MDBContainer, MDBFooter } from "mdbreact";
export default class Footer extends Component
{
    render()
    {
        return(
            <div >
            <MDBFooter>
            <div className="footer-copyright bg-dark text-center text-white py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> Photonova </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
        )
}
}