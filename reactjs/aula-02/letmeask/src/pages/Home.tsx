import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleLogoImg from '../assets/images/google-icon.svg';

import "../styles/auth.scss"
import Button from '../components/Button';

export function Home() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="illustration" />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Ask questions of your audience in real time.</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <button className="create-room">
            <img src={googleLogoImg} alt="Logo Google" />
            Create your room with Google
          </button>
          <div className="separator">or enter a room</div>
          <form action="">
            <input
              type="text"
              placeholder="Enter the code of the room"
            />
            <Button type="submit">
              Entrar na sala
            </Button>  
          </form>
        </div>
      </main>
    </div>
  )
}