import React from 'react';

class Footer extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          humor: 'happy'
        };
      }

      render() {
        return(
          <div>
            <h1>Footer</h1>
          </div>
        );
      }
}

export default Footer;