import { NavLink } from "react-router-dom";
// requires navlink import for BackToHome
import BackToHome from "../../common/back-to-home";

const AboutPage = () => {
  return (
      <div>
        <h1>About This Application</h1>
    <p>
  A book repo using GraphQL-React-MongoDb and Lerna as a package manager. This repo is being updatedin in phases.
    </p>
          <BackToHome />
          <section style={{marginTop: '20px'}}>
    <ol>
<li>Node environment: 
  - Node 24.13.0 (LTS) - latest v25 non-stable version</li>
<li>Package-management:
  - npm 10.2.4 to npm v11.6.2
  - Lerna v5 to v9
</li>
<li>Client side:
- React-17 to React-18
- Compiler Vite
- ReactRouter-5 to v6
- Client-server - Apollo v3.5.5 to v4.0
</li>
    </ol>
    </section>
  </div>
);
}

export default AboutPage;