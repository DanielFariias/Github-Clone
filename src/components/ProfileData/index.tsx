import * as C from './styles';

interface Props {
  username: string
  name: string
  AvatarUrl: string
  followers: number
  following: number
  company?: string
  location?: string
  email?: string
  blog?: string
}

export const ProfileData: React.FC<Props> = (props) => {
  return (
    <C.Container>
      <C.Flex>
        <C.Avatar src={props.AvatarUrl} />

        <div>
          <h1>{props.name}</h1>
          <h2>{props.username}</h2>
        </div>

      </C.Flex>

      <C.Row>
        <li>
          <C.PeopleIcon />
          <b>{props.followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{props.following}</b>
          <span>following</span>
        </li>
      </C.Row>

      <C.Column>
        {props.company && (
          <li>
            <C.CompanyIcon />
            <span>{props.company}</span>
          </li>
        )}
        {props.location && (
          <li>
            <C.LocationIcon />
            <span>{props.location}</span>
          </li>
        )}
        {props.email && (
          <li>
            <C.EmailIcon />
            <span>{props.email}</span>
          </li>
        )}
        {props.blog && (
          <li>
            <C.BlogIcon />
            <span>{props.blog}</span>
          </li>
        )}
      </C.Column>
    </C.Container >
  )
}