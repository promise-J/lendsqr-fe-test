import {render} from "@testing-library/react"
import Dashboard from "../pages/dashboard/Dashboard"

describe('Dashboard', ()=>{
    it('should work', ()=>{
        const {getByRole} = render(<Dashboard />)
        expect(2).toBe(2)
    })
})

export {}