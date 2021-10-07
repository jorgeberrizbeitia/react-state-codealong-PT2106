import React, {Component, Fragment} from "react"
import allWizards from "../wizards.json"

class WizardList extends Component {

  state = {
    wizardsDisplayed: allWizards.slice(0, 3)
  }

  handleAdd = () => {
    console.log("Adding a Wizard")

    // we need to find a random index
    const randomIndex = Math.floor(Math.random() * allWizards.length)
    const randomWizard = allWizards[randomIndex]

    // we need to add that obj to the state
    const clonedWizards = [ ...this.state.wizardsDisplayed ]
    clonedWizards.unshift(randomWizard)
    this.setState( { wizardsDisplayed: clonedWizards } )

    // this.setState( { wizardsDisplayed: [ randomWizard, ...this.state.wizardsDisplayed ] } )

  }

  sortingHat = () => {
    console.log("Sorting Wizards!")

    // sort array
    const clonedWizards = [ ...this.state.wizardsDisplayed ]
    clonedWizards.sort((a, b) => {
      return a.name > b.name ? 1 : -1

      // return a.name.localeCompare(b.name)

      // if (a.name > b.name) {
      //   return 1
      // } else {
      //   return -1
      // }
    })

    // update state
    this.setState( { wizardsDisplayed: clonedWizards } )
  }

  handleRemove = (wizardIdToRemove) => {
    console.log(wizardIdToRemove)
    // we need the id of the element to be removed

    // find a way to remove it
    const filteredWizards = this.state.wizardsDisplayed.filter(eachWizard => {
      if (eachWizard.id === wizardIdToRemove) {
        return false // false means filter out this element
      } else {
        return true
      }
    })

    // const filteredWizards = this.state.wizardsDisplayed.filter(eachWizard => eachWizard.id !== wizardIdToRemove)

    // update the state
    this.setState( { wizardsDisplayed: filteredWizards } )

  }


  render() {
    return (
      <div>
        <h1>My wizard List!</h1>

        <button onClick={this.handleAdd}>Add a Random Wizard</button>
        <button onClick={this.sortingHat}>Sort Wizards!</button>

        <div id="wizard-list">

        { this.state.wizardsDisplayed.map( eachWizard => {
          return (
            <Fragment key={eachWizard.id}>
              <h3> {eachWizard.name} </h3>
              <p>id: {eachWizard.id}</p>
              <p> {eachWizard.description} </p>
              <button onClick={() => this.handleRemove(eachWizard.id)} >Remove this filthy muggle!</button>
            </Fragment>
          )
        } ) }

        </div>

      </div>
    )
  }
}

export default WizardList