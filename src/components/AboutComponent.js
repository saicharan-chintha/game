import React,{ Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <frameset rows="100%,*"> 
                    <frame src= "http://www.learning-curve-foundation.org/"> 
                        <noframes> 
                            <body> 
                            </body> 
                        </noframes> 
                    </frame>
                </frameset>
            </div>
                
        );
    }
}

export default About;