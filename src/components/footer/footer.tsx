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
    <div style={{ maxWidth: '600px' }}>
      <div style={{ display: 'flex', width: '600px' }}>
        <div style={{ width: '50%', padding: '10px' }}>
          <p
            style={{
              padding: 0,
              margin: 0,
              fontFamily: 'Helvetica, Helvetica, Neue, Helvetica, Arial, sans-serif',
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
              <span className="span_info">{customValue.phoneNumber}</span>
            </a>
          </p>
          <p className="p_info">
            <a href={customValue.email} className="a_info">
              <span className="span_info">{customValue.email}</span>
            </a>
          </p>
        </div>
        <div style={{ width: '50%', padding: '22px' }} className="col225 table_custom">
          <div style={{ display: 'flex', height: '62px' }}>
            <div className="linkedin">
              <a href="https://www.linkedin.com/company/300brains/" className="a_linkedin">
                <img
                  src="https://email-blob.s3.pl-waw.scw.cloud/footer/link_icon.png"
                  alt="Instagram"
                  className="img_linkedin"
                />
              </a>
            </div>
            <div className="linkedin">
              <a href="https://clutch.co/profile/300brains#summary" className="a_linkedin">
                <img
                  src="https://email-blob.s3.pl-waw.scw.cloud/footer/c_icon.png"
                  alt="Instagram"
                  className="img_linkedin"
                />
              </a>
            </div>
          </div>

          <div className="td_company" style={{ height: '44px' }}>
            <p className="p_address">00-066 Warsaw, Poland,</p>
            <p className="p_address">Plac Malachowskiego 2, 4th&nbsp;floor,</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          width: '600px',
          padding: '20px 0 20px 0',
          borderTop: '1px solid',
          borderColor: '#f2f2f2',
        }}
      >
        <div style={{ width: '25%' }}>
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
        </div>
        <div style={{ width: '25%' }}>
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
        </div>
        <div style={{ width: '25%' }}>
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
        </div>
        <div style={{ width: '25%' }}>
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
        </div>
        <div style={{ width: '25%' }}>
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
        </div>
      </div>
      <div
        style={{
          borderTop: '1px solid',
          borderColor: '#f2f2f2',
          paddingTop: '10px',
          maxWidth: '600px',
        }}
      >
        <img
          src="https://email-blob.s3.pl-waw.scw.cloud/footer/Animacja.gif"
          alt="animacja"
          width="100%"
          style={{ maxWidth: '600px', display: 'block' }}
        />
      </div>
      <td style={{ lineHeight: '35px' }}>&nbsp;</td>
      <div style={{ maxWidth: '600px' }}>
        <div className="td_company_address" style={{ maxWidth: '100%' }}>
          300Brains Sp. z o.o. | 00-066 Warsaw, Poland, Plac Malachowskiego 2, 4th floor, District
          Court for the Capital City of Warsaw, XII Commercial Division of the National Court
          Register KRS: 0000771127, Share capital of PLN 100,000.00, NIP: 5252779847
        </div>
      </div>
    </div>
  );
};
