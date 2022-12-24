
export default function Canvas({params}:any) {

  const [id] = params || [];


  return (
      <div>Canvas Router Test -- {id}</div>
  )
}
// export function getServerSideProps({params:{params}}:any){

//   return{
//     props:{
//       params
//     }
//   }
// }
