import { footerItems,footerItemsMenu } from "../data/footerItems";

const Footer = () => {
    return (
        <footer className="footer py-5 border-top">
            <section class="">
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
                                                            menu.items.map((item, index) =>
                                                            {
                                                                return(
                                                                    <li className="m-1" key={index}>
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

            <section class="">
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

{/* <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3 text-grayish"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3 text-grayish"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3 text-grayish"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3 text-grayish"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3 text-grayish"></i> + 01 234 567 89</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section> */}