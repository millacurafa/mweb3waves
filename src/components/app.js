import ReactDOM from "react-dom";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.authFunc = this.authFunc.bind(this);
  }
  authFunc() {
    const authData = {
      data: "Generated string from server",
      name: "Kolin Private v.0.1",
      icon: "images/favicon.ico",
      referrer: "https://demo.kolinplatform.com",
      successPath: "index.html"
    };
    if (WavesKeeper) {
      WavesKeeper.auth(authData)
        .then(auth => {
          console.log(auth); //displaying the result on the console
          /*...processing data */
        })
        .catch(error => {
          console.error(error); // displaying the result on the console
          /*...processing errors */
        });
    } else {
      alert("To Login WavesKeeper should be installed.");
    }
  }
  render() {
    return (
      <div className="col-lg-4 mx-auto py-2 bg-white">
        <div className="auto-form-wrapper">
          <div className="form-group">
            <img
              src="https://demo.kolinplatform.com/images/waveskeeper.png"
              className="img-fluid"
              style={{ filter: "contrast(110%)" }}
            />
          </div>
          <div className="text-block text-center my-3 text-small">
            <p className="text-black">Keep your Waves keys safe online</p>
          </div>

          <button
            className="btn btn-primary submit-btn btn-block"
            onClick={this.authFunc}
            href="#"
          >
            {" "}
            Login with Waves
            <svg height={12} width={10}>
              <path fill="#fff" d="M8,4,4,8,0,4,4,0Z" />
            </svg>
            keeper
          </button>

          <div className="text-block text-center my-3">
            <p>
              <span className="text-small font-weight-semibold">
                Do not have Waves keeper?{" "}
              </span>
              extension available for{" "}
              <a
                href="https://chrome.google.com/webstore/detail/waves-keeper/lpilbniiabackdjcionkobglmddfbcjo"
                className="text-black text-small font-weight-semibold"
              >
                Google Chrome
              </a>
              <span>{", "}</span>
              <a
                href="https://addons.mozilla.org/en-US/firefox/addon/waves-keeper/"
                className="text-black text-small font-weight-semibold"
              >
                Firefox{" "}
              </a>
              and{" "}
              <a
                href="https://www.microsoft.com/en-us/p/waves-keeper/9npz1hrq32nt"
                className="text-black text-small font-weight-semibold"
              >
                Microsoft Edge
              </a>
              <span>.</span>
            </p>
          </div>
          <div className="text-block text-center my-3">
            <p className="text-secondary small">
              Waves keeper is the safest way to interact with third-party web
              resources with Waves integrated functionality or DApps. Using
              Waves keeper, you can sign transactions and remain safe from
              malicious sites
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const app = document.getElementById("app");
if (app) {
  ReactDOM.render(<App />, app);
}
