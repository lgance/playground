
import Header  from "./Header"
import Content from "./Content"

export default function Layout({children}:any){
  return (
  <>
    <div className="app">
      <Header />
      <Content>
          {children}
      </Content>
    </div>

    <style jsx global>{`
      .app {
        display:block;
        height:100%;
        overflow:hidden;
        max-width:100%;
        outline:0;
        direction:ltr;
        position:relative;

        background-color:red;

      }
    `}
    </style>
  </>
  )
}
