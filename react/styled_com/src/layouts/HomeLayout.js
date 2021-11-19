import { renderRoutes } from "react-router-config";

function Home(props) {
  const { route } = props;
  return (
    <div>
      Home
      {renderRoutes(route.routes)}
    </div>
  )
}

export default Home;
