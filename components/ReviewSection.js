import { reviewSectionItems } from "../data/reviewSectionItems";

const ReviewSection = () => {
    return ( 
    <>
    <section className="primary-bg py-5">
        <div className="container py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-12"></div>
            </div>
            <div className="row align-items-center">
                {reviewSectionItems.map((item,index) => {
                    return(
                        <div className="col-4 mt-3" key={index}>
                            <div className="card border-0 shadow-sm rounded px-2 py-4">
                                <div className="card-body">
                                    <div className="row justify-content-center">
                                        <h6 className="card-title">"{item.review}"</h6>
                                    </div>
                                    <div className="row align-items-center mt-3">
                                        <div className="col-8">
                                            <h7 className="text-uppercase">{item.fullName}</h7>
                                            <p className="text-muted">{item.title}</p>
                                        </div>
                                        <div className="col-3">
                                            <img className="img-fluid" src={item.image} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    )
                })}
            </div>
        </div>
    </section>

    </> 
    );
}
 
export default ReviewSection;