import Parse from "parse";
import { useState } from "react";

export default function IdeaTable() {

    const Ideas = Parse.Object.extend("Ideas");
    const ideas = new Ideas();

    const [title, setTitle] = useState();
    const [ideaID, setIdeaID] = useState();
    const [section, setSection] = useState();
    const [source, setSource] = useState();
    const [visibility, setVisibility] = useState();
    const [lifetime, setlifetime] = useState();


    ideas.save()
    .then((idea) => {
        //Succes
        alert("New Idea added with IdeaID:" + idea.id);
    }, (error) => {
        //Save fails
        alert("Failed to add new Idea, with error code:" + error.message);
    })
}