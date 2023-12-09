import type {MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        {title: "gurmeo.io"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export default function Index() {
    return (
        <div className="container">
            <header>
                <h1 className="text__abc">Finda</h1>
            </header>
            <h2 className="text__abc">
                We leverage generative AI to provide cutting-edge solutions for excellence in healthcare.
            </h2>
            <hr className="full_width"/>
            <div className="block">
                <div className="text">
                    <p className="text__abc">
                        In the dynamic Barcelona tech landscape, Finda stands out as a pivotal force, strategically
                        uniting cutting-edge technology with healthcare excellence. Under the guidance of José María
                        Caravaca Torres, our specialized team excels in deep tech and performance, harnessing the power
                        of generative AI to propel medical research and elevate operational efficiency.<br/><br/>
                        Acknowledging the historical challenges and fleeting opportunities within healthcare, Finda
                        strategically positions itself at the crossroads of technology and healthcare. Through the
                        innovative integration of generative AI, we sculpt a dynamic ecosystem, inviting companies and
                        partners to collaborate in shaping the future and harnessing AI's transformative potential for
                        lasting change.<br/><br/>
                        In the intricate dynamics of the healthcare software market, where providers and payors grapple
                        with slim margins and sluggish processes, Finda skillfully addresses inefficiencies. Our
                        commitment to cutting-edge innovation is evident in automating manual processes like
                        transcription and coding in patient-doctor interactions.<br/><br/>
                        Our distinctive approach takes center stage as we leverage multimodal Large Language Models
                        (LLMs) to streamline diagnosis coding. By unifying unstructured physician notes, lab panels, and
                        imaging, we optimize processes and reduce administrative back-and-forth with payors. This
                        automation seamlessly extends into revenue cycle management, leveraging our advantageous
                        position in the documentation space.<br/><br/>
                        At our core, Finda is devoted to unraveling healthcare inefficiencies through the transformative
                        power of generative AI. Positioned at the forefront of tech innovation, we seamlessly integrate
                        technology and healthcare, paving the way for a more efficient and effective future.
                    </p>
                    <div className="block__spacer">&nbsp;</div>
                    <p>
                        <a href="" className="link">
                            Read more about Finda
                        </a>
                    </p>
                    <div className="block__spacer">&nbsp;</div>
                </div>
                <div className="image">
                    <img style={{maxWidth: '100%'}}
                         src="/images/GettyImages-1150927886.jpg"
                         alt="Junge Frau Porträt"/>
                </div>
            </div>

            <div className="services-container">

                <div style={{padding: '2rem'}}>
                    <h3 style={{margin: '0', padding: '0'}}>Services</h3>
                    <p className="h2">
                        We view our work as an expansion of possibilities, which is why we create multi-functional
                        designs.
                    </p>
                </div>

                <div className="service-item">

                    <div className="nested-div">
                        <h3 className="add-bullet">AI-Driven Insights &amp; QR Integration</h3>
                        <p>
                            Leverage Finda's generative AI expertise for personalized treatment plans, improving patient
                            outcomes and operational efficiency through advanced analytics.
                        </p>
                    </div>

                    <div className="nested-div">
                        <h3>Deep-Linking &amp; QR Integration</h3>
                        <p>
                            Elevate healthcare strategy with seamless AI & QR integration. Ensure optimized engagement,
                            reliable attribution, and effortless QR code generation. Transform QR codes into powerful
                            tools for enhanced patient engagement.
                        </p>
                    </div>

                    <div className="nested-div">
                        <h3>Strategic Healthcare &amp; AI Integration</h3>
                        <p>
                            Propel healthcare into the digital age with Finda's expertise. Seamlessly integrate
                            generative AI, shaping strategy, and implementing robust data governance for lasting
                            positive impacts.
                        </p>
                    </div>

                    <div className="nested-div">
                        <h3 className="add-bullet">Web Performance  &amp; Monitoring</h3>
                        <p>
                            Tackle healthcare website challenges with Finda's expertise. Ensure optimal performance,
                            real-time monitoring, and enhanced online presence, leading to improved patient engagement
                            and conversions.
                        </p>
                    </div>

                    <div className="nested-div">
                        <h3>Architecture Design  &amp; Optimization</h3>
                        <p>
                            Finda specializes in refining healthcare structures, maximizing cloud resources for
                            significant cost savings. Tailored designs empower your digital infrastructure for success.
                        </p>
                    </div>

                    <div className="nested-div">
                        <h3>Software Engineering &amp; Prototyping</h3>
                        <p>
                            Address healthcare code complexities with Finda's expertise. Receive streamlined, top-tier
                            code optimizing performance, saving valuable time and resources, meeting the highest
                            industry standards.
                        </p>
                    </div>

                </div>

            </div>

            <div style={{marginTop: '8rem'}}>

                <p>
                    <a href="" style={{fontWeight: 'bold'}} className="link h2">
                        Book a call
                    </a>
                </p>

            </div>
            <hr className="full_width"/>
            <footer>
                <p>
                    <b>finda.health is brought to you by: </b>
                </p>

                <p>
                    logi Venture Capital GmbH<br/>
                    Plantagenstr. 30<br/>
                    13347 Berlin <br/>
                    Germany <br/>
                    E-Mail: <a href="mailto:hola@finda.health" className="link">hola@finda.health</a>
                </p>

                <p>
                    <b>Management Board:</b><br/>
                    José María Caravaca Torres &amp; Ulrich Sauerwein
                </p>

                <p>
                    Registered at Amtsgericht Charlottenburg Berlin, HRB 239469 B
                </p>

                <p style={{margin: '3em 0'}}>
                    <small>
                        <em>
                            Copyright © 2024 logi Venture Capital GmbH
                        </em>
                    </small>
                </p>

            </footer>
        </div>
    );
}
