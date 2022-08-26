import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="info">
          <section name="bio" id="bio">
                <h1 name="name">Samuel Torres</h1>
                <div name="intro" class="intro">
                    Howdy 🤠! I am Computer Science Honors Student at Texas A&M University. I love using code to
                    help people in their daily lives. My main focus right now is backend web development. 
                </div>
            </section>
            <section class="experience" id="experience">
                <h2 >Experience</h2>
                <p>
                    <span class="experience_title">
                        <a href="" target="_blank">Arena Energy</a>
                    </span>
                    <br/>
                    Information Technology Intern
                    <br/>
                    June 2021 – August 2021
                </p>
                <p>
                    <span class="experience_title">
                        <a href="" target="_blank">Texas Education Consultants</a>
                    </span>
                    <br/>
                    Math & Science Tutor
                    <br/>
                    August 2019 – August 2020
                </p>
            </section>
            <section class="mobile" id="projects">
                <h2>Projects</h2>
                <br/>
                <a href="https://www.kanm.org/#/" target="_blank">KANM Student Radio</a>
                <br/>
                <a href="https://learned-poppy-54d.notion.site/POB-Phoenix-7f44e0416f77492cbc9fb6449376a30c" target="_blank">POB Phoenix</a> 
                 <br/>
                <a href="" target="_blank">Torres Brothers Garage</a>
                <br/>
                <a href="" target="_blank">Home Media Server</a> 
            </section>
            <section class="socials" id="socials">
                <h2>Contact</h2>
                <a href="mailto:someone@yoursite.com" target="_blank">Email</a>
                <a href="https://github.com/samuel-torres-code" target="_blank">GitHub</a> 
                <a href="https://www.linkedin.com/in/samuel-torres-7836711ba/" target="_blank">LinkedIn</a>
            </section>
        </div>
        <div class="projectGrid">
            <a class="card" href="https://www.kanm.org/#/" target="_blank">
                <div class="polaroid">
                    <img src="kanm_logo.png"/>
                    <div class="caption">
                        KANM Student Radio
                    </div>
                </div>
            </a>
            
            <a class="card" href="https://learned-poppy-54d.notion.site/POB-Phoenix-7f44e0416f77492cbc9fb6449376a30c" target="_blank">
                <div class="polaroid">
                    <img src="pob_phoenix.png"/>
                    <div class="caption">
                        POB Phoenix
                    </div>
                </div>

            </a>
            <a class="card" href="http://torresbrothers.com" target="_blank">
                <div class="polaroid">
                    <img src="cobra.png"/>
                    <div class="caption">
                        Torres Brothers Garage
                    </div>
                </div>
                
            </a> 
            <a class="card">
                <div class="polaroid">
                    <img src="openmediavault.png"/>
                    <div class="caption">
                        Home Media Server
                    </div>
                </div>

            </a>
        </div>
      </div>
    </div>
  );
}

export default App;
