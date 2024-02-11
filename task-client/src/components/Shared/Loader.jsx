/* eslint-disable react/prop-types */
import { PuffLoader, ScaleLoader } from 'react-spinners'

const Loader = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      {/* <ScaleLoader size={300} color='#36d7b7' /> */}
      <PuffLoader size={100} color="#36d7b7" />
    </div>
  )
}

export default Loader
