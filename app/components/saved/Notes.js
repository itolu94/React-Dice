import React, {Component}  from 'react';
import NotesText from './NotesText';
import axios from 'axios';



export default class Notes extends Component {
	constructor(props){
		super(props)
	};
	renderNotes() {
		if(this.props.notes != 'Testing'){
			return this.props.notes[this.props.id].map((notes, index) => {
				return <NotesText key={index} notes={notes} index={index} deleteNote={this.props.deleteNote}/>
			})
		}
	}

render(){

	    return(
		  <div>
			  <div>
              {this.renderNotes()}
			  </div>
			  <form onSubmit={(event)  => this.props.newNote(event)}>
			  	<input onChange={(event) => this.props.noteText(event)}  
			  	value={this.props.value} 
				type='text' 
				name='newNote'/>
            <input type='submit'/>
		  </form> 
		</div>
	  )
  }
}


