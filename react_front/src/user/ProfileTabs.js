import React, { Component } from "react";
import { Link } from "react-router-dom";
import DefaultProfile from "../images/user2.png";

class ProfileTabs extends Component {
    render() {
        const { following, followers,posts } = this.props;
        // console.log(posts);
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        
                        <Link to="/followers"><h3 className="text-primary">
                            {followers.length} Followers
                        </h3></Link>
                        <hr />

                        {/* {followers.map((person, i) => (
                            <div key={i}>
                                <div>
                                    <Link to={`/user/${person._id}`}>
                                        <img
                                            style={{
                                                borderRadius: "50%",
                                                border: "1px solid black"
                                            }}
                                            className="float-left mr-2"
                                            height="30px"
                                            width="30px"
                                            onError={i =>
                                                (i.target.src = `${DefaultProfile}`)
                                            }
                                            src={`https://localhost:5000/user/photo/${person._id}`}
                                            alt={person.name}
                                        />
                                        <div>
                                            <p className="lead">
                                                {person.name}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))} */}
                    </div>

                    <div className="col-md-4">
                    <Link to="/following"><h3 className="text-primary">
                            {following.length} Following
                        </h3></Link>
                        <hr />
                        {/* {following.map((person, i) => (
                            <div key={i}>
                                <div>
                                    <Link to={`/user/${person._id}`}>
                                        <img
                                            style={{
                                                borderRadius: "50%",
                                                border: "1px solid black"
                                            }}
                                            className="float-left mr-2"
                                            height="30px"
                                            width="30px"
                                            onError={i =>
                                                (i.target.src = `${DefaultProfile}`)
                                            }
                                            src={`http://localhost:5000/user/photo/${person._id}`}
                                            alt={person.name}
                                        />
                                        <div>
                                            <p className="lead">
                                                {person.name}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))} */}
                    </div>
                        </div>
                        <div className='row'>
                    <div className="col-md-4">
                    <Link to="/following"><h3 className="text-primary">{posts.length} Posts</h3></Link>
                        <hr />
                        {posts.map((post, i) => (
                            <div key={i}>
                                <div>
                                    <Link to={`/post/${post._id}`}>
                                        <div>
                                            <p className="lead">{post.title}</p>
                                            {/* <img src={post.photo}/> */}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileTabs;