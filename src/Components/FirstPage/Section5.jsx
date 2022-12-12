import React from "react";
import "../../index.css";
import "../../styles/FirstPage/section5.scss";

const Section5 = () => {
  return (
    <div className="section-kids flex bg-black text-white">
      <div className="kids">
        <img
          src="https://occ-0-6194-2774.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
          alt="kid_photo"
        />
      </div>
      <div className="description-kids">
        <h2>Create profiles for kids.</h2>
        <p>
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </p>
      </div>
    </div>
  );
};

export default Section5;
