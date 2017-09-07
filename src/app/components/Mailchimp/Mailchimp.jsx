import React from 'react';

const Mailchimp = () => (
  <div id="mc_embed_signup">
    <form
      action="//clavvs.us1.list-manage.com/subscribe/post?u=6b3bedaf97619356c511dddb9&amp;id=e1016c7f40"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll">
        <h2>GET FREE CLAVVS MUSIC + NEWS</h2>
        <div className="indicates-required">
          <span className="asterisk">*</span> indicates required
        </div>
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
          <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
        </div>
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{ display: 'none' }} />
          <div className="response" id="mce-success-response" style={{ display: 'none' }} />
        </div>
        <div style={{ position: 'absolute', left: '-5000px', ariaHidden: true }}>
          <input type="text" name="b_6b3bedaf97619356c511dddb9_e1016c7f40" tabIndex="-1" value="" />
        </div>
        <div className="clear">
          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
        </div>
      </div>
    </form>
  </div>
);

export default Mailchimp;
