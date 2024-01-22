import { Watch } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loaderContainer">
      <Watch
  visible={true}
  height="80"
  width="80"
  radius="48"
  color="lime"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default Loader