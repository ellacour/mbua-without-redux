import React, { useState, useEffect } from "react";
import axios from "axios";

import Wrapper from "../../helpers/wrapper";

const Contact = () => {
  const [contactContent, setContactContent] = useState("");

  useEffect(() => {
    let unmounted = false;
    const getContactData = async () => {
      const response = await axios(
        "https://cms.mbu-a.com/wp-json/wp/v2/pages/75"
      );
      if (!unmounted) {
        setContactContent(response.data.content.rendered);
      }
    };
    getContactData();
    return () => (unmounted = true);
  }, []);

  return (
    <Wrapper>
      <h3>Contact</h3>
      <div>Map</div>
      <div
        className="contact-content"
        dangerouslySetInnerHTML={{ __html: contactContent }}
      />
    </Wrapper>
  );
};

export default Contact;
