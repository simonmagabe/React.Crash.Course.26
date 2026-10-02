import { ClipLoader } from 'react-spinners'

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <div>
      <ClipLoader 
        color="#4338ca"
        loading={loading}
        size={150}
        cssOverride={override}
        aria-label="Loading spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Spinner