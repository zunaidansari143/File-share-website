// import logo from "./logo.svg";
import "./App.css";
import { useRef, useState, useEffect } from "react";
import { uploadFile } from "./api";
import CopyToClipboard from "react-copy-to-clipboard";

function App() {
  const [file, setfile] = useState("");
  const [result, setresult] = useState("");
  const [copyed, setcopyed] = useState(false);
  // console.log(copyvar);

  const logo =
    "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  const FileInputRef = useRef();

  const onUploadClick = () => {
    FileInputRef.current.click();
  };
  useEffect(() => {
    const getimages = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let responce = await uploadFile(data);
        setresult(responce.path);
      }
    };
    getimages();
  }, [file]);
  // const copyvalue= () => {
  //   navigator.clipboard.writeText(copyvar)
  //   alert('copy succesfully')
  // }
  function download(){
    
  }

  return (
    <>
      <div className="container">
        <div className="imgbox">
          <img src={logo} alt="banner" />
        </div>
        <div className="file-wrapper">
          <h1>Simple File sharing !</h1>
          <p>Upload and share the download link.</p>
          <button onClick={() => onUploadClick()}>Upload file</button>
          <input
            type="file"
            ref={FileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setfile(e.target.files[0])}
          />

          <div className="url-link-click ">
            {/* <input
              value={result}
              className="input-copy"
              onChange={({ target: { value } }) =>
                setcopyed({ value, copyed: false })
              }
            /> */}
            {/* <CopyToClipboard
              text={result}
              onCopy={() => setcopyed({ copyed: true })}
            >
              <button className="copy-btn">Copy Link</button>
            </CopyToClipboard> */}
            <button className="copy-btn" onClick={ () =>{download()}}>Download now</button> &nbsp;

            <a  href={result} value={result} >{result} </a> &nbsp;&nbsp;&nbsp;
          </div>
          <div className="url-link">
            <input
              value={result}
              className="input-copy"
              onChange={({ target: { value } }) =>
                setcopyed({ value, copyed: false })
              }
            />
            <CopyToClipboard
              text={result}
              onCopy={() => setcopyed({ copyed: true })}
            >
              <button className="copy-btn">Copy Link</button>
            </CopyToClipboard>

            {/* <a  href={result} value={result}  onCopy={(e) =>setcopyvar(e.target.value)}>{result} </a> &nbsp;&nbsp;&nbsp; */}
          </div>
          {copyed ? <span style={{ color: "red" }}>Copied.</span> : null}
        </div>
      </div>
    </>
  );
}

export default App;
