import {useState, useEffect} from "react";
import "./style.css";

function FAQ() {
    const questions = [
        {
            q: "What is this site?",
            a: "This is a database for cryptids of all kinds. Users can log their own cryptids, detailing what every cryptozoologist needs to know when encountering such a creature in the wild."
        },
        {
            q: "...why?",
            a: "Shut up."
        },
        {
            q: "Are these cryptids...real?",
            a: "Most likely not! Unless someone just posts a normal animal, take any info from this site with a grain of salt."
        },
        {
            q: "Are you liable for any posts the users make that might not be strictly legal?",
            a: "Good question! Absolutely not! If you create an account and post here, either follow the rules of posting (and the rules of society), or you'll be entirely liable for your actions."
        },
    ]
    return(
        <div id = "faq">
            
            {
                questions.map(item => {
                    return(
                        <div className = "question">
                            <h3>Q: {item.q}</h3>
                            <hr />
                            <p>{item.a}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FAQ;