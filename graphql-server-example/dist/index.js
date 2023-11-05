import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Player" type defines the queryable fields for every player in our data source.
  type Player {
    id: String
    firstName: String
    lastName: String
    imageUrl: String
    wins: Int
    losses: Int
    matches: Int
    winningGames: [String]
    weight: Float
    height: Float
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "players" query returns an array of zero or more Players (defined above).
  type Query {
    players: [Player]
  }
`;
const players = [{
        id: "1",
        firstName: "Novak",
        lastName: "Djokovic",
        imageUrl: "https://resize.elle.fr/square/var/plain_site/storage/images/people/la-vie-des-people/news/novak-djokovic-va-etre-papa-pour-la-seconde-fois-3428033/76845116-1-fre-FR/Novak-Djokovic-va-etre-papa-pour-la-seconde-fois.jpg",
        wins: 175,
        losses: 10,
        matches: 185,
        winningGames: ["6-4 6-0"],
        weight: 80,
        height: 1.90
    },
    {
        id: "2",
        firstName: "Raphael",
        lastName: "Nadal",
        imageUrl: "https://media.richardmille.com/wp-content/uploads/2010/12/23170408/nadal_mobile.jpg?dpr=1&width=2000",
        wins: 200,
        losses: 30,
        matches: 230,
        winningGames: ["6-4 6-0", "6-0 7-5", "7-6 7-6"],
        weight: 75,
        height: 1.85
    },
    {
        id: "3",
        firstName: "Roger",
        lastName: "Federer",
        imageUrl: "https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2021/07/03/3166778-64891008-2560-1440.jpg",
        wins: 220,
        losses: 10,
        matches: 230,
        winningGames: ["6-4 6-0", "6-0 7-5", "7-6 7-6", "6-7 7-5 6-1"],
        weight: 70,
        height: 1.82
    },
    {
        id: "4",
        firstName: "Gael",
        lastName: "Monfils",
        imageUrl: "https://www.fft.fr/sites/default/files/styles/image_16_9/public/gael_monfils_-_titre_stockholm_2023.jpg?h=81888971&itok=YUznujrK",
        wins: 100,
        losses: 20,
        matches: 120,
        winningGames: ["6-4 6-0", "6-0 7-5", "7-6 7-6", "6-7 7-5 6-1"],
        weight: 80,
        height: 1.93
    },
    {
        id: "5",
        firstName: "Wilfried",
        lastName: "Tsonga",
        imageUrl: "https://www.voici.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2Fa5a281c5-f285-47fc-aa08-246a52dadbef.2Ejpeg/2049x1536/quality/80/jo-wilfried-tsonga.jpeg",
        wins: 80,
        losses: 60,
        matches: 140,
        winningGames: ["6-4 6-0", "6-0 7-5", "7-6 7-6", "6-7 7-5 6-1"],
        weight: 83,
        height: 1.83
    },
    {
        id: "6",
        firstName: "Carlos",
        lastName: "Alcaraz",
        imageUrl: "https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/sport/tennis-carlos-alcaraz-remporte-son-premier-wimbledon-en-battant-novak-djokovic-4194444/60391327-3-fre-FR/Tennis-Carlos-Alcaraz-remporte-son-premier-Wimbledon-en-battant-Novak-Djokovic.jpg",
        wins: 70,
        losses: 120,
        matches: 190,
        winningGames: ["6-4 6-0", "6-0 7-5", "7-6 7-6", "6-7 7-5 6-1"],
        weight: 80,
        height: 1.80
    }];
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        players: () => players,
    },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
