import { ProfileData } from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import * as C from './styles';

export const Profile: React.FC = () => {
  return (
    <C.Container>
      <C.Main>
        <C.LeftSide>
          <ProfileData
            username={"DanielFariias"}
            name={"Daniel Farias"}
            AvatarUrl={'https://github.com/DanielFariias.png'}
            followers={855}
            following={123}
            company={"AAAAAAAAA"}
            location={"Fortaleza, Ceara"}
            email={"aaaaa.@.com"}
            blog={"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}

          />
        </C.LeftSide>

        <C.RightSide>
          <C.Repos>
            <h2>Random repos</h2>

            <div >
              {
                [1, 2, 3, 4, 5, 6].map(n => (
                  <RepoCard
                    key={n}
                    username={"aaaaaaaa"}
                    repoName={"aaaaaaaa"}
                    description={"aaaaaaaa"}
                    language={n % 3 === 0 ? 'Javascript' : 'Typescript'}
                    stars={2}
                    forks={5}
                  />
                ))
              }


            </div>

          </C.Repos>
        </C.RightSide>
      </C.Main>
    </C.Container>
  );
}