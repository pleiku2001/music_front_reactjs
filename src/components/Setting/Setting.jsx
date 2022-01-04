import { useState } from "react";
import "./App.css";
import axios from "axios";
function Setting() {
  const [file, setFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const data = new FormData();
      data.append("uploaded_file", file);
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err)
        console.log("co loi")

      }
    }else{
      console.log("khong Loi~")
    }
  };
  return (
    <div className="App">
      <form
        action=""
        encType="multipart/form-data"
        method="post"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          name="uploaded_file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input type="submit" value="Get me the stats!" />
      </form>
    </div>
  );
}

export default Setting;
