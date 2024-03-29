import React from "react";
import styles from "./footer.module.css";
import FooterItems from "./FooterItems/FooterItem";
import {
  footerBottomText,
  information,
  informationLinks,
  paragraph,
  store,
  storeLinks,
  support,
  supportLinks,
  useful,
  usefulLinks,
} from "@/libs/data";
import FooterBrand from "./FooterBrand/FooterBrand";

const Footer = () => {
  return (
    <>
      <footer className={`${styles.footerContainer} text-white`}>
        <div className={`container`}>
          <div className={`${styles.footerMain}`}>
            <div className={`row`}>
              <div className={`col col-12 col-sm-12 col-lg-4`}>
                <FooterBrand paragraph={paragraph} />
              </div>
              <div className={`col col-6 col-sm-4 col-lg-2`}>
                <FooterItems title={store} links={storeLinks} />
              </div>
              <div className={`col col-6 col-sm-4 col-lg-2`}>
                <FooterItems title={information} links={informationLinks} />
              </div>
              <div className={`col col-6 col-sm-4 col-lg-2`}>
                <FooterItems title={support} links={supportLinks} />
              </div>
              <div className={`col col-6 col-sm-4 col-lg-2`}>
                <FooterItems title={useful} links={usefulLinks} />
              </div>
            </div>
          </div>
          <hr className={`${styles.footerHr}`} />
          <div
            className={`${styles.footerBottom} d-flex justify-content-center`}
          >
            <p>{footerBottomText}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
