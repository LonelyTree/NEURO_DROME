import React,{Component} from 'react'
import './glitch.css'

class Glitch extends Component{
    render(){
        return(<div className="body">
  <div className="container on">
    <div className="screen">
      <h3 className="glitch" data-text="CONNECTION ESTABLISHED">
        CONNECTION ESTABLISHED
      </h3>
      <div className="box--outer">
        <div className="box">
          <div className="box--inner">
            <div className="content">
              <div className="holder">
                <h1 className="glitch" data-text="NEURO // DROME">NEURO // D<span id="offset">R</span>OME</h1> <br/>
                <p className="glitch" data-text="Build, Train, Compete">Build, Train, Compete.</p> <br/>
                <p id="desc" className="glitch" data-text="Baptize your A.I. into unique competitions for perfect superiority.">Baptize your A.I. into unique competitions for perfect superiority.</p>
                <br/>
                <br/>
                <div className="row">
                  <div className="col col__left label">
                    Login
                  </div>
                  <div className="col col__center">
                    <input type="text" id="login" maxLength="32" value="NEURO // LINK" readOnly/>
                  </div>
                </div>
                <form method="post" action="/password">
                  <div className="row">
                    <div className="col col__left label">
                      Password
                    </div>
                    <div className="col col__center">
                      <input type="password" id="password" name="password" required="required" placeholder="" dataerror="" maxLength="32" autoComplete="new-password"
                        autoFocus={true} />
                    </div>
                  </div>
                  {/* <b className="flash">ACCESS DENIED</b> */}
                  <div className="row">
                    <button type="submit" id="submit" name="submit">[login]</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>)
    }
}

export default Glitch