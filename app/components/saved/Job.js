import React, {Component} from 'react';

const Job = ({savedJob, openModal, deleteJob, index, editJob}) => {
let color;
  switch (savedJob.status){
  case 'Applied':
    color = 'red';
    break;
  case 'Interested':
    color = 'sandybrown';
    break; 
  case 'Waiting':
    color = 'yellow';
    break;
  case 'Accepted':
    color = 'yellowgreen';
    break;
  default:
    color = 'black';
}
  let statusColor = {color};
    let saveJobsStyle =
        {"borderRadius": "27px",
    "paddingLeft":"13px"}
	return(
	  <div className="row job">
        <div className="cl l12">
          <div  style={saveJobsStyle} className="jobPosting">
            <p>{savedJob.title}</p>
            <ul>
              <li className="company"><span>Company:  </span> {savedJob.company} </li>
              <li className="location"><span>Location:  </span> {savedJob.location}</li>
              <li className="url"><span>URL:  </span> <a target='_blank' href={savedJob.link}>Link</a></li>
            </ul>
            <div>
              <div className='saved-icon'> 
                <i style={statusColor} className="material-icons iconAlign">account_box</i> <span> {savedJob.status} </span>
              </div> 
              <div className='applyButtons'>
                <button 
                  onClick={() => openModal(savedJob.notes.notes, savedJob._id)} 
                  className=" waves-effect waves-light btn notes">Add Notes</button>
                  <button onClick={() => editJob(index)} 
                  className="waves-effect waves-light btn editJob">Edit Job</button>

                  <button onClick={() => deleteJob(index)} 
                  className="waves-effect waves-light btn delete">Delete Job</button>
               </div>
            </div>
          </div>
      </div>
    </div>
          )

}

export default Job;