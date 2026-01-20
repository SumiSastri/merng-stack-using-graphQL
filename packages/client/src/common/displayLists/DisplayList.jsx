// ✅ Apollo Client 4 style
import { useQuery } from '@apollo/client/react';


// data import constants and assign to queryName

// components
import Loading from "../loading/Loading";
import ErrorHasOccurredComponent from "../errors/ErrorHasOccurredComponent";
import DisplayCard from "../displayCard/DisplayCard";

const DisplayList = () => {
    let queryName=""
  const { loading, error, data } = useQuery(queryName);
  if (error) return <ErrorHasOccurredComponent />;
  if (loading) return <Loading />;

  return (
    <>
      {data.queryData.length > 0 ? (
        <div className='row mt-4'>
          {data.queryData.map((apiData) => (
            <div key={apiData.id}>
              <DisplayCard key={apiData.id} cardData={apiData} />
            </div>
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

export default DisplayList;