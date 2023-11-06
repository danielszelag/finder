import sprite from './../assets/icons.svg'

interface Props {
  iconId: string
}

export default function Icon({ iconId }: Props) {
  return (
    <svg>
      <use xlinkHref={`${sprite}#${iconId}`} />
    </svg>
  )
}
