import Tile from './Tile'

interface Props {
  expanded: boolean
}

export default function Categories({ expanded }: Props) {
  return (
    <div className='tiles'>
      <Tile iconId='credit-cards' title={'Credit Cards'} />
      <Tile iconId='home-loans' title={'Home Loans'} />
      <Tile iconId='health-insurance' title={'Health Insurance'} />
      <Tile iconId='car-insurance' title={'Car Insurance'} />
      <Tile iconId='broadband-nbn-plans' title={'Broadband & NBN'} />
      <Tile iconId='personal-loans' title={'Personal Loans'} />
    </div>
  )
}
