import React, { useState, useEffect } from "react";
import axios from "axios";

import SimpleMap from "./../../map/map";
import "./contact.css"

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
    <div id="contact-content">
      <SimpleMap></SimpleMap>
      <div
        className="contact-infos"
        dangerouslySetInnerHTML={{ __html: contactContent }}
      />
    </div>
  );
};

export default Contact;
