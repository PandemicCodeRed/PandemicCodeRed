import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

class CardDialog extends React.Component {
  handleCardClick(card) {
    this.props.onClose(card);
  }

  render() {
    return (
      <Dialog open={this.props.open}>
        <div>
          <Button onClick={() => this.handleCardClick("direct")}>
            Direct Flight
          </Button>
          <Button onClick={() => this.handleCardClick("charter")}>Charter Flight</Button>
        </div>
      </Dialog>
    );
  }
}

export default CardDialog;
