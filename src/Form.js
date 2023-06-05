import React, { useState, useEffect } from "react";

function Form({ setResumeData, resumeData, formConfig }) {
  const [data, setData] = useState();

  useEffect(() => {}, []);

  const handleOnChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };

  const handleOnclick = (e, config) => {
    if (config.mode === "singleEntry") {
      setResumeData({ ...resumeData, data });
    } else {
      let test = config.name;
      let newData = [...resumeData[test], data[test]];
      setResumeData({ ...resumeData, [test]: newData });
    }
  };

  const renderFeild = (config) => {
    return (
      <>
        <input
          placeholder={config.name}
          onChange={handleOnChange}
          name={config.name}
        />
        <button onClick={(e) => handleOnclick(e, config)}>Add</button>
      </>
    );
  };

  return (
    <>
      <h1>Form</h1>
      {formConfig.map((item) => renderFeild(item))}
    </>
  );
}

export default Form;
