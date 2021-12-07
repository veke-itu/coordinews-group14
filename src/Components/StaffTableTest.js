import Table from "react-bootstrap/Table";
import { getArticles } from "../DatabaseInteraction/db";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Stafftable() {
  const [Articles, setArticle] = useState();

  useEffect(() => {
    getArticles().then((Articles) => {
      console.log(Articles);
      const articlesMapped = Articles.map((wrapper) => {
        const mappedArticle = {

          Journalist: wrapper.attributes.Journalist,
          Busy: wrapper.attributes.Busy,
          Date: wrapper.attributes.Date,
          Photographer: wrapper.attributes.Photographer,
          Busy_Photographer: wrapper.attributes.Busy_Photographer,
          DatePhotographer: wrapper.attributes.DatePhotographer,
          
        };
        /** Add Article is not connected to database anymore */

        console.log(mappedArticle);

        return mappedArticle;
      });

      console.log("Processing Article", articlesMapped);
      setArticle(articlesMapped);
    });
  }, []);

  if (!Articles) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const columnTitles = Object.keys(Articles[0]);
  const columnLength = Object.keys(Articles[0]).length;
  const rowLength = Articles.length;

  return (
    <table class="table table-hover">
      <thead>
        <br></br>
       
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
            <td as={Link} to="/Staff">
              {/* TODO: Link Reference */}
              {/* <Button variant="light" as={Link} to="/Add_Article">Add Article</Button> */}
              <Button variant="light" as={Link} to="/StaffId">
                {Articles[index].StaffId}
              </Button>
            </td>
            
           
            <td>{Articles[index].Journalist}</td>
            <td>{Articles[index].Busy}</td>
            <td>{Articles[index].Date}</td>
        
     
            <td></td>
            <td>{Articles[index].Photographer}</td>
            <td>{Articles[index].Busy_Photographer}</td>
            <td>{Articles[index].DatePhotographer}</td>
           
           
   
        
        
            
          </tr>
        ))}
      </tbody>
    </table>
  );
}
