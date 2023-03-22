import React, { useEffect, useState } from 'react';
import { Props } from '@screens/footer-generator/footer-generator';

export const Footer = () => {
  const [customValue, setCustomValue] = useState<Props>({
    name: '',
    position: '',
    phoneNumber: '',
    email: '',
  });
  useEffect(() => {
    const storedValue = localStorage.getItem('customValue');
    if (storedValue !== null) {
      setCustomValue(JSON.parse(storedValue));
    }
  }, []);
  return (
    <table style={{ width: '600px', backgroundColor: 'white' }} align="left">
      <tbody style={{ width: '100%', padding: 0 }}>
        <tr>
          <td>
            <table className="content">
              <tbody>
                <tr>
                  <td style={{ padding: '20px 0 0 0' }}>
                    <table width="100%">
                      <tbody>
                        <tr>
                          <td>
                            <table className="col225 table_custom" align="left">
                              <tbody>
                                <tr>
                                  <td>
                                    <table width="100%">
                                      <tbody>
                                        <tr>
                                          <td valign="middle" height="44" className="td_company">
                                            <p
                                              style={{
                                                padding: 0,
                                                margin: 0,
                                                fontFamily:
                                                  'Helvetica, Helvetica, Neue, Helvetica, Arial, sans-serif',
                                              }}
                                            >
                                              <span
                                                style={{
                                                  fontSize: '16pt',
                                                  fontWeight: 'bold',
                                                  lineHeight: '28pt',
                                                  color: '#24354F',
                                                }}
                                              >
                                                {customValue.name}
                                              </span>
                                            </p>
                                            <p className="p_info">
                                              <span
                                                style={{
                                                  fontSize: '10pt',
                                                  lineHeight: '18pt',
                                                  color: ' #ED1E79',
                                                }}
                                              >
                                                {customValue.position}
                                              </span>
                                            </p>
                                            &nbsp;&nbsp;
                                            <p className="p_info">
                                              <a href={customValue.phoneNumber} className="a_info">
                                                <span className="span_info">
                                                  {customValue.phoneNumber}
                                                </span>
                                              </a>
                                            </p>
                                            <p className="p_info">
                                              <a href={customValue.email} className="a_info">
                                                <span className="span_info">
                                                  {customValue.email}
                                                </span>
                                              </a>
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table className="col225 table_custom" align="left">
                              <tbody>
                                <tr>
                                  <td height="62">
                                    <table width="110px">
                                      <tbody>
                                        <tr>
                                          <td className="linkedin">
                                            <a
                                              href="https://www.linkedin.com/company/300brains/"
                                              className="a_linkedin"
                                            >
                                              <img
                                                src="https://email-blob.s3.pl-waw.scw.cloud/footer/link_icon.png"
                                                alt="Instagram"
                                                className="img_linkedin"
                                              />
                                            </a>
                                          </td>
                                          <td className="linkedin">
                                            <a
                                              href="https://clutch.co/profile/300brains#summary"
                                              className="a_linkedin"
                                            >
                                              <img
                                                src="https://email-blob.s3.pl-waw.scw.cloud/footer/c_icon.png"
                                                alt="Instagram"
                                                className="img_linkedin"
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td>&nbsp;&nbsp;</td>
                                </tr>
                                <tr>
                                  <td>
                                    <table width="100%">
                                      <tbody>
                                        <tr>
                                          <td valign="bottom" height="44" className="td_company">
                                            <p className="p_address">00-066 Warsaw, Poland,</p>
                                            <p className="p_address">
                                              Plac Malachowskiego 2, 4th&nbsp;floor,
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{ lineHeight: '15px' }}>&nbsp;</td>
        </tr>
        <tr>
          <td>
            <table
              className="content"
              align="center"
              style={{ borderTop: '1px solid #f2f2f2', borderBottom: '1px solid #f2f2f2' }}
            >
              <tbody>
                <tr>
                  <td style={{ padding: ' 20px 0 20px 0' }}>
                    <table width="100%" align="left">
                      <tbody>
                        <tr>
                          <td>
                            <table className="col150 table_custom" align="left">
                              <tbody>
                                <tr>
                                  <td>
                                    <table width="100%">
                                      <tbody>
                                        <tr>
                                          <td valign="middle" height="44" className="td_company">
                                            <table>
                                              <tbody>
                                                <tr>
                                                  <td className="td_company_img">
                                                    <img
                                                      alt="point"
                                                      src="https://email-blob.s3.pl-waw.scw.cloud/footer/point.png"
                                                      className="img_company_img"
                                                    />
                                                  </td>
                                                  <td className="td_company_address">
                                                    San Francisco,
                                                    <br />
                                                    United States
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table className="col150 table_custom" align="left">
                              <tbody>
                                <tr>
                                  <td>
                                    <table width="100%">
                                      <tbody>
                                        <tr>
                                          <td valign="middle" height="44" className="td_company">
                                            <table>
                                              <tbody>
                                                <tr>
                                                  <td className="td_company_img">
                                                    <img
                                                      alt="point"
                                                      src="https://email-blob.s3.pl-waw.scw.cloud/footer/point.png"
                                                      className="img_company_img"
                                                    />
                                                  </td>

                                                  <td className="td_company_address">
                                                    Warsaw,
                                                    <br />
                                                    Poland
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table className="col150 table_custom" align="left">
                              <tbody>
                                <tr>
                                  <td>
                                    <table width="100%">
                                      <tbody>
                                        <tr>
                                          <td valign="middle" height="44" className="td_company">
                                            <table>
                                              <tbody>
                                                <tr>
                                                  <td className="td_company_img">
                                                    <img
                                                      alt="point"
                                                      src="https://email-blob.s3.pl-waw.scw.cloud/footer/point.png"
                                                      className="img_company_img"
                                                    />
                                                  </td>
                                                  <td className="td_company_address">
                                                    Reykjavik,
                                                    <br />
                                                    Island
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table className="col150 table_custom" align="left">
                              <tbody>
                                <tr>
                                  <td>
                                    <table width="100%">
                                      <tbody>
                                        <tr>
                                          <td valign="middle" height="44" className="td_company">
                                            <table>
                                              <tbody>
                                                <tr>
                                                  <td className="td_company_img">
                                                    <img
                                                      alt="point"
                                                      src="https://email-blob.s3.pl-waw.scw.cloud/footer/point.png"
                                                      className="img_company_img"
                                                    />
                                                  </td>
                                                  <td className="td_company_address">
                                                    London,
                                                    <br />
                                                    United Kingdom
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table className="col150 table_custom" align="left">
                              <tbody>
                                <tr>
                                  <td>
                                    <table width="100%">
                                      <tbody>
                                        <tr>
                                          <td valign="middle" height="44" className="td_company">
                                            <table>
                                              <tbody>
                                                <tr>
                                                  <td className="td_company_img">
                                                    <img
                                                      alt="point"
                                                      src="https://email-blob.s3.pl-waw.scw.cloud/footer/point.png"
                                                      className="img_company_img"
                                                    />
                                                  </td>
                                                  <td className="td_company_address">
                                                    København,
                                                    <br />
                                                    Denmark
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>{' '}
                        </tr>{' '}
                      </tbody>{' '}
                    </table>{' '}
                  </td>{' '}
                </tr>{' '}
              </tbody>{' '}
            </table>
          </td>
        </tr>
        <tr>
          <td style={{ lineHeight: '35px' }}>&nbsp;</td>
        </tr>
        <tr>
          <td>
            <table align="left" className="table_custom">
              <tbody>
                <tr>
                  <td style={{ padding: 0 }}>
                    <table width="100%" align="left">
                      <tbody>
                        <tr>
                          <td height="100%" style={{ padding: 0 }}>
                            <img
                              src="https://email-blob.s3.pl-waw.scw.cloud/footer/animation.gif"
                              alt="animacja"
                              width="100%"
                              style={{ maxWidth: '670px', display: 'block' }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{ lineHeight: '35px' }}>&nbsp;</td>
        </tr>
        <tr>
          <td>
            <table align="left" className="table_custom">
              <tbody>
                <tr>
                  <td style={{ padding: 0 }}>
                    <table width="100%" align="left">
                      <tbody>
                        <tr>
                          <td className="td_company_address">
                            300Brains Sp. z o.o. | 00-066 Warsaw, Poland, Plac Malachowskiego 2, 4th
                            floor, District Court for the Capital City of Warsaw, XII Commercial
                            Division of the National Court Register KRS: 0000771127, Share capital
                            of PLN 100,000.00, NIP: 5252779847
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
