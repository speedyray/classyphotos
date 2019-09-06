import React, {Component} from 'react';
import Title from './Title';
import ClassyPhotos from './ClassyPhotos'

 const  posts = [{
    id: "0",
    description: "beautiful landscape",
    imageLink: "https://images.pexels.com/photos/462146/pexels-photo-462146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    // "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        // "3919321_1443393332_n.jpg"
  }, {
    id: "1",
    description: "Aliens???",
    imageLink: "https://images.pexels.com/photos/443356/pexels-photo-443356.jpeg?"
    
   
    // "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        // "08323785_735653395_n.jpg"
  }, {
    id: "2",
    description: "On a vacation!",
     imageLink: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?cs=srgb&dl=beach-exotic-holiday-248797.jpg&fm=jpg"
    // "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
  }]


class Main extends Component {
    render(){
        return <div>
                 <Title  title = {'ClassyPhotos'}/>
                   <ClassyPhotos  posts = {posts}      />
              </div>
    }
}

export default Main