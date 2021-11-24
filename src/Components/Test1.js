import Table from 'react-bootstrap/Table';
import { getUsers } from '../DatabaseInteraction/db';
import { useEffect, useState } from "react";

const dataTest = [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "katie-zaferes.png",
        stats: 5,
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: "wedding-photography.png",
        stats: 5,
        location: "Online",
        openSpots: 27,
    }]

const varNames = Object.keys(dataTest[0])   
const varNamesL = varNames.length

export default function Test() {

    const [Users, setUsers] = useState();

    useEffect(() => {
        getUsers().then((Users) => {
            console.log(Users)
            const usersMapped = Users.map(wrapper => { 
                console.log('Processing user', wrapper.id)
                const attributes = wrapper.attributes
                console.log('Processing Attributes', wrapper.attributes)

                const mappedUser = {
                    id: wrapper.id,
                    username: wrapper.attributes.username
                }

                console.log('Processing FullUser', mappedUser)

                // mappedUser.username = attributes.username
                return mappedUser
            })

            console.log(usersMapped)
            console.log(Object.keys(usersMapped[0]))

            setUsers(usersMapped);
        });
    }, []);
    
const testNames = Object.keys(Users[0])
const testNamesL = testNames.length
console.log(testNames[0])

    return(
    <div>
    
    <Table responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        {Array.from({ length: testNamesL }).map((_, index) => (
                            <th key={index}>{testNames[index]}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: varNamesL }).map((_, index) => (
                            <tr>
                                <td>{index}</td>
                                {Array.from({ length: varNamesL }).map((_, index) => (
                                    <td key={index}>Table cell {index + 1}</td>
                                ))}
                            </tr>               
                        ))}
                        
                    </tbody>
    </Table>
    </div>
    )
}