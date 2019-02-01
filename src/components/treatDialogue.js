import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

class TreatDialog extends React.Component {
  handleVirusClick(type) {
    this.props.onClose(type);
  }

  render() {
    return (
      <Dialog open={this.props.open}>
        <div>
          <Button onClick={() => this.handleVirusClick("yellow")}>
            Yellow
          </Button>
          <Button onClick={() => this.handleVirusClick("black")}>Black</Button>
          <Button onClick={() => this.handleVirusClick("red")}>Red</Button>
          <Button onClick={() => this.handleVirusClick("blue")}>Blue</Button>
        </div>
      </Dialog>
    );
  }
}

export default TreatDialog;
