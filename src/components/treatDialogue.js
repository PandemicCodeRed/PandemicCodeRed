import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

class TreatDialog extends React.Component {
  handleVirusClick(color) {
    this.props.onClose(color);
  }

  render() {
    const {yellowCount, blackCount, redCount, blueCount} = this.props.virusCounts
    const {dismiss} = this.props
    return (
      <Dialog open={this.props.open} onBackdropClick={dismiss}>
        <div>
          <Button disabled={yellowCount === 0} onClick={() => this.handleVirusClick("yellow")}>Yellow</Button>
          <Button disabled={blackCount === 0} onClick={() => this.handleVirusClick("black")}>Black</Button>
          <Button disabled={redCount === 0} onClick={() => this.handleVirusClick("red")}>Red</Button>
          <Button disabled={blueCount === 0} onClick={() => this.handleVirusClick("blue")}>Blue</Button>
        </div>
      </Dialog>
    );
  }
}

export default TreatDialog;
