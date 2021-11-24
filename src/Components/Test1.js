import Table from 'react-bootstrap/Table';
import { getUsers, getArticles } from '../DatabaseInteraction/db';
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
    const [Articles, setArticle] = useState();

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

                return mappedUser
            })

            console.log(usersMapped)
            console.log(usersMapped.id)
            console.log(Object.keys(usersMapped[0]))

            setUsers(usersMapped);
            // setId();
            // setUsername();
        });
    }, []);

    useEffect(() => {
        getArticles().then((Articles) => {
            console.log(Articles)
            const articlesMapped = Articles.map(wrapperA => { 
                console.log('Processing user', wrapperA.id)
                const attributesA = wrapperA.attributes
                console.log('Processing Attributes', wrapperA.attributes)

                const mappedArticle = {
                    title: wrapperA.attributes.Title,
                    journalist: wrapperA.attributes.Journalist
                }

                console.log(mappedArticle)

                return mappedArticle

            })

            console.log('Processing Article', articlesMapped)
            setArticle(articlesMapped)

        })
    }, []);

// console.log(Articles)
// console.log(Articles[0].title)
// const articlesNames = Object.keys(Articles[0])
// console.log(articlesNames)
// const articlesNamesL = articlesNames.length

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
                        {Array.from({ length: varNamesL }).map((_, index) => (
                            <tr>
                                <td>{index}</td>
                                {Array.from({ length: varNamesL }).map((_, index) => (
                                    <td key={index}>{varNames[index]}</td>
                                ))}
                            </tr>               
                        ))}
                        
                    </tbody>
    </Table>
    </div>
    )
}