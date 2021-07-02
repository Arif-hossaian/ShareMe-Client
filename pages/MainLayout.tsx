import { Button } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "../styles/styles";
import CustomeDropZone from "./../src/components/CustomeDropZone";
import RenderFiles from './../src/components/RenderFiles';


const MainLayout = () => {
  const styles = useStyles();
  const [file, setFile] = useState(null);
  return (
    <>
      <div>Got a file </div>
      <div>
        <CustomeDropZone setFile={setFile} />
        {file && <RenderFiles file={{
          formate:file.type.split("/")[1],
          name:file.name,
          sizeInBytes:file.size
        }}/>}
      </div>
      <div>
      <Button variant="contained" color="primary">lol</Button>
      </div>
    </>
  );
};

export default MainLayout;
