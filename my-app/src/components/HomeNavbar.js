import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  script = {
      
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      
        <div>
              {/* <div>
                    <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <div className="pull-right">
                                <NavItem className="hamburger pull-right">
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                            </div>
                         
                                <NavItem className="hamburger pull-right">
                                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                                </NavItem>
                        </Nav>
                    </Collapse>
                    </Navbar>
                 </div>  */}
        </div>
        
        
      
    );
  }
}

// // .........................................................................................................
// <div class="navClass">
//         <header style="background:#054677;overflow: overlay;">
//           <div>
//             <a data-toggle="collapse" href="#collapse1" style="color: white; padding: 0px 12px 0px;" display: inline-block;><i class="fa fa-bars" aria-hidden="true"></i></a>
//             <h4 class="hLogo">Logo</h4>
//           </div>
//         </header>
//         <div id="collapse1" class="panel-collapse collapse">
//               <ul class="list-group" >
//                 <li class="list-group-item">Submitted</li>
//                 <li class="list-group-item">Calender</li>
//               </ul>
//         </div> 
//       </div>