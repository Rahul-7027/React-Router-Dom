import React from 'react'



const Footer = () => {
  return (
    <div>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <main className="bg-white rounded-4 p-5">
        <section className="row row-cols-lg-4 row-cols-sm-2 row-cols-md-3 mb-5 g-4">
          <div className="section-1 me-4">
            <h5 className="mb-3">Explore</h5>
            <a href="#" className="text-decoration-none d-block mb-2">New uploads</a>
            <a href="#" className="text-decoration-none d-block mb-2">Popular designs</a>
            <a href="#" className="text-decoration-none">Contributors</a>
          </div>

          <div className="section-2">
            <h5 className="mb-3">Site</h5>
            <a href="#" className="text-decoration-none d-block mb-2">License</a>
            <a href="#" className="text-decoration-none d-block mb-2">Articles</a>
            <a href="#" className="text-decoration-none d-block mb-2">About</a>
            <a href="#" className="text-decoration-none d-block mb-2">Support</a>
            <a href="#" className="text-decoration-none">Sponsors</a>
          </div>

          <div className="section-3">
            <h5 className="mb-3">Other products</h5>
            <a href="#" className="text-decoration-none">Boardme</a>
          </div>

          <div className="section-4">
            <h3 className="mb-3">1362</h3>
            <a href="#" className="text-decoration-none mb-5 d-block">Design files uploaded</a>

            <h5 className="mb-3">Follow us</h5>
            <i className="fa-brands fa-instagram me-3"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </section>

        <section className="footer d-flex justify-content-between">
          <span className="fw-bold">Legal</span>
          <span className="copyright">© 2021 UI Design Daily All rights reserved</span>
        </section>
      </main>

    </div>
  )
}

export default Footer
