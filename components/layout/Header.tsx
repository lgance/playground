

export default function Header(){
  return (
  <>
    <header>
       <div className="nav-wrapper">
          <div className="nav-left">
                  Left
          </div>

          <div className="nav-center-wrap">
            <nav>
                  Nav
            </nav>
          </div>

          <div className="nav-right">
                Right
          </div>

       </div>

    </header>

    <style jsx global>{`
       header{
         position:sticky;
         top:0;
         z-index:5475456;
         display:flex;
         flex-direction:column;
         align-items:center;
         color:#000;
         background-color:#fff;

       }


       .nav-wrapper{
          display:flex;

          width:85%;
          max-width:1250px;
          align-items:center;  
          margin:0 auto;
          

          position:relative;
          z-index:100;
          padding-top:10px;
          padding-bottom:10px;
          justify-content:space-between;
       }

    `}
    </style>
  </>
  )
}
