import { homeSectionItems } from "../data/homeSectionItems";

const HomeSection = () => {
    let pcImage = "";
    let mobileImage = "";
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
                                <img className="img-fluid desktop-mask-image" src="https://assets-global.website-files.com/5f84417443f34a30444f52d3/6290e004f6310f703dde447b_Desktop-p-1600.png" alt=""/>
                                <img className="img-fluid desktop-screenshot" src="https://assets-global.website-files.com/5f84417443f34a30444f52d3/62988cb4cb60e75de1f44e0d_Desktop%20-%20Wiki-p-1080.jpeg" alt=""/>
                            </div>
                            <div className="col-3 phone-container">
                                <img className="img-fluid phone-mask" src="https://assets-global.website-files.com/5f84417443f34a30444f52d3/6290e0537ef59a9e13f893c0_Mobile-p-500.png" alt=""/>
                                <img className="img-fluid phone-content" src="https://assets-global.website-files.com/5f84417443f34a30444f52d3/6299ce13229401d05c2bfc7f_Mobile%20-%20Wiki.jpg" alt=""/>
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