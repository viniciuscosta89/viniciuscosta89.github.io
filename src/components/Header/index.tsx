import Container from '@components/Container';
import profileDesktop from '@assets/image-profile-desktop.webp';
import profileReal from '@assets/image-profile-desktop-hover.webp';
import profileTablet from '@assets/image-profile-tablet.webp';
import profileMobile from '@assets/image-profile-mobile.webp';
import { socialNetworks } from '@data/social-networks';
import {
  HeaderStyled,
  HeaderGrid,
  HeaderTitle,
  HeaderSocialNetworks,
  ProfileImage,
  ProfileImageReal,
} from './Header.styles';

function Header() {
  return (
    <HeaderStyled
      initial={{ opacity: 0, y: -32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <HeaderGrid>
          <HeaderTitle>
            <span>vinicius</span>
            <strong>costa</strong>
          </HeaderTitle>

          <HeaderSocialNetworks>
            {socialNetworks.map(({ id, url, label, logo: Logo }) => (
              <li key={id}>
                <a href={url} title={`My ${label} profile`} target="_blank" rel="noreferrer">
                  <Logo />
                </a>
              </li>
            ))}
          </HeaderSocialNetworks>
        </HeaderGrid>

        <ProfileImage>
          <source srcSet={profileDesktop.src} media="(min-width: 1140px)" />
          <source srcSet={profileTablet.src} media="(min-width: 768px)" />
          <img src={profileMobile.src} alt="AI rendered Vinicius Costa's image " />

          <ProfileImageReal>
            <img src={profileReal.src} alt="My real picture" />
          </ProfileImageReal>
        </ProfileImage>
      </Container>
    </HeaderStyled>
  );
}

export default Header;
