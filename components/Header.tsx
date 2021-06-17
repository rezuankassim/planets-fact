import { Disclosure } from '@headlessui/react'

const links = [
  { color: '#DEF4FC', name: 'Mercury' },
  { color: '#F7CC7F', name: 'Venus' },
  { color: '#545BFE', name: 'Earth' },
  { color: '#FF6A45', name: 'Mars' },
  { color: '#ECAD7A', name: 'Jupiter' },
  { color: '#FCCB6B', name: 'Saturn' },
  { color: '#65F0D5', name: 'Uranus' },
  { color: '#497EFA', name: 'Neptune' },
]

const Header = () => {
  return (
    <Disclosure as='header'>
      {({ open }) => (
        <>
          <div className='flex items-center justify-between border-t-0 border-b border-white border-opacity-20 px-6 py-4'>
            <p className='flex-1 font-antonio font-medium text-[28px] leading-normal tracking-[-1.05px] text-white uppercase'>
              The Planets
            </p>

            <Disclosure.Button className='inline-flex items-center justify-center'>
              <span className='sr-only'>Open main menu</span>
              <svg
                width='24'
                height='17'
                viewBox='0 0 24 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <g opacity={open ? '0.248746' : '1'}>
                  <rect width='24' height='3' fill='white' />
                  <rect y='7' width='24' height='3' fill='white' />
                  <rect y='14' width='24' height='3' fill='white' />
                </g>
              </svg>
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className='px-6 pt-11 pb-[67px]'>
            <ul className='space-y-5'>
              {links.map((link, index) => (
                <div key={link.name}>
                  <li className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <div
                        className='w-5 h-5 rounded-full'
                        style={{
                          backgroundColor: link.color,
                        }}
                      ></div>
                      <span className='ml-[25px] font-spartan font-bold text-[15px] leading-[25px] traker-[1.36px] text-white uppercase'>
                        {link.name}
                      </span>
                    </div>

                    <svg
                      width='6'
                      height='10'
                      viewBox='0 0 6 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path opacity='0.4' d='M1 1L5 5L1 9' stroke='white' />
                    </svg>
                  </li>

                  {index !== links.length - 1 ? (
                    <li className='my-5 bg-white opacity-10 w-full h-px'></li>
                  ) : (
                    ''
                  )}
                </div>
              ))}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header
