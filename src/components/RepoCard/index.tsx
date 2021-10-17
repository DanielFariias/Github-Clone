import { Link } from 'react-router-dom';
import * as C from './styles';

interface Props {
  username: string
  repoName: string
  description?: string
  language?: string
  stars: number
  forks: number
}

const RepoCard: React.FC<Props> = ({
  username,
  repoName,
  description,
  language,
  stars,
  forks,
}) => {
  const languageClass = language ? language.toLocaleLowerCase() : 'other'

  return (

    <C.Container>
      <C.Topside>
        <header>
          <C.RepoIcon />
          <Link to={`/${username}/${repoName}`}>{repoName}</Link>
        </header>
        <p>{description}</p>
      </C.Topside>

      <C.Botside>
        <ul>
          <li>
            <div className={`language ${languageClass}`}></div>
            <span>{language}</span>
          </li>
          <li>
            <C.StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <C.ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </C.Botside>

    </C.Container>

  );
}

export default RepoCard;