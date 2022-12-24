


export default function Footer({children}:any){
  return (
  <>
    <footer>
        <div className="wrapper-footer">
            <div className="footer-links-container">
              <div className="footer-logo-and-text-container">
                    Logo Position
              </div>

              <div className="footer-grid">
                <div className="footer-column">
                  <h5>test</h5>
                  <a>Test Link</a>

                  <h5>test</h5>
                  <a>Test Link</a>
                </div>
                
                <div className="footer-column">
                  <h5>test22</h5>
                  <a>Test Link222</a>

                  <h5>test22222</h5>
                  <a>Test Link22222</a>

                  <h5>test22222</h5>
                  <a>Test Link22222</a>
                  <h5>test22222</h5>
                  <a>Test Link22222</a>
                </div>


                <div className="footer-column">
                  <h5>test33</h5>
                  <a>Test 3333</a>

                  <h5>test22222</h5>
                  <a>Test Link22222</a>

                 
                  <h5>test22222</h5>
                  <a>Test Link22222</a>
                </div>
              </div>


            </div>
        </div>
    </footer>

    <style jsx global>{`
        footer{
          z-index:999;
          position:relative;
          overflow:hidden;
          background-color:#276b6b;
          color:#fff;
          
        }

        .wrapper-footer{
          padding-bottom:30px;
          flex-direction:column;
          justify-content:space-between;
          align-items:stretch;
          color:#fff;
          
          width:85%;
          display:flex;
          max-width:1250px;
          margin:0 auto;
          padding-top:100px;


      
        }



        .footer-links-container{
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
        }

        .footer-logo-and-text-container{
          display:flex;
          width:25%;
          flex-direction:column;
          align-items:flex-start;
          color:#f4f5fd;
        }



        .footer-grid{
          display:grid;
          width:70%;
          max-width:850px;
          grid-auto-columns:1fr;
          grid-column-gap :16px;
          grid-row-gap:16px;
          grid-template-columns:1fr 1fr 1fr;
          grid-template-rows:auto;
          color:#f4f5fd;
        }


        .footer-column{
          display:flex;
          flex-direction:column;
          justify-content:flex-start
          align-items:flex-start;
          color:#f4f5fd;
        }


    `}
    </style>
  </>
  )
}
