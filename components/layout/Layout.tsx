
import Header  from "./Header"
import Content from "./Content"
import Footer from "./Footer"

export default function Layout({children}:any){
  return (
  <>
    <div className="app">
      <Header />
      <Content>
          {children}
      </Content>
      <Footer />
    </div>

    <style jsx global>{`
      .app {
        display:block;
        height:100%;
        overflow-y:auto;
        max-width:100%;
        outline:0;
        direction:ltr;
        position:relative;

      }
    `}
    </style>
  </>
  )
}
