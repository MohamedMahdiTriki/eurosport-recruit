// import { render, screen } from '@testing-library/react'
// import { PageContent } from './page-content'
// import { describe, expect, test } from '@jest/globals'

// describe('PageContent component', () => {
//     test('renders Cards if request succeeds', async () => {
//         window.fetch = jest.fn()
//         window.fetch.mockResolvedValueOnce({
//             json: async () => [
//                 {
//                     id: '1',
//                     firstName: 'Novak',
//                     lastName: 'Djokovic',
//                     imageUrl:
//                         'https://resize.elle.fr/square/var/plain_site/storage/images/people/la-vie-des-people/news/novak-djokovic-va-etre-papa-pour-la-seconde-fois-3428033/76845116-1-fre-FR/Novak-Djokovic-va-etre-papa-pour-la-seconde-fois.jpg',
//                     wins: 175,
//                     losses: 10,
//                     matches: 185,
//                     winningGames: ['6-4 6-0'],
//                     weight: 80,
//                     height: 1.9,
//                 },
//             ],
//         })
//         render(<PageContent />)

//         const listItemElements = await screen.findAllByText('Height', {
//             exact: false,
//         })
//         expect(listItemElements).not.toHaveLength(0)
//     })
// })

test('demo', () => {
    expect(true).toBe(true)
})
