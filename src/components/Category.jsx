import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
export default function Category() {
  const [category, setCategory] = useSate([]);
   const fetchCategory = ()=>{

   }

   useEffect(()=>{

   },[])
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
        <FaArrowLeft/>
          </div>
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
          <FaArrowRight/>
          </div>
        </div>
      </div> 
    </div>
  );
}
