import { useState } from "react";
import { homeSectionItems } from "../data/homeSectionItems";

const HomeSection = () => {
    const [pcImage, setPcImage] = useState(homeSectionItems[0].image);
    const [mobileImage, setMobileImage] = useState(homeSectionItems[0].subimage);
    const [activeItem, setActive] = useState(homeSectionItems[0]);

    const selectedItem = (item) => {
        setPcImage(item.image);
        setMobileImage(item.subimage);
        setActive(item);
    };
    return (
        <>
        <section className="primary-bg py-5">
            <div className="container py-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-2">
                        <ul className="list-unstyled">
                            {homeSectionItems.map((item,index) => {
                                return (
                                    <>
                                    <li className={activeItem == item ? "list-item p-3 my-3 cursor-pointer rounded activeClass" : "list-item p-3 my-3 cursor-pointer rounded"} key={index} onClick={()=>{selectedItem(item)}}>
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
                                <img className="img-fluid desktop-mask" src="https://assets-global.website-files.com/5f84417443f34a30444f52d3/6290e004f6310f703dde447b_Desktop-p-1600.png" alt=""/>
                                <img className="img-fluid desktop-content" src={pcImage} alt=""/>
                            </div>
                            <div className="col-3 phone-container">
                                <img className="img-fluid phone-mask" src="https://assets-global.website-files.com/5f84417443f34a30444f52d3/6290e0537ef59a9e13f893c0_Mobile-p-500.png" alt=""/>
                                <img className="img-fluid phone-content" src={mobileImage} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center mt-5">
                    <div className="col-12">
                        <h1 className="display-5 text-center">
                        <strong>
                            <div className="text-nowrap line-nes">All of your documents in one place.</div> 
                        </strong>
                        </h1>
                        <p className="text-center my-3">
                            Project, knowledge base, process, bring all your work to life in Docs.
                        </p>
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-primary btn-lg btn-block rounded-pill m-2 px-4">Get Started</button>
                        <button className="btn btn-outline-dark btn-lg btn-block rounded-pill m-2 px-4">Download the apps</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default HomeSection;