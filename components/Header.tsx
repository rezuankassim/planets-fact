const Header = () => {
  return (
    <header className='flex items-center justify-between px-6 py-4'>
      <p className='flex-1 font-antonio font-medium text-[28px] leading-normal tracking-[-1.05px] text-white uppercase'>
        The Planets
      </p>

      <button type='button'>
        <svg
          width='24'
          height='17'
          viewBox='0 0 24 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='24' height='3' fill='white' />
          <rect y='7' width='24' height='3' fill='white' />
          <rect y='14' width='24' height='3' fill='white' />
        </svg>
      </button>
    </header>
  )
}

export default Header
