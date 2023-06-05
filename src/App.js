import React, { useState } from "react";
import "./styles.css";
import ItemDisplay from "./ItemDisplay";
import Border from "./Border";
import Form from "./Form";

export default function Resume() {
  const formConfig = [
    { type: "input", name: "name", mode: "singleEntry" },
    { type: "input", name: "Skills", mode: "multipleEntry" },
    { type: "input", name: "Interests", mode: "multipleEntry" }
  ];

  const [resumeData, setResumeData] = useState({
    Interests: [],
    Skills: []
  });

  return (
    <div className="Resume">
      <br></br>
      <h1>Resume</h1>
      <h2>{resumeData?.data?.name ? resumeData.data.name : "Name"}</h2>
      <hr />
      <br />
      {Object.keys(resumeData).map((key) =>
        key !== "data" ? (
          <Border>
            <ItemDisplay title={key} data={resumeData[key]} />
          </Border>
        ) : (
          <div></div>
        )
      )}
      <Form
        setResumeData={setResumeData}
        resumeData={resumeData}
        formConfig={formConfig}
      />
    </div>
  );
}
