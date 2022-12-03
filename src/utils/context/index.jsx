import { createContext,  useState } from "react";


export const InstructorContext= createContext()

export const InstructorProvider = ({children}) => {
    const [instructor, setInstructor] = useState(true)
    
    return (
        <InstructorContext.Provider value={{instructor,setInstructor}}>
                 {children}
        </InstructorContext.Provider>
    )
}


export default InstructorProvider