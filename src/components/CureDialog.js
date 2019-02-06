import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

class CureDialog extends React.Component {
  constructor() {
    super();
    this.state = { discards: new Set([]) };
    this.addDiscard = this.addDiscard.bind(this);
  }
  handleCureSubmit(color, discards) {
    this.props.onClose(color, discards);
  }

  addDiscard(card) {
    this.setState({ discards: this.state.discards.add(card) });
  }

  render() {
    let color = "";
    let hand = this.props.colorHand;
    if (hand.length) {
      color = hand[0].color;
    }
    let discards = [];
    this.state.discards.forEach(discard => {
      discards.push(discard);
    });
    let cureButtonDisabled = true;
    if (discards.length >= 4) {
      cureButtonDisabled = false;
    }
    return (
      <Dialog open={this.props.open}>
        <div>
          <div>
            Select Discards:{" "}
            {discards.map(card => (
              <div key={card.name}>{card.name}</div>
            ))}
          </div>
          {hand.map(card => (
            <Button
              key={card.name}
              onClick={() => {
                this.addDiscard(card);
              }}
            >
              {card.name}
            </Button>
          ))}
          <Button
            disabled={cureButtonDisabled}
            onClick={async () => {
              await this.handleCureSubmit(color, discards);
              await this.setState({ discards: new Set([]) });
            }}
          >
            Cure {color}
          </Button>
        </div>
      </Dialog>
    );
  }
}

export default CureDialog;
