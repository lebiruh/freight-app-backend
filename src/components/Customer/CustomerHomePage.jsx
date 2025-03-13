// import Footer from "../Footer/Footer"
import GoogleMapSection from "../Home/GoogleMapSection"
import SearchSection from "../Home/SearchSection"
// import CustomerNavbar from "../Navbar/CustomerNavbar"


const CustomerHomePage = () => {
  return (
    <>
      {/* <CustomerNavbar /> */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <SearchSection />
        </div>
        <div className="col-span-2">
          <GoogleMapSection />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default CustomerHomePage