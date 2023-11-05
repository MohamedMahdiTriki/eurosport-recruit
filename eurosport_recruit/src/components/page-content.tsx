import {
    TabsBody,
  } from "@material-tailwind/react";
import { CardDefault } from "./card-default";
import { Player } from "../interfaces/player"
import { FC, useEffect } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';
import { useDispatch, useSelector } from "react-redux";
import { playerAction } from '../store/index'

export const PageContent : FC = () => {
    const dispatch = useDispatch()
    const client = new ApolloClient({
        uri: 'http://localhost:4000/',
        cache: new InMemoryCache(),
        });
    useEffect(() => {
        client
        .query({
            query: gql`
            query GetPlayers {
                players {
                id
                firstName
                lastName
                imageUrl
                wins
                losses
                matches
                winningGames
                weight
                height
                }
            }
            `,
        })
        .then((result) => {
            dispatch(playerAction.getPlayers(result.data.players))
        });
    }, []) 

    const players= useSelector(state => state.players)


    if(players.length === 0) {
        return <p>There is no players</p>
    } else {
        return <ApolloProvider client={client}>
            <TabsBody>
                {players.map(( player: Player ) => (<CardDefault key={player.id} {...player}></CardDefault>))}
            </TabsBody>
        </ApolloProvider>
    }
    
}