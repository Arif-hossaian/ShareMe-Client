import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  customeFileInput: {
    //CustomeFileInput.jsx
    backgroundColor: "#eee !important",
    textAlign: "center",
    cursor: "pointer",
    color: "#333",
    padding: "50px 110px",
    marginTop: "20px",
    borderStyle: "dashed !important",
    borderColor: "black !important"
  },
  icon: {
    //CustomeFileInput.jsx
    marginTop: "16px",
    color: "#888888 !important",
    fontSize: "62px !important",
  },
}));
