import Table from 'react-bootstrap/Table';
import { getUsers, getArticles } from '../DatabaseInteraction/db';
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

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

export default function Articletable() {

    const [Articles, setArticle] = useState();

    useEffect(() => {
        getArticles().then((Articles) => {
            console.log(Articles)
            const articlesMapped = Articles.map(wrapper => { 
                const mappedArticle = {
                    ArticleId: wrapper.id,
                    Title: wrapper.attributes.Title,
                    Section: wrapper.attributes.Section,
                    Journalist: wrapper.attributes.Journalist,
                    Photographer: wrapper.attributes.Photographer, 
                    State: wrapper.attributes.State, 
                    Size: wrapper.attributes.Size,
                }

                console.log(mappedArticle)

                return mappedArticle

            })

            console.log('Processing Article', articlesMapped)
            setArticle(articlesMapped)

        })
    }, []);

    if (!Articles) {
        return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
      }

    const columnTitles = Object.keys(Articles[0])
    const columnLength = Object.keys(Articles[0]).length
    const rowLength = Articles.length
    console.log("ArticleTest", Articles)
    console.log("Column Test", columnTitles[0])
    console.log("Rower:", Articles[0].Photographer)

    return(
    <div>
    
    <Table responsive>
                    <thead>
                        <tr>
                        {Array.from({ length: columnLength }).map((_, index) => (
                            <th key={index}>{columnTitles[index]}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: rowLength }).map((_, index) => (
                            <tr>
                                {/* TODO: Ask for help on this one with TA's - My attempts with nested for loops and map functions broke */}
                                <td>{Articles[index].ArticleId}</td>
                                <td>{Articles[index].Title}</td>
                                <td>{Articles[index].Section}</td>
                                <td>{Articles[index].Journalist}</td>
                                <td>{Articles[index].Photographer}</td>
                                <td>{Articles[index].Size}</td>
                                <td>{Articles[index].State}</td>
                            </tr>               
                        ))}
                        
                    </tbody>
    </Table>
    </div>
    )
}