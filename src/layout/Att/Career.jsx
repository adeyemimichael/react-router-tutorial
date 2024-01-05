import { useLoaderData,Link } from "react-router-dom"
const Career = () => {
  const careers = useLoaderData()
  return (
    <div className="text-black font-bold ">
  {careers.map(
    career => (
      <Link to="/" key={career.id}> 
      <p>{career.title}</p>
      <p>{career.location}</p></Link>
    )
  )}
    </div>
  )
}


export default Career;
