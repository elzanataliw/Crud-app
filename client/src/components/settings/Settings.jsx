import React from "react";
// import { Link } from "react-router-dom";
import "./Settings.css";
import people from "../../assets/people.png"
import pencil from "../../assets/pencil.png"

export default function Settings() {
    return (
        <div class="settings">
            <div class="settingtitle">
                Settings
            </div>
            <button class="editbutton">
                <div class="border">
                <div class="changetitle">
                        Change
                </div>
                <img class="pencil"
                    src={pencil}
                    alt="pencil logo"
                />
                </div>
            </button>
            <button class="changeborder">
                <img class="imgset"
                src={people}
                alt="prof icon"
                />
                <img class="imgset2"
                src={pencil}
                alt=""
                />
                <button class="changetext" type="submit">
                    Change Profile picture
                </button>
            </button>
            <form class="nameborder">
                
                <div class="nametitle">
                    Username
                </div>
                <div class="thename">
                    <input id="fileInput" type="file" style={{ display: "none" }} />
                    <input
                            className="writeInput bg-biru-abu"
                            placeholder="Your Name"
                            type="text"
                            autoFocus={true}
                        />
                </div>
                <div class="line">
                </div>
            </form>
            <div class="emailborder">
                <div class="emailtitle">
                    Email
                </div>
                <div class="emailname">
                    <input id="fileInput" type="file" style={{ display: "none" }} />
                    <input
                        className="writeInput bg-biru-abu"
                        placeholder="youremail@mail.com"
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <div class="line2"></div>
            </div>
            <div class="passwordborder">
                <div class="passwordtitle">
                    Password
                </div>
                <div class="passwordname">
                <input id="fileInput" type="file" style={{ display: "none" }} />
                    <input
                        className="writeInput bg-biru-abu"
                        placeholder="**********"
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <div class="line3"></div>
            </div>
            <button class="deleteacc" type="submit">
                Delete Account
            </button>
        </div>
);
}