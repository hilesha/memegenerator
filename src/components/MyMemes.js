import React, {Component} from "react";
import {connect} from "react-redux";

class MyMemes extends Component {
    render() {
        return (
            <div>
                {this.props.mymemes.map((meme, index) => {
                    return (
                        <img key={index} src={meme.data.url} alt="my-meme" className="my-meme-img"/>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        mymemes: state.mymemes
    }
}

export default connect(mapStateToProps, null)(MyMemes)
