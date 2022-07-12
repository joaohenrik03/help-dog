import { Logo } from './components/Logo';
import DogBgImg from './assets/dog-bg.png';

export function App() {
  return (
    <div className='grid lg:grid-cols-2 lg:h-screen'>
      <div className='pt-6 pr-6 pl-6 text-center lg:pb-6 lg:ml-40'>
        <span className='flex items-center justify-center gap-3 text-purple-600 font-medium mb-16 font-rubik lg:justify-start lg:mb-[25%]'>
          <Logo />
          HelpDog
        </span>

        <main>
          <div className='mb-8'>
            <h1 className='text-purple-600 text-3xl font-extrabold font-merriweather lg:text-6xl lg:text-left'>
              Ajude quem precisa de ajuda
            </h1>
            <svg className='w-[50%] md:w-[75%] lg:w-[30%]' height="24" viewBox="0 0 239 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19.6159C4 19.6159 89 -7.72852 235.5 9.95114" stroke="#713FFF" stroke-width="7" stroke-linecap="round" />
            </svg>
          </div>

          <p className='purple-600 font-normal mb-8 font-rubik lg:text-left'>
            Com apenas 1 real você pode me ajudar a alimentar cães de ruas.
          </p>

          <div className='flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-start'>
            <a href="#" className='text-lg bg-purple-500 px-12 py-3 rounded-[40px] text-white max-w-[180px] font-rubik'>
              Contribuir
            </a>
            <a href="#" className='text-lg text-purple-600 font-rubik'>
              Entrar em contato
            </a>
          </div>
        </main>
      </div>

      <div className='min-w-screen flex justify-end'>
        <img src={DogBgImg} alt="Foto de um cachorro com um monte de ração na sua frente" className='max-w-[400px] block lg:max-w-none lg:max-h-screen' />
      </div>
    </div>
  )
}
