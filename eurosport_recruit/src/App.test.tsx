import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { expect, test } from '@jest/globals'
import App from './App.tsx'

test('Renders the main page', () => {
    render(<App />)
    expect(true).toBeTruthy()
})
