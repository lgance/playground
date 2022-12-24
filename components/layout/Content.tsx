


export default function Content({children}:any){
  return (
  <>
    <main>  
      <div className="main-wrapper">
          {children}
      </div>
    </main>

    <style jsx global>{`
        main{
          overflow:hidden;
        }
        .main-wrapper{
          width:100%;
          display:flex;
          max-width:1250px;
          margin:0 auto;


          min-height:1000px;
        }


    `}
    </style>
  </>
  )
}
