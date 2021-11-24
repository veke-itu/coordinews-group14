import Table from 'react-bootstrap/Table';

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
    return(
    <div>
    
    <Table responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        {Array.from({ length: varNamesL }).map((_, index) => (
                            <th key={index}>{varNames[index]}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        {Array.from({ length: varNamesL }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        </tr>
                    </tbody>
    </Table>
    </div>
    )
}