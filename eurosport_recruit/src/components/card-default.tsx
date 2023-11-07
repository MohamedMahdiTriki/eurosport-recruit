import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from '@material-tailwind/react'
import { useState } from 'react'
import { Player } from '../interfaces/player'

export function CardDefault({
    id,
    firstName,
    lastName,
    imageUrl,
    wins,
    losses,
    winningGames,
    matches,
    weight,
    height,
}: Player) {
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(!open)
    return (
        <Card className="mt-6 w-96" id={id}>
            <CardHeader color="blue-gray" className="relative h-56">
                <img src={imageUrl} alt="card-image" />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {firstName} {lastName}
                </Typography>
                <Typography>Total Matches: {matches}</Typography>
                <Typography>Height: {height} M</Typography>
                <Typography>Weight: {weight} Kg</Typography>
                <Typography>Total Wins: {wins}</Typography>
                <Typography>Total Losses: {losses}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button onClick={handleOpen} variant="gradient">
                    Scores
                </Button>
                <Dialog open={open} handler={handleOpen}>
                    <DialogHeader>Winning Matches: </DialogHeader>
                    <DialogBody>
                        {winningGames.map((game, index) => (
                            <span key={index}> {game} </span>
                        ))}
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="gradient"
                            color="green"
                            onClick={handleOpen}
                        >
                            <span>Close</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </CardFooter>
        </Card>
    )
}
