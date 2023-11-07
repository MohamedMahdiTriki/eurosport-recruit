import { TabsBody } from '@material-tailwind/react'
import { CardDefault } from './card-default'
import { Player } from '../interfaces/player'
import { FC, useEffect } from 'react'
import { gql, useSuspenseQuery } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, playerAction } from '../store/index'

const PLAYERS = gql`
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
`

export const PageContent: FC = () => {
    const { data } = useSuspenseQuery<RootState>(PLAYERS)
    console.log({ data })
    const dispatch = useDispatch()

    useEffect(() => {
        if (data !== undefined) {
            dispatch(playerAction.getPlayers(data.players))
        }
    }, [data, dispatch])

    const players = useSelector((state: RootState) => state.players)

    return (
        <TabsBody>
            {players.map((player: Player) => (
                <CardDefault key={player.id} {...player}></CardDefault>
            ))}
        </TabsBody>
    )
}
