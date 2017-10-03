import React, {Component} from 'react';
import Posting from './Posting';



export default class Dice extends Component {
    constructor(){
        super();
        this.makeComponent = this.makeComponent.bind(this);
    }

    makeComponent()  {
        if (this.props.job !== '')  {
            return this.props.job.map((post) => {
                return <Posting key={post.detailUrl} website={this.props.website} post={post} applyToJob={this.props.applyToJob}/>
            });
        }
    }

    render(){
        let loading = this.props.loading;
        let currentPage = this.props.page;
        let savedJobs = this.props.job;
        let nextPage = currentPage + 1;
        let previousPage = currentPage - 1;
        if (currentPage == 1  && savedJobs.length == 7){
            return(
                    <div>
                        <ul className="pagination center-align">
                            <li className="active"><a>{currentPage}</a></li>
                            <li className="waves-effect"><a onClick={() => this.props.changePage(nextPage)}>{nextPage}</a></li>
                        </ul>
                        {this.makeComponent()}
                        <ul className="pagination center-align">
                            <li className="active"><a>{currentPage}</a></li>
                            <li className="waves-effect"><a onClick={() => this.props.changePage(nextPage)}>{nextPage}</a></li>
                        </ul>
                    </div>
            )
        }else if (currentPage == 1 && savedJobs.length < 7 ) {
            return (
                    <div>
                        <ul className="pagination center-align">
                            <li className="active"><a>{currentPage}</a></li>
                        </ul>
                        {this.makeComponent()}
                        <ul className="pagination center-align">
                            <li className="active"><a>{currentPage}</a></li>
                        </ul>
                    </div>
            )
        } else if (savedJobs.length < 7 ) {
            return (
                    <div>
                        <ul className="pagination center-align">
                            <li className="waves-effect"><a onClick={() => this.props.changePage(previousPage)}>{previousPage}</a></li>
                            <li className="active"><a>{currentPage}</a></li>
                        </ul>
                        {this.makeComponent()}
                        <ul className="pagination center-align">
                            <li className="waves-effect"><a onClick={() => this.props.changePage(previousPage)}>{previousPage}</a></li>
                            <li className="active"><a>{currentPage}</a></li>
                        </ul>
                    </div>
            )
        } else {
            return (
                    <div>
                        <ul className="pagination center-align">
                            <li className="waves-effect"><a onClick={() => this.props.changePage(previousPage)}>{previousPage}</a></li>
                            <li className="active"><a>{currentPage}</a></li>
                            <li className="waves-effect"><a onClick={() => this.props.changePage(nextPage)}>{nextPage}</a></li>
                        </ul>
                        {this.makeComponent()}
                        <ul className="pagination center-align">
                            <li className="waves-effect"><a onClick={() => this.props.changePage(previousPage)}>{previousPage}</a></li>
                            <li className="active"><a>{currentPage}</a></li>
                            <li className="waves-effect"><a onClick={() => this.props.changePage(nextPage)}>{nextPage}</a></li>
                        </ul>
                    </div>
            );
        }
    }
}