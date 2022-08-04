const Header = () => {
    return (
    <header className="primary-bg py-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6 col-sm-12 text-center">
                    <h1 className="display-4">
                        <strong>
                            <div className="text-nowrap line-nes">Where remote teams</div> 
                            <div className="text-nowrap line-nes">share knowledge and</div>
                            <div className="text-nowrap line-nes">make decisions.</div>
                        </strong>
                    </h1>
                </div>
            </div>
            <div className="row justify-content-center my-3">
                <div className="col-lg-5 col-md-6 col-sm-12 text-center">
                    <input type="email" className="primary-bg rounded-pill px-4 py-2 text-dark-50" placeholder="name@company.com" />
                    <button className="btn btn-primary btn-lg rounded-pill">Start for free</button>
                    <div className="btn btn-outline-dark btn-lg rounded-pill">Book a demo</div>
                </div>
            </div>
            <div className="row justify-content-center my-3">
                <div className="col-12">
                    <img className="img-fluid" src="https://assets-global.website-files.com/5f84417443f34a30444f52d3/627e355dc75c2e90373cb295_Hero%20Visual-p-1600.png" alt=""/>
                </div>
                <div className="col-5">
                    <div className="card-time text-muted text-center py-2">4PM - AEST</div>
                    <div className="card border-0 shadow-sm">
                        <div className="card-body row justify-content-around">
                            <div className="col-3">
                                <img className="img-fluid" src="https://assets-global.website-files.com/5f84417443f34a30444f52d3/62763800bd539d2c4a8abd09_Group%202.png" alt=""/>
                            </div>
                            <div className="col-8 d-flex flex-column justify-content-center">
                                <h5 className="card-title">
                                    Lily made a decision
                                </h5>
                                <div className="card-text">
                                    <p className="text-muted">Let’s publish a guidebook about remote</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </header>
    );
}

export default Header;