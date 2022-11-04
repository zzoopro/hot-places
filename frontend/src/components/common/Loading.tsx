import { useSelector } from "react-redux"



const Loading = () => {
   const isLoading = useSelector((state: any) => state.loading.isLoading)

   return (
      <>
         {
            isLoading ? <div className="bg-black opacity-50 flex justify-center items-center w-screen h-screen fixed left-0 top-0">
               <h1 className="text-3xl text-white">Loading...</h1>
            </div> : null
         }
      </>
   )
}

export default Loading