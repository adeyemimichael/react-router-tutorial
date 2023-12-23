import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <div>
      <h1>Page not Found &#x1F3CF;</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque beatae quibusdam commodi illo laboriosam inventore aliquam recusandae incidunt rem voluptas ipsum sint molestias nam est unde, debitis labore reiciendis blanditiis.</p>
   <p>Go to <Link to="/">Homepage</Link></p>
    </div>
  )
}

export default NotFound