import React, { Dispatch, FunctionComponent, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import CloudUpload from "@material-ui/icons/CloudUpload";
import useStyles from "../../styles/styles";
import { Paper } from "@material-ui/core";

const CustomeDropZone: FunctionComponent<{ setFile: Dispatch<any> }> = ({
  setFile,
}) => {
  const styles = useStyles();
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragReject } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/jpeg,image/png,audio/mpeg",
  });
  return (
    <>
      <div {...getRootProps()}>
        <Paper variant="outlined" className={styles.customeFileInput}>
          <CloudUpload className={styles.icon} />
          <input {...getInputProps()} />
          {isDragReject ? (
            <p style={{ color: "red" }}>
              Sorry this application only accept Image & MP3
            </p>
          ) : (
            <div>
              <p>Drag and drop file</p>
              <p>Only Image and MP3 files are supported</p>
            </div>
          )}
        </Paper>
      </div>
    </>
  );
};

export default CustomeDropZone;
