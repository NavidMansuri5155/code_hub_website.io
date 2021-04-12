import React from 'react'
import "./About.css"


export default function About() {
    return (
        <div>
            <section className="header-bar">
                <h1 className="dr-norman"> Mark Zuckerberg</h1>
                <p className="header-text"> Mark Zuckerberg, Founder, Chairman and Chief Executive Officer</p>
            </section>

            <section className="img-sec">
                <img src="https://about.fb.com/wp-content/uploads/2019/01/mz.jpg?w=1536" alt="Mark Zuckerberg" className="norman-img" />
                <p className="img-text"> Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Facebook, Inc. and serves as its chairman, chief executive officer, and controlling shareholder </p>
            </section>
            <main className="timeline">
                <h2 className="main-heading">Here's a time line of Mark Zuckerberg life: </h2>
                <ul className="timeline-ul">
                    <li><b>1914</b> - Born in Cresco, Iowa</li>
                    <li><b>1933</b> - Leaves his family's farm to attend the University of Minnesota, thanks to a Depression era program known as the "National Youth Administration" </li>
                    <li><b>1935</b> - Has to stop school and save up more money. Works in the Civilian Conservation Corps, helping starving Americans. "I saw how food changed them", he said. "All of this left scars on me." </li>
                    <li><b>1937</b> - Finishes university and takes a job in the US Forestry Service</li>
                    <li><b>1938</b> - Marries wife of 69 years Margret Gibson. Gets laid off due to budget cuts. Inspired by Elvin Charles Stakman, he returns to school study under Stakman, who teaches him about breeding pest-resistent plants. </li>
                    <li><b>1941</b> - Tries to enroll in the military after the Pearl Harbor attack, but is rejected. Instead, the military asked his lab to work on waterproof glue, DDT to control malaria, disinfectants, and other applied science. </li>
                    <li><b>1942</b> - Receives a Ph.D. in Genetics and Plant Pathology </li>
                    <li><b>1944</b> - Rejects a 100% salary increase from Dupont, leaves behind his pregnant wife, and flies to Mexico to head a new plant pathology program. Over the next 16 years, his team breeds 6,000 different strains of disease resistent wheat - including different varieties for each major climate on Earth. </li>
                    <li><b>1945</b> - Discovers a way to grown wheat twice each season, doubling wheat yields </li>
                    <li><b>1953</b> - crosses a short, sturdy dwarf breed of wheat with a high-yeidling American breed, creating a strain that responds well to fertilizer. It goes on to provide 95% of Mexico's wheat. </li>
                    <li><b>1962</b> - Visits Delhi and brings his high-yielding strains of wheat to the Indian subcontinent in time to help mitigate mass starvation due to a rapidly expanding population </li>
                    <li><b>1970</b> - receives the Nobel Peace Prize</li>
                    <li><b>1983</b> - helps seven African countries dramatically increase their maize and sorghum yields </li>
                    <li><b>1984</b> - becomes a distinguished professor at Texas A&M University </li>
                    <li><b>2005</b> - states "we will have to double the world food supply by 2050." Argues that genetically modified crops are the only way we can meet the demand, as we run out of arable land. Says that GM crops are not inherently dangerous because "we've been genetically modifying plants and animals for a long time. Long before we called it science, people were selecting the best breeds."  </li>
                    <li><b>2009</b> - dies at the age of 95.</li>
                </ul>
                <p className="quote"> "Borlaug's life and achievement are testimony to the far-reaching contribution that one man's towering intellect, persistence and scientific vision can make to human peace and progress."<br /><br />-- Indian Prime Minister Manmohan Singh </p>
            </main>
            <footer className="external-link">
                <p className="wikipedia">  If you have time, you should read more about this incredible human being on his <a href="https://en.wikipedia.org/wiki/Mark_Zuckerberg">Wikipedia entry.</a></p>
            </footer>
            <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
            <p style={{textAlign:"center",margin:"1%"}}>©2021. All Rights Reserved. <a href="https://www.codehub.gr/">Code_Hub®</a></p>

        </div>
    )
}
