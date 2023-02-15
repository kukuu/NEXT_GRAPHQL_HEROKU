import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { AwesomeLink } from '../components/AwesomeLink';

const AllLinksQuery = gql`
query ExampleQuery {
 
  people {
    id
    name
    address
    email
    phone
  }
}
`;

function Home() {
  const { data, loading, error, fetchMore } = useQuery(AllLinksQuery, {
    variables: { first: 3 },
  });

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  // const { endCursor, hasNextPage } = data?.peple.pageInfo;

  return (
    <div>
      <Head>
        <title>People</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto max-w-5xl my-20 px-5">
        <div>
          <h1 className="text-4xl font-bold">Awesome People</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.people.map((node, i) => (
           <AwesomeLink
            id={node.id}
           name={node.name}
            address={node.address}
            email={node.email}
            phone={node.phone}

         />
          ))}
        </div>
        {/* {hasNextPage ? (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded my-10"
            onClick={() => {
              fetchMore({
                variables: { after: endCursor },
              });
            }}
          >
            more
          </button>
        ) : (
          <p className="my-10 text-center font-medium">
            You've reached the end!
          </p>
        )} */}
      </div>
    </div>
  );
}

export default Home;
