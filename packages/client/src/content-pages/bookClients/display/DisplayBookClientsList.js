// data
import { useGetBookClientsQuery } from "../../../utils/hooks/useGetBookClientsQuery";
// components
import Loading from "../../../common/loading/Loading";
import ErrorHasOccurredComponent from "../../../common/errors/ErrorHasOccurredComponent";
import BookClientRow from "./BookClientRow";

const DisplayBookClientsList = () => {
  const { error, loading, data } = useGetBookClientsQuery();
  // console.log("BookClientsList:", { error, data, loading });
  if (error) return <ErrorHasOccurredComponent />;
  if (loading) return <Loading />;
  return (
    <div>
      {!loading && !error && (
        <>
          <table className='table table-hover mt-3'>
            <thead>
              <tr>
                <th>Client Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.bookClients.map((bookClient) => {
                return (
                  <BookClientRow key={bookClient.id} bookClient={bookClient} />
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default DisplayBookClientsList;
