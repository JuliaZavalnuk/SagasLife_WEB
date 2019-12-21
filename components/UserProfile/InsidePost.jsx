import '../../styles/User_styles/styledContent.css';


class InsidePost extends React.Component {

    render() {
      return (
        <div className="insidepost">
            <div className="top">
                <div className="box1">
                    <div className="ava">
                    </div>
                    <div className="txt">
                        <div className="place">
                        </div>
                        <div className="hashtag">
                        </div>
                    </div>

                </div>
                <div className="box2">
                <img src='/static/more.png'/>

                </div>

            </div>
            <div className="bottom">
                <div className="box3">
                <img src='/static/camera.png'/>

                </div>
                <div className="box4">
                <img src='/static/favorites.png'/>
                <img src='/static/share.png'/>
                <img src='/static/comments.png'/>

                </div>

            </div>
         
          
        </div>
      )
      }
  }
  export default InsidePost