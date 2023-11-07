interface Props {
  isExpanded: boolean
  handleClick: () => void
}
export default function ExpandButton({ isExpanded, handleClick }: Props) {
  return (
    <div className='buttonContainer'>
      <button onClick={handleClick}>
        <span>Show {isExpanded ? 'less' : 'more'} categories</span>
        <svg height={12.5} width={12.5}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='#0271e1'>
            {isExpanded ? (
              <path d='M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' />
            ) : (
              <path d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z' />
            )}
          </svg>
        </svg>
      </button>
    </div>
  )
}
