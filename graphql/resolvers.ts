export const resolvers = {
    Query: {
        people: (_, args, context) => {
           const res =  {edges:  [
                    {
                        cursor: '0',
                        node: {
                            id: '0',
                            name: 'John Doe',
                            address: '123 Main St',
                            email: 'cvbcxv',
                            phone: '555-555-5555'}
                    },
                    {
                        cursor: '1',
                        node: {
                            id: '1',
                            name: 'John Doe',
                            address: '123 Main St',
                            email: 'cvbcxv',
                            phone: '555-555-5555'}
                    },
                    {
                        cursor: '2',
                        node: {
                            id: '2',
                            name: 'Jane Doe',
    
                            address: '123 Main St',
                            email: 'xcvbxc',
                            phone: '555-555-5555'}
                    },
                    {
                        cursor: '3',
                        node: {
                            id: '3',
                            name: 'Jane Doe',
                            address: '123 Main St',
                            email: 'xcvbxc',
                            phone: '555-555-5555'}
                    },
                ],
                pageInfo:{
                    hasNextPage: true,
                    endCursor: '3'
                }
            }
            res.edges = res.edges.slice(args.first);
            return res;
        }
       

}}

// const fakeData = [];
// for (let i = 0; i < 2000; i++) {
//   fakeData.push({
//     name: faker.name.findName(),
//     address: faker.address.streetAddress(),
//     email: faker.internet.email(),
//     phone: faker.phone.phoneNumber(),
//   });
// }
// return fakeData;
// }
// return [
//     {
//         id: '0',
//         name: 'John Doe',
//         address: '123 Main St',
//         email: 'cvbcxv',
//         phone: '555-555-5555'
//     },
//     {
//         id: '1',
//         name: 'John Doe',
//         address: '123 Main St',
//         email: 'cvbcxv',
//         phone: '555-555-5555'
//     },
//     {
//         id: '2',
//         name: 'Jane Doe',
//         address: '123 Main St',
//         email: 'xcvbxc',
//         phone: '555-555-5555'
//     },
//     {
//         id: '3',
//         name: 'Jane Doe',
//         address: '123 Main St',
//         email: 'xcvbxc',
//         phone: '555-555-5555'
//     },
//     {
//         id: '4',
//         name: 'Priya Doe',
//         address: '123 Main St',
//         email: 'xcvbxc',
//         phone: '555-555-5555'
//     },]