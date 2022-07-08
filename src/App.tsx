import { Logo } from './components/Logo';

export function App() {
  return (
    <div className='grid'>
      <div className='pt-6 pr-6 pl-6 text-center'>
        <span className='flex items-center justify-center gap-3 text-purple-600 font-medium mb-16 font-sans'>
          <Logo />
          HelpDog
        </span>

        <main>
          <div className='mb-8'>
            <h1 className='text-purple-600 text-3xl font-extrabold'>
              Ajude quem precisa de ajuda
            </h1>
            <svg className='w-[50%]' height="24" viewBox="0 0 239 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19.6159C4 19.6159 89 -7.72852 235.5 9.95114" stroke="#713FFF" stroke-width="7" stroke-linecap="round" />
            </svg>
          </div>

          <p className='purple-600 font-normal mb-8'>
            Com apenas 1 real você pode me ajudar a alimentar cães de ruas.
          </p>

          <div className='grid gap-6 justify-center'>
            <a href="#" className='text-lg bg-purple-500 px-12 py-3 rounded-[40px] text-white max-w-[180px]'>
              Contribuir
            </a>
            <a href="#" className='text-lg text-purple-600'>
              Entrar em contato
            </a>
          </div>
        </main>
      </div>
      <div>
      </div>
    </div>
  )
}
