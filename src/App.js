import './App.css';

function App() {
  return (
    <div className="main">
      <div className="left">
        <br />
        <div className="profile-img">
          <img src="Jitendra.jpeg" alt="Profile" />
        </div>
        <div className="box-1">
          <div className="heading">
            <p>CONTACT</p>
          </div>
          <p className="p1">
            <i className="material-icons icons1">call</i>+91 73872862
          </p>
          <p className="p1">
            <i className="material-icons icons1">email</i>jitendra@gmail.com
          </p>
        </div>

        <div className="box-1">
          <div className="heading">
            <p>LANGUAGES</p>
          </div>
          <p className="p1">
            HTML
            <div className="skill-container">
              <div className="skill html"></div>
            </div>
          </p>
          <p className="p1">
            CSS
            <div className="skill-container">
              <div className="skill css"></div>
            </div>
          </p>
          <p className="p1">
            JAVASCRIPT
            <div className="skill-container">
              <div className="skill js"></div>
            </div>
          </p>
          <p className="p1">
            React
            <div className="skill-container">
              <div className="skill React"></div>
            </div>
          </p>
          <p className="p1">
            Node Js
            <div className="skill-container">
              <div className="skill Nodejs"></div>
            </div>
          </p>
          <p className="p1">
            java
            <div className="skill-container">
              <div className="skill java"></div>
            </div>
          </p>
        </div>
        <br />
        <div className="box-1">
          <div className="heading">
            <p>SKILLS</p>
          </div>
          <p className="p1">
            WEBSITE DESIGN
            <div className="skill-container">
              <div className="skill web"></div>
            </div>
          </p>
        </div>
        <br />
        <div className="box-1">
          <div className="heading">
            <p>HOBBIES</p>
          </div>
          <div className="h-div">
            <i className="material-icons icons2">camera_roll</i>
            <i className="material-icons icons2">music_note</i>
            <i className="material-icons icons2">motorcycle</i>
            <i className="material-icons icons2">border_color</i>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="name-div">
          <h1>Jitendra Yadav</h1>
          <p>WEBSITE DESIGNER</p>
        </div>

        <div className="box-2">
          <h2>
            ABOUT ME <i className="material-icons icons3" style={{ fontSize: '28px' }}>
              perm_identity
            </i>
          </h2>
          <p className="p2">
            I am a highly motivated and enthusiastic professional with a passion for exploring new technologies and staying at the forefront of industry advancements. Ready to leverage my skills to drive innovation and contribute to team success.
          </p>
        </div>

        <div className="box-2">
          <h2>
            EDUCATION <i className="material-icons icons3">border_color</i>
          </h2>
          <p className="p3">
            2021-2025 <span>Bachelor of Engineering :</span>
          </p>
          <p className="p2">
            Bharati Vidyapeeth College of Engineering, Navi Mumbai, Maharashtra.
          </p>
          <p className="p3">
            2019-2021 <span>Higher School Certificate</span>
          </p>
          <p className="p2">
            Swami Vivekanand Junior College, Chembur, Mumbai
          </p>
          <p className="p2">HSC Percentage: 82.89</p>
          <p className="p3">
            2018-2019 <span>Secondary School Certificate :</span>
          </p>
          <p className="p2">
            Swami Vivekanand Kansith Vidyalaya, Kurla, Mumbai
          </p>
          <p className="p2">SSC Percentage: 91.40</p>
        </div>
        <div className="box-2">
          <h2>
            Projects <i className="material-icons icons3">folder</i>
          </h2>
          <p className="p3">E-Learning Website: <span></span></p>
          <p className="p2">
            Proficiently contributed to the development of an e-learning web app utilizing React, Node Js, MongoDB, and other relevant technologies.
          </p>
          <p className="p3">Book Rental Website<span> </span></p>
          <p className="p2">
            Book Rental Website using React, Node Js, MongoDB, and other relevant technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

