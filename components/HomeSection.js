import { homeSectionItems } from "../data/homeSectionItems";

const HomeSection = () => {
    return (
        <>
        <section className="primary-bg py-5">
            <div className="container py-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-2">
                        <ul className="list-unstyled">
                            {homeSectionItems.map((item, index) => {
                                return (
                                    <>
                                    <li className="list-item p-1 my-3" key={index}>
                                        <span className="text-muted">{item.label}</span>
                                    </li>
                                    </>
                                )
                            })}
                        </ul>
                        <a className="nav-link text-muted">More</a>
                    </div>
                    <div className="col-10">
                        <div className="row position_relative">
                            <div className="col-12">
                                <img className="img-fluid" src="https://assets-global.website-files.com/5f84417443f34a30444f52d3/6290e004f6310f703dde447b_Desktop-p-1600.png" alt=""/>
                            </div>
                            <div className="col-3 phone-cadr">
                                <img className="img-fluid" src="https://assets-global.website-files.com/5f84417443f34a30444f52d3/6290e0537ef59a9e13f893c0_Mobile-p-500.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default HomeSection;