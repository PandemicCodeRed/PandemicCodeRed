  constructor(){
    super()
    this.state={
      name: '',
      translate: '',
      playerOneLocation: '',
      blackStatus: '',
      cities: {}
    }

    this.handleClick = this.handleClick.bind(this)
    this.treat = this.treat.bind(this)
  }

  // testing firebase database api console logging on frontend of map
  componentDidMount(){
    this.props.firebase.blackStatus().on('value', snapshot => {
      const blackStatus = snapshot.val()
      this.setState({blackStatus} //, () => {console.log(this.state)}

      );
    })

    this.props.firebase.playerOne().on('value', snapshot => {
      const playerOne = snapshot.val()
      this.setState({playerOneLocation: playerOne.Location}, () => {console.log(this.state)
      }
      );
    })

    this.props.firebase.cities().on('value', snapshot => {
      console.log('lllllllll');

      const cities = snapshot.val();
      this.setState({cities}) //, () => {console.log(this.state)})
      // console.log(citiesObject)
    });
  }

  //location, selectedColor, Status
  //remaining, selectedColorCount, cureStatus
  treat () {
    const {playerOneLocation, blackStatus} = this.state;
    const {blackCount} = this.state.cities[playerOneLocation]

    // if (this.cities[location].)
    const cityRef = this.props.firebase.cities().child(playerOneLocation)
    cityRef.update({blackCount: blackCount - 1}, () => {
      // this.setState({[this.state.cities[playerOneLocation].blackCount]: blackCount - 1}, () => {console.log(this.state.cities[playerOneLocation])}
      // )
      console.log(this.state);

    })

  }