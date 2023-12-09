import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "gurmeo.io" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
      <div className="container">
        <header>
          <h1 className="text__abc">Finda</h1>
        </header>
        <div className="block-spacer">&nbsp;</div>
        <div className="block-spacer">&nbsp;</div>
        <h2 className="text__abc">
          We leverage generative AI to provide cutting-edge solutions for excellence in healthcare.
        </h2>
        <div className="block-spacer">&nbsp;</div>
        <hr className="full_width" />
        <div className="block">
          <div className="text">
            <p className="text__abc">
              In the dynamic Barcelona tech landscape, Finda stands out as a pivotal force, strategically uniting cutting-edge technology with healthcare excellence. Under the guidance of José María Caravaca Torres, our specialized team excels in deep tech and performance, harnessing the power of generative AI to propel medical research and elevate operational efficiency.<br /><br />
              Acknowledging the historical challenges and fleeting opportunities within healthcare, Finda strategically positions itself at the crossroads of technology and healthcare. Through the innovative integration of generative AI, we sculpt a dynamic ecosystem, inviting companies and partners to collaborate in shaping the future and harnessing AI's transformative potential for lasting change.<br /><br />
              In the intricate dynamics of the healthcare software market, where providers and payors grapple with slim margins and sluggish processes, Finda skillfully addresses inefficiencies. Our commitment to cutting-edge innovation is evident in automating manual processes like transcription and coding in patient-doctor interactions.<br /><br />
              Our distinctive approach takes center stage as we leverage multimodal Large Language Models (LLMs) to streamline diagnosis coding. By unifying unstructured physician notes, lab panels, and imaging, we optimize processes and reduce administrative back-and-forth with payors. This automation seamlessly extends into revenue cycle management, leveraging our advantageous position in the documentation space.<br /><br />
              At our core, Finda is devoted to unraveling healthcare inefficiencies through the transformative power of generative AI. Positioned at the forefront of tech innovation, we seamlessly integrate technology and healthcare, paving the way for a more efficient and effective future.
            </p>
            <div className="block-spacer">&nbsp;</div>
            <p>
              <a href="/en/work/lightship" className="link">
                Read more about this project
              </a>
            </p>
            <div className="block-spacer">&nbsp;</div>
          </div>
          <div className="image">
            <img style={{ maxWidth: '100%' }}
                 src="/images/GettyImages-1150927886.jpg"
                 alt="Junge Frau Porträt" />
          </div>
        </div>
      </div>
  );
}
