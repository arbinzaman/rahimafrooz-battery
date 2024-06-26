import { useParams } from 'react-router-dom'

const CategoryWiseBatteries = () => {
  const params = useParams();
  console.log(params)
  return (
    <div>CategoryWiseBatteries</div>
  )
}

export default CategoryWiseBatteries
