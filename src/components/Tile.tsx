import sprite from './../assets/icons.svg'

interface Props {
  iconId: string
  title: string
}

export default function Tile({ iconId, title }: Props) {
  return (
    <a className='tile' href='https://www.finder.com.au/'>
      <svg height={40} width={40}>
        <use xlinkHref={`${sprite}#${iconId}`} />
      </svg>
      <h3>{title}</h3>
    </a>
  )
}
