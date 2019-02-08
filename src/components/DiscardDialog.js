import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import { withFirebase } from './Firebase'

class DiscardDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      discard: null,
      newHand: [],
    }
  }

  addDiscard = (card) => {
    this.setState({discard: card.name})
  }

  componentDidUpdate(prevProps, prevState) {
    const oldHand = prevState.newHand.map(card => card.name);
    const newHand = this.state.newHand.map(card => card.name);
    if (newHand.some(cardName => oldHand.includes(cardName) === false)) {
      const {activePlayer, playerDeck, drawCount} = this.props;
      let updates = {}
      updates[`/${activePlayer}/hand`] = [...this.state.newHand]
      updates['/playerDeck'] = playerDeck.slice(0, playerDeck.length - 1)
      updates['/drawCount'] = drawCount - 1
      this.props.firebase.database().update(updates, () => {
        this.props.closeDialog(this.props.drawCount)
      })
    }
  }

  render() {
    const {playerHand, playerDeck} = this.props
    const illegalHand = [...playerHand, playerDeck[playerDeck.length - 1]]
    return (
      <Dialog open={this.props.open}>
        {illegalHand.map(card => {
        return (
            <Button
              key={card.name}
              disabled={card.name === this.state.discard}
              onClick={() => {
                this.addDiscard(card);
              }}
            >
              {card.name}
            </Button>
          )})}
          <Divider />
            <Button
            disabled={this.state.discard === null}
            onClick={() => {
            const newHand = illegalHand.filter(card => card.name !== this.state.discard)
            this.setState({newHand}, () => console.log('Hand will be:', this.state.newHand))
            }}
          >
            Discard
          </Button>
      </Dialog>
    );
  }
}

export default withFirebase(DiscardDialog);
