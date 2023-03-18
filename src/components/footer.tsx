import React from "react";
import point from "@assets/img/point.png";

export const Footer = () => {
  return (
    <table
      width="100%"
      style={{ maxWidth: "600px", width: "100%" }}
      bgcolor="#ffffff"
      align="left"
    >
      <tr>
        <td>
          <table className="content">
            <tr>
              <td style={{ padding: "20px 0 0 0" }}>
                <table width="100%">
                  <tr>
                    <td>
                      <table className="col225 table_custom" align="left">
                        <tr>
                          <td>
                            <table width="100%">
                              <tr>
                                <td
                                  valign="middle"
                                  height="44"
                                  className="td_company"
                                >
                                  <p style={{ padding: 0, margin: 0 }}>
                                    <span
                                      style={{
                                        fontSize: "16pt",
                                        fontWeight: "bold",
                                        lineHeight: "28pt",
                                        color: "#24354F",
                                      }}
                                    >
                                      Brady Kenn
                                    </span>
                                  </p>
                                  <p className="p_info">
                                    <span
                                      style={{
                                        fontSize: "10pt",
                                        fontWeight: "18pt",
                                        color: "#ED1E79",
                                      }}
                                    >
                                      CEO & Founder
                                    </span>
                                  </p>
                                  &nbsp;&nbsp;
                                  <p className="p_info">
                                    <a
                                      href="tel:+48555555555"
                                      className="a_info"
                                    >
                                      <span className="span_info">
                                        + 48 555 555 555
                                      </span>
                                    </a>
                                  </p>
                                  <p className="p_info">
                                    <a
                                      href="mailto:bradykenn@300brains.com"
                                      className="a_info"
                                    >
                                      <span className="span_info">
                                        bradykenn@300brains.com
                                      </span>
                                    </a>
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <table className="col225 table_custom" align="left">
                        <tr>
                          <td height="62">
                            <table width="110px">
                              <tr>
                                <td className="linkedin">
                                  <a
                                    href="https://www.linkedin.com/company/300brains/"
                                    target="_blank"
                                    className="a_linkedin"
                                  >
                                    <img
                                      src="../assets/img/link_icon.png"
                                      alt="Instagram"
                                      className="img_linkedin"
                                    />
                                  </a>
                                </td>
                                <td className="linkedin">
                                  <a
                                    href="https://clutch.co/profile/300brains#summary"
                                    target="_blank"
                                    className="a_linkedin"
                                  >
                                    <img
                                      src="../assets/img/c_icon.png"
                                      alt="Instagram"
                                      className="img_linkedin"
                                    />
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>&nbsp;&nbsp;</td>
                        </tr>
                        <tr>
                          <td>
                            <table width="100%">
                              <tr>
                                <td
                                  valign="bottom"
                                  height="44"
                                  className="td_company"
                                >
                                  <p className="p_address">
                                    00-066 Warsaw, Poland,
                                  </p>
                                  <p className="p_address">
                                    Plac Malachowskiego 2, 4th&nbsp;floor,
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        {" "}
        <td style={{ fontWeight: "15px" }}>&nbsp;</td>
      </tr>
      <tr>
        <td>
          <table
            className="content"
            align="center"
            style={{
              borderTop: "1px solid #f2f2f2",
              borderBottom: "1px solid #f2f2f2",
            }}
          >
            <tr>
              <td style={{ padding: "20px 0 20px 0" }}>
                <table width="100%" align="left">
                  <tr>
                    <td>
                      <table className="col150 table_custom" align="left">
                        <tr>
                          <td>
                            <table width="100%">
                              <tr>
                                <td
                                  valign="middle"
                                  height="44"
                                  className="td_company"
                                >
                                  <table>
                                    <tr>
                                      <td className="td_company_img">
                                        <img
                                          src="../assets/img/point.png"
                                          className="img_company_img"
                                        />
                                      </td>
                                      <td className="td_company_address">
                                        San Francisco,
                                        <br />
                                        United States
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <table className="col150 table_custom" align="left">
                        <tr>
                          <td>
                            <table width="100%">
                              <tr>
                                <td
                                  valign="middle"
                                  height="44"
                                  className="td_company"
                                >
                                  <table>
                                    <tr>
                                      <td className="td_company_img">
                                        <img
                                          src="point.png"
                                          className="img_company_img"
                                        />
                                      </td>

                                      <td className="td_company_address">
                                        Warsaw,
                                        <br />
                                        Poland
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <table className="col150 table_custom" align="left">
                        <tr>
                          <td>
                            <table width="100%">
                              <tr>
                                <td
                                  valign="middle"
                                  height="44"
                                  className="td_company"
                                >
                                  <table>
                                    <tr>
                                      <td className="td_company_img">
                                        <img
                                          src="point.png"
                                          className="img_company_img"
                                        />
                                      </td>
                                      <td className="td_company_address">
                                        Reykjavik,
                                        <br />
                                        Island
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <table className="col150 table_custom" align="left">
                        <tr>
                          <td>
                            <table width="100%">
                              <tr>
                                <td
                                  valign="middle"
                                  height="44"
                                  className="td_company"
                                >
                                  <table>
                                    <tr>
                                      <td className="td_company_img">
                                        <img
                                          src="point.png"
                                          className="img_company_img"
                                        />
                                      </td>
                                      <td className="td_company_address">
                                        London,
                                        <br />
                                        United Kingdom
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <table className="col150 table_custom" align="left">
                        <tr>
                          <td>
                            <table width="100%">
                              <tr>
                                <td
                                  valign="middle"
                                  height="44"
                                  className="td_company"
                                >
                                  <table>
                                    <tr>
                                      <td className="td_company_img">
                                        <img
                                          src="point.png"
                                          className="img_company_img"
                                        />
                                      </td>
                                      <td className="td_company_address">
                                        København,
                                        <br />
                                        Denmark
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style={{ fontWeight: "35px" }}>&nbsp;</td>
      </tr>
      <tr>
        <td>
          <table align="left" className="table_custom">
            <tr>
              <td style={{ padding: 0 }}>
                <table width="100%" align="left">
                  <tr>
                    <td height="100%" style={{ padding: 0 }}>
                      <img
                        src="Animacja.gif"
                        width="100%"
                        style={{ maxWidth: "670px", display: " block" }}
                      />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style={{ fontWeight: "35px" }}>&nbsp;</td>
      </tr>
      <tr>
        <td>
          <table align="left" className="table_custom">
            <tr>
              <td style={{ padding: 0 }}>
                <table width="100%" align="left">
                  <tr>
                    <td className="td_company_address">
                      300Brains Sp. z o.o. | 00-066 Warsaw, Poland, Plac
                      Malachowskiego 2, 4th floor, District Court for the
                      Capital City of Warsaw, XII Commercial Division of the
                      National Court Register KRS: 0000771127, Share capital of
                      PLN 100,000.00, NIP: 5252779847
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
};
