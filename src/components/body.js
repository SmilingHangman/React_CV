import React, { Component } from 'react';
import classes from '../App.module.scss';

class Body extends Component {
    render() {
        return (
            <>
                <ul>
                    <li className={classes.cvSegment}>
                        <h3>Education</h3>
                        <div className={classes.detailed}>
                            <h4>WMU - Planet Vhoorl</h4>
                            <h5>Major: Public Relations</h5>
                            <h5>Minor: Scale Tending</h5>
                        </div>
                    </li>
                    <li className={classes.cvSegment}>
                        <h3>Skills</h3>
                        <div className={classes.detailed}>
                            <h4>Office skills</h4>
                            <h5>Office and records smanagement, database administration, event organization, customer suport, travel coordination</h5>
                            <h4>Computer skills</h4>
                            <h5>Microsoft productivity software, Windows</h5>
                        </div>
                    </li>
                    <li className={classes.cvSegment}>
                        <h3>Experience</h3>
                        <div className={classes.detailed}>
                            <h4>Doomsday Cult</h4>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint voluptatem ab at quisquam quas dolores, rerum dolore, culpa architecto officiis non asperiores. Voluptate beatae deserunt provident quidem adipisci. Fuga?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ducimus nesciunt quaerat distinctio nam aliquam, fugit consectetur corporis aspernatur veniam repellat, ratione doloremque unde expedita molestias autem delectus. Quisquam, tempore?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repudiandae magnam eos tempora eius dolor earum cum. Commodi sint quaerat repellendus pariatur saepe, sunt at. Inventore asperiores laboriosam perspiciatis doloremque.</li>
                            </ul>
                            <h4>The Watering Hole</h4>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint voluptatem ab at quisquam quas dolores, rerum dolore, culpa architecto officiis non asperiores. Voluptate beatae deserunt provident quidem adipisci. Fuga?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ducimus nesciunt quaerat distinctio nam aliquam, fugit consectetur corporis aspernatur veniam repellat, ratione doloremque unde expedita molestias autem delectus. Quisquam, tempore?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repudiandae magnam eos tempora eius dolor earum cum. Commodi sint quaerat repellendus pariatur saepe, sunt at. Inventore asperiores laboriosam perspiciatis doloremque.</li>
                            </ul>
                        </div>
                    </li>
                    <li className={classes.cvSegment}>
                        <h3>Hobbies</h3>
                        <div className={classes.detailed}>
                            <p>World domination, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus cum vel quam aperiam minus, voluptatibus mollitia doloremque tempore eligendi, odio expedita harum quis voluptas natus omnis repudiandae excepturi eum.</p>
                        </div>
                    </li>
                    <li className={classes.cvSegment}>
                        <h3>References</h3>
                        <div className={classes.detailed}>
                            <p>Available on request.s</p>
                        </div>
                    </li>
                </ul>
            </>
        );
    }
}

export default Body;