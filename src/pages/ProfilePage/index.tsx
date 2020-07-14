import React from 'react';

import Feed from '../../components/Feed';

import {
  Container,
  ProfileData,
  Banner,
  Avatar,
  Followage,
  LocationIcon,
  CakeIcon,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Bruno Mariano</h1>
        <h2>@bsignx</h2>

        <p>Developer at home</p>

        <ul>
          <li>
            <LocationIcon />
            Frutal, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 20 de janeiro de 1998
          </li>
        </ul>

        <Followage>
          <span>
            seguindo
            <strong> 10</strong>
          </span>
          <span>
            <strong>100 </strong>
            seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
