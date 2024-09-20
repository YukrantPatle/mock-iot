import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Test from '@/app/dashboard/testing/page'
 
describe('Home', () => {
  it('Just Checking', () => {
    render(<Test/>)
 
    const heading = screen.getByTestId("test-head")
 
    expect(heading).toBeInTheDocument()
  })
})