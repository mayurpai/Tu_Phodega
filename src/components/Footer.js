import "../styles/Footer.css";

import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <p className="Creator">
        Handcrafted with <i class="fa fa-heart" aria-hidden="true"></i> by
        <a href="https://mayurpai.github.io/" target="blank">
          <strong> Mayur Pai</strong>
        </a>
      </p>
      <p className="Copyright">
        Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2020
      </p>
      <a href="https://wa.me//919611609185">
        <i class="fa fa-whatsapp fa-2x" id="whatsapp" aria-hidden="true"></i>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100010154376824"
        title="Mayur Pai"
        target="blank"
      >
        <i class="fa fa-facebook fa-2x" id="fb" aria-hidden="true"></i>
      </a>
      <a
        href="https://twitter.com/Mayur_pai5"
        title="Mayur_pai5"
        target="blank"
      >
        <i class="fa fa-twitter fa-2x" id="twitter" aria-hidden="true"></i>
      </a>
      <a
        href="https://www.instagram.com/mayurpai19/"
        title="mayurpai19"
        target="blank"
      >
        <i class="fa fa-instagram fa-2x" id="insta" aria-hidden="true"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/mayur-pai5/"
        title="Mayur Pai B H"
        target="blank"
      >
        <i class="fa fa-linkedin fa-2x" id="link" aria-hidden="true"></i>
      </a>
      <a href="https://github.com/mayurpai" title="Mayur Pai" target="blank">
        <i class="fa fa-github fa-2x" id="git" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default Footer;
