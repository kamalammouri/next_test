import { footerItems,footerItemsMenu } from "../data/footerItems";

const Footer = () => {
    return (
        <footer className="footer py-5 border-top">
            <section className="">
                <div className="container text-center text-md-start mt-2">
                    <div className="d-flex justify-content-start pb-5 mb-5">
                        <img src="https://assets-global.website-files.com/5f84417443f34a30444f52d3/5f84417443f34a56664f52e2_Logo%20-%20Slite%20-%20Icon.svg" width="45" height="45" alt="" />
                    </div>
                    <div className="d-flex">
                            {
                            footerItemsMenu.map((menu, index) => 
                                        {
                                            return(
                                                <div className="row align-content-start" key={index}>
                                                    <h6 className="text-uppercase mb-3">{menu.title}</h6>
                                                    <ul className="list-unstyled">
                                                        {
                                                            menu.items.map((item, _index) =>
                                                            {
                                                                return(
                                                                    <li className="m-1" key={_index}>
                                                                        <a className="nav-link text-muted" href="#">{item.title} {item.subtitle ? <span className="badge rounded-pill text-bg-warning">{item.subtitle}</span> : null}</a> 
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            )
                                        })
                            }
                        <div className="col-4">
                            <h6 className="text-uppercase">Remote letters to read on your own time</h6>
                            <input type="email" className="form-control rounded-pill" placeholder="What's your email?" />
                            <button className="btn btn-primary mt-3">Subscribe</button>
                            <p className="text-muted">100% homemade, no tricks or ponies or growth hacking nonsense. Just remote things we care about with a short surprising insight every week. No rush.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row justify-content-between align-items-center py-4 border-top border-dark">
                        <div className="col-md-6">
                            <ul className="list-inline">
                                {
                                    footerItems.map((item, index) => 
                                    {
                                        return(
                                            <li className="list-inline-item" key={index}>
                                                <a className="nav-link text-black-50" href="#">{item.title}</a>
                                            </li>
                                            )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <p>&copy; 2022 Slite. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;