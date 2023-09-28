import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import { useAuth0 } from '@auth0/auth0-react';

const { primary_accent_color } = colors;

function HeaderContent() {

  const { isAuthenticated } = useAuth0();

  return (
    <div className="hrf-header"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: '20vh',
        width: '100vw',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div className="links">
        <Link id="home-btn" to="/">
          Home
        </Link>
        <Link id="graphs-btn" to="/graphs">
          Graphs
        </Link>
          {isAuthenticated && <Link id="profile-btn" to='/profile'>
            Profile
          </Link>}
      </div>
    </div>
  );
}

export { HeaderContent };
