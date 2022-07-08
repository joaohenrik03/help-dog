import { Logo } from './components/Logo';

export function App() {
  return (
    <>
      <div>
        <span>
          <Logo />
          HelpDog
        </span>

        <main>
          <h1>
            Ajude quem precisa de ajuda
          </h1>
          <span>
            <svg width="239" height="24" viewBox="0 0 239 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 19.6159C4 19.6159 89 -7.72852 235.5 9.95114" stroke="#713FFF" stroke-width="7" stroke-linecap="round" />
            </svg>
          </span>

          <p>
            Com apenas 1 real você pode me ajudar a alimentar cães de ruas.
          </p>

          <a href="#">
            Contribuir
          </a>
          <a href="#">
            Entrar em contato
          </a>
        </main>
      </div>
      <div>
        
      </div>
    </>
  )
}
