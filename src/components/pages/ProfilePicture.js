import React from 'react';

const ProfilePicture = () => {
    return (
        <React.Fragment>
            <main className="main-content mb-0" >
                <div className="container">
                    <div className="row">
                        <div className="login ">
                            <div className="col-sm-12">
                                <h1 className='ar-text'>Looking good</h1>

                                <h4 className="sub-title">
                                    Profile picture
                                </h4>
                                <div className="login col-sm-6">
                                    <div className="title-up">



                                        <form action="" className="sign">

                                            <h5 className=" font-25">
                                                A photo of yourself
                                            </h5>
                                            <button className="button">
                                                UPLOAD FILE (.JPG or .PNG)
                                            </button>
                                            <p>
                                                1 mb maximum file size
                                            </p>
                                            <img src="assets/img/Oval.png" alt="" className="m30-auto" />

                                            <button className="button bg-gray" >
                                                NEXT
                                            </button>
                                        </form>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
            </main>
        </React.Fragment>
    );
}

export default ProfilePicture;
