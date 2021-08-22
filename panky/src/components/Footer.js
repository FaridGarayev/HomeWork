import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <h4>Panky</h4>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <p>© 2021 Code Interactive, All Rights Reserved</p>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="wrapper">
                                <div className="socialicons">
                                    <a href="https://www.facebook.com/" title="Facebook" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>

                                    <a href="https://twitter.com/" title="Twitter" className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>

                                    <a href="https://www.instagram.com/" title="Instagram" className="icon">
                                        <i className="fab fa-instagram"></i>
                                    </a>

                                    <a href="https://github.com/" title="Github" className="icon">
                                        <i className="fab fa-github"></i>
                                    </a>

                                    <a href="https://www.linkedin.com/" title="Linked-In" className="icon">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
