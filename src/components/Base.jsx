
import Header from "./Header";
import Footer from "./Footer"
export default  function Base({children}){
  

return(


    <main >
        <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <Header/>
      {children}
      <Footer/>
    </main>
);


}