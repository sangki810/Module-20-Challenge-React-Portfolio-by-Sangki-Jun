import React from 'react';

const About = () => {
    return (
        <form className='container'>
            <div className="form-group mt-3">
                <label for="name">Name</label>
                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter name"></input>
            </div>
            <div className="form-group mt-3">
                <label for="email">Email address</label>
                <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <div className="form-group mt-3">
                <label for="message">Message</label>
                <textarea type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter name"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    );
};

export default About;